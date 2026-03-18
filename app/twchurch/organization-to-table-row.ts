/**
 * Maps twchurch.json `organizations[]` entries to flat rows for TwChurchTable.
 */

export type AwardDateRange = { value: string; value_citation: string };

export type OrganizationJson = {
  organization_name: string;
  organization_name_citation?: string;
  leader?: string;
  leader_citation?: string;
  street_address: string;
  street_address_citation?: string;
  website_url?: string;
  website_url_citation?: string;
  awards_summary: {
    total_award_amount: number;
    total_award_amount_citation?: string;
    award_count: number;
    award_count_citation?: string;
    all_award_date_ranges: AwardDateRange[];
  };
  latest_yearly_revenue?: number;
  latest_yearly_revenue_citation?: string;
  net_worth?: number;
  net_worth_citation?: string;
  neighborhoodscout_crime_rate_score?: number;
  neighborhoodscout_crime_rate_score_citation?: string;
};

export type TableRow = Record<string, unknown>;

function parseMMDY(s: string): number {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s.trim());
  if (!m) return NaN;
  return Date.UTC(Number(m[3]), Number(m[1]) - 1, Number(m[2]));
}

function formatMMDY(ts: number): string {
  const d = new Date(ts);
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  const yyyy = String(d.getUTCFullYear());
  return `${mm}/${dd}/${yyyy}`;
}

function awardSpanFromRanges(ranges: AwardDateRange[]): {
  award_start_date: string | null;
  award_end_date: string | null;
} {
  let minStart: number | null = null;
  let maxEnd: number | null = null;
  for (const { value } of ranges) {
    const parts = value.split(" - ").map((x) => x.trim());
    if (parts.length !== 2) continue;
    const ta = parseMMDY(parts[0] ?? "");
    const tb = parseMMDY(parts[1] ?? "");
    if (!Number.isNaN(ta) && (minStart === null || ta < minStart)) minStart = ta;
    if (!Number.isNaN(tb) && (maxEnd === null || tb > maxEnd)) maxEnd = tb;
  }
  return {
    award_start_date: minStart != null ? formatMMDY(minStart) : null,
    award_end_date: maxEnd != null ? formatMMDY(maxEnd) : null,
  };
}

/** City and state for filters; parsed from trailing ", City, ST" or ", City, ST zip". */
export function parseCityStateFromAddress(streetAddress: string): { city: string; state: string } {
  const parts = streetAddress.split(",").map((s) => s.trim()).filter(Boolean);
  if (parts.length < 2) return { city: "", state: "" };
  const last = parts[parts.length - 1] ?? "";
  const m = /^([A-Z]{2})(?:\s+\d{5}(?:-\d{4})?)?$/i.exec(last);
  if (m) {
    return {
      city: parts[parts.length - 2] ?? "",
      state: m[1].toUpperCase(),
    };
  }
  if (last.length === 2 && /^[A-Z]{2}$/i.test(last)) {
    return {
      city: parts[parts.length - 2] ?? "",
      state: last.toUpperCase(),
    };
  }
  return { city: "", state: "" };
}

export function organizationToTableRow(org: OrganizationJson): TableRow {
  const { city, state } = parseCityStateFromAddress(org.street_address);
  const span = awardSpanFromRanges(org.awards_summary.all_award_date_ranges ?? []);
  const a = org.awards_summary;

  return {
    organization_name: org.organization_name,
    company_name: org.organization_name,
    company_name_citation: org.organization_name_citation ?? "",
    street_address: org.street_address,
    street_address_citation: org.street_address_citation ?? "",
    city,
    state,
    website_url: org.website_url ?? "",
    website_url_citation: org.website_url_citation ?? "",
    yearly_revenue: org.latest_yearly_revenue ?? 0,
    yearly_revenue_citation: org.latest_yearly_revenue_citation ?? "",
    net_worth: org.net_worth ?? 0,
    net_worth_citation: org.net_worth_citation ?? "",
    crime_rate_score: org.neighborhoodscout_crime_rate_score ?? null,
    crime_rate_score_citation: org.neighborhoodscout_crime_rate_score_citation ?? "",
    leader: org.leader ?? "",
    leader_citation: org.leader_citation ?? "",
    award_total: a.total_award_amount,
    award_total_citation: a.total_award_amount_citation ?? "",
    award_count: a.award_count,
    award_count_citation: a.award_count_citation ?? "",
    award_start_date: span.award_start_date,
    award_end_date: span.award_end_date,
    awards_summary: org.awards_summary,
  };
}
