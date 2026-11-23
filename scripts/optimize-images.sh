#!/usr/bin/env bash
# ==============================================================================
# BBM — Script de optimización automática de imágenes a WebP
# ==============================================================================
# Uso:
#   pnpm optimize:images                 # Procesa todas las imágenes en ./images
#   pnpm optimize:images -- --clean      # Procesa y elimina ./images al terminar
#
# Reglas aplicadas:
# - Convierte a WebP optimizado sin metadatos EXIF y con auto-orientación.
# - Nunca deforma las imágenes; si requiere ajustar relación de aspecto,
#   recorta únicamente desde la parte superior (-gravity South).
# - Clasificación automática por nombre de archivo:
#     * "Retrato*" -> public/images/team/<slug>.webp (800x1000 px, 4:5)
#     * "logo*" o ".ico" -> public/images/logos/<slug>.webp (256x256 máx)
#     * Resto -> public/images/sections/<slug>.webp (1600 px ancho máx)
# ==============================================================================

set -euo pipefail

SRC_DIR="images"
CLEAN_AFTER=false

for arg in "$@"; do
  if [[ "$arg" == "--clean" ]]; then
    CLEAN_AFTER=true
  fi
done

if ! command -v magick >/dev/null 2>&1; then
  echo "Error: ImageMagick ('magick') no está instalado en el sistema." >&2
  exit 1
fi

if [[ ! -d "$SRC_DIR" ]]; then
  echo "No se encontró la carpeta '$SRC_DIR/'. Coloca allí las imágenes a optimizar."
  exit 0
fi

mkdir -p public/images/team public/images/sections public/images/logos

slugify() {
  local input="$1"
  echo "$input" \
    | iconv -f UTF-8 -t ASCII//TRANSLIT 2>/dev/null || echo "$input" \
    | tr '[:upper:]' '[:lower:]'
}

make_slug() {
  local raw="$1"
  local clean
  clean="$(printf '%s' "$raw" | iconv -f UTF-8 -t ASCII//TRANSLIT 2>/dev/null || printf '%s' "$raw")"
  clean="$(printf '%s' "$clean" | tr '[:upper:]' '[:lower:]')"
  clean="$(printf '%s' "$clean" | sed -E 's/^retrato[[:space:]—-]+//g; s/\b(ing|lic|dr|dra)\.?[[:space:]]*//g')"
  clean="$(printf '%s' "$clean" | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//')"
  printf '%s' "$clean"
}

shopt -s nullglob
files=("$SRC_DIR"/*)

if [[ ${#files[@]} -eq 0 ]]; then
  echo "La carpeta '$SRC_DIR/' está vacía."
  exit 0
fi

for filepath in "${files[@]}"; do
  [[ -f "$filepath" ]] || continue
  filename="$(basename "$filepath")"
  base="${filename%.*}"
  ext="${filename##*.}"
  ext_lower="$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')"

  case "$ext_lower" in
    jpg|jpeg|png|webp|ico) ;;
    *)
      echo "Saltando archivo no soportado: $filename"
      continue
      ;;
  esac

  slug="$(make_slug "$base")"
  [[ -n "$slug" ]] || slug="imagen"

  if [[ "$base" == Retrato* || "$base" == retrat* ]]; then
    out="public/images/team/${slug}.webp"
    width="$(magick identify -format "%w" "${filepath}[0]")"
    if (( width >= 800 )); then
      magick "${filepath}[0]" -auto-orient -strip -resize 800x1000^ -gravity South -extent 800x1000 -quality 85 "$out"
    else
      # Evitar reescalado borroso en retratos pequeños
      magick "${filepath}[0]" -auto-orient -strip -quality 88 "$out"
    fi
    echo "✓ Retrato optimizado: $filename -> $out"

  elif [[ "$ext_lower" == "ico" || "$base" == logo* || "$base" == Logo* ]]; then
    out="public/images/logos/${slug}.webp"
    magick "${filepath}[0]" -auto-orient -strip -resize "256x256>" -quality 90 "$out"
    echo "✓ Logo optimizado: $filename -> $out"

  else
    out="public/images/sections/${slug}.webp"
    magick "${filepath}[0]" -auto-orient -strip -resize "1600x>" -quality 84 "$out"
    echo "✓ Sección optimizada: $filename -> $out"
  fi
done

if [[ "$CLEAN_AFTER" == true ]]; then
  rm -rf "$SRC_DIR"
  echo "✓ Carpeta residual '$SRC_DIR/' eliminada."
fi
