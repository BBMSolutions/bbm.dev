import type { TeamExperienceCompany } from "@/data/bbm-content";

function CompanyMark({ id }: { id: string }) {
  switch (id) {
    case "att":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" fill="#009FDB" opacity="0.16" />
          <path
            d="M4.2 9h15.6M3 12h18M4.2 15h15.6"
            stroke="#009FDB"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="9.2" stroke="#009FDB" strokeWidth="1.3" fill="none" />
        </svg>
      );
    case "sandiego":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
        >
          <path
            d="M12 3L4 7v5c0 4.8 3.4 8.5 8 9.5 4.6-1 8-4.7 8-9.5V7l-8-4z"
            fill="#0284C7"
            opacity="0.14"
            stroke="#0369A1"
            strokeWidth="1.4"
          />
          <path
            d="M8.5 13c1.2-1 2.3-1 3.5 0s2.3 1 3.5 0"
            stroke="#0369A1"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );
    case "toyota":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="12" rx="9.5" ry="6.5" stroke="#DC2626" strokeWidth="1.5" fill="none" />
          <ellipse cx="12" cy="12" rx="2.6" ry="6.2" stroke="#DC2626" strokeWidth="1.4" fill="none" />
          <ellipse cx="12" cy="9.2" rx="5.5" ry="2" stroke="#DC2626" strokeWidth="1.3" fill="none" />
        </svg>
      );
    case "bbva":
      return (
        <span
          aria-hidden="true"
          className="inline-flex h-4 items-center rounded-[2px] bg-[#004481] px-1 font-mono text-[8px] font-bold tracking-tight text-white"
        >
          BBVA
        </span>
      );
    case "heb":
      return (
        <span
          aria-hidden="true"
          className="inline-flex h-4 items-center rounded-full bg-[#DC2626] px-1.5 font-sans text-[8px] font-extrabold tracking-tight text-white"
        >
          H-E-B
        </span>
      );
    case "caffenio":
      return (
        <span
          aria-hidden="true"
          className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#B91C1C]/12 font-serif text-[10px] font-bold text-[#991B1B]"
        >
          C
        </span>
      );
    case "compartamos":
      return (
        <span
          aria-hidden="true"
          className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C026D3]/12 font-sans text-[9px] font-bold text-[#A21CAF]"
        >
          CB
        </span>
      );
    case "prodensa":
      return (
        <span
          aria-hidden="true"
          className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-[#15428b]/12 font-mono text-[9px] font-bold text-[#15428b]"
        >
          P
        </span>
      );
    default:
      return null;
  }
}

export function CompanyExperienceBadges({
  heading,
  companies,
}: {
  heading?: string;
  companies: TeamExperienceCompany[];
}) {
  return (
    <div className="mt-4 rounded-md border border-slate-200/80 bg-slate-50/70 p-3">
      {heading && (
        <p className="font-mono text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
          {heading}
        </p>
      )}
      <div className="mt-2 flex flex-wrap gap-1.5">
        {companies.map((company) => (
          <span
            key={company.id}
            title={`${company.name} — ${company.context}`}
            className="inline-flex items-center gap-1.5 rounded-sm border border-slate-200 bg-white px-2 py-1 text-[11px] font-semibold text-slate-800 shadow-[0_1px_1px_rgba(15,23,42,0.03)]"
          >
            <CompanyMark id={company.id} />
            <span>{company.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
