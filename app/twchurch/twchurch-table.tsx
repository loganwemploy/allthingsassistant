"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { Building2, ChevronRight, LayoutGrid, LayoutList } from "lucide-react";
import styles from "./twchurch-table.module.css";

const MOBILE_LAYOUT_KEY = "twchurch-mobile-layout";
type MobileLayoutMode = "list" | "grid";

type Company = Record<string, unknown>;

type Filters = {
  q: string;
  state: string;
  city: string;
  crimeMin: string;
  crimeMax: string;
  revenueMin: string;
  revenueMax: string;
  hasRevenueOnly: boolean;
};

const DEFAULT_PAGE_SIZES = [10, 25, 50] as const;

function toStr(v: unknown) {
  return typeof v === "string" ? v : v == null ? "" : String(v);
}

function toNum(v: unknown): number | null {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const cleaned = v.replace(/[$,]/g, "").trim();
    if (!cleaned) return null;
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function formatMoney(v: unknown) {
  const n = toNum(v);
  if (n == null) return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatAddress(row: Company) {
  const street = toStr(row.street_address);
  if (row.organization_name != null) {
    return street;
  }
  const city = toStr(row.city);
  const state = toStr(row.state);
  return [street, [city, state].filter(Boolean).join(", ")].filter(Boolean).join(" · ");
}

function getWebsite(row: Company) {
  const url = toStr(row.website_url);
  return url && url.startsWith("http") ? url : "";
}

type AwardsSummaryShape = {
  total_award_amount: number;
  total_award_amount_citation?: string;
  award_count: number;
  award_count_citation?: string;
  all_award_date_ranges: { value: string; value_citation: string }[];
};

function getAwardsSummary(row: Company): AwardsSummaryShape | null {
  const a = row.awards_summary;
  if (!a || typeof a !== "object") return null;
  return a as AwardsSummaryShape;
}

function hostLabel(url: string): string {
  try {
    const h = new URL(url).hostname.replace(/^www\./i, "");
    return h || url.slice(0, 48);
  } catch {
    return url.slice(0, 48);
  }
}

/** Short line for source panel (distinguish query strings). */
function sourceLinkLabel(url: string): string {
  try {
    const u = new URL(url);
    const base = u.hostname.replace(/^www\./i, "") + u.pathname + u.search;
    return base.length > 58 ? `${base.slice(0, 55)}…` : base;
  } catch {
    return url.length > 58 ? `${url.slice(0, 55)}…` : url;
  }
}

function collectSources(row: Company): { urls: string[]; notes: string[] } {
  const urls: string[] = [];
  const urlSet = new Set<string>();
  const notes: string[] = [];
  const noteSet = new Set<string>();

  const addUrl = (s: unknown) => {
    const t = toStr(s).trim();
    if (!t.startsWith("http")) return;
    if (urlSet.has(t)) return;
    urlSet.add(t);
    urls.push(t);
  };
  const addNote = (s: unknown) => {
    const t = toStr(s).trim();
    if (!t || t.startsWith("http")) return;
    if (noteSet.has(t)) return;
    noteSet.add(t);
    notes.push(t);
  };

  addUrl(row.company_name_citation);
  addNote(row.company_name_citation);
  addUrl(row.leader_citation);
  addNote(row.leader_citation);
  addUrl(row.street_address_citation);
  addNote(row.street_address_citation);
  addUrl(row.website_url_citation);
  addNote(row.website_url_citation);
  addUrl(row.yearly_revenue_citation);
  addNote(row.yearly_revenue_citation);
  addUrl(row.net_worth_citation);
  addNote(row.net_worth_citation);
  addUrl(row.crime_rate_score_citation);
  addNote(row.crime_rate_score_citation);
  addUrl(row.award_total_citation);
  addNote(row.award_total_citation);
  addUrl(row.award_count_citation);
  addNote(row.award_count_citation);

  const asum = getAwardsSummary(row);
  for (const r of asum?.all_award_date_ranges ?? []) {
    addUrl(r.value_citation);
    addNote(r.value_citation);
  }

  return { urls, notes };
}

/** Book-style footnote: one quiet link, or Sources ▾ with column of links + notes. */
function SourcesFootnote({ row }: { row: Company }) {
  const { urls, notes } = collectSources(row);
  if (urls.length === 0 && notes.length === 0) return null;

  const usePanel = urls.length !== 1 || notes.length > 0;

  if (!usePanel) {
    const u = urls[0]!;
    return (
      <div className={styles.sourcesFootnote}>
        <a href={u} target="_blank" rel="noreferrer" className={styles.sourcesSingleLink}>
          {hostLabel(u)}
        </a>
      </div>
    );
  }

  const summaryText =
    urls.length === 0
      ? `References (${notes.length})`
      : notes.length
        ? `Sources (${urls.length} · ${notes.length} ref.)`
        : `Sources (${urls.length})`;

  return (
    <div className={styles.sourcesFootnote}>
      <details className={styles.sourcesDetails}>
        <summary className={styles.sourcesSummary}>
          <span className={styles.sourcesSummaryText}>{summaryText}</span>
        </summary>
        <div className={styles.sourcesPanel} role="region" aria-label="Sources and references">
          {urls.map((u) => (
            <a key={u} href={u} target="_blank" rel="noreferrer" className={styles.sourcesPanelLink}>
              {sourceLinkLabel(u)}
            </a>
          ))}
          {notes.map((n) => (
            <p key={n} className={styles.sourcesPanelNote}>
              {n}
            </p>
          ))}
        </div>
      </details>
    </div>
  );
}

function AwardRangesList({ ranges }: { ranges: { value: string; value_citation: string }[] }) {
  if (!ranges.length) return <span className={styles.mutedDash}>—</span>;
  return (
    <ul className={styles.rangesList}>
      {ranges.map((r, i) => (
        <li key={i}>{r.value}</li>
      ))}
    </ul>
  );
}

/** Full organization fields (mobile detail). */
function MobileOrgDetailFields({ row }: { row: Company }) {
  const orgName = toStr(row.organization_name) || toStr(row.company_name);
  const address = formatAddress(row);
  const website = getWebsite(row);
  const asum = getAwardsSummary(row);
  const ranges = asum?.all_award_date_ranges ?? [];

  return (
    <>
      <div className={styles.cardTop}>
        <div className={styles.cardTitle}>{orgName || "—"}</div>
        {website ? (
          <a className={styles.cardLink} href={website} target="_blank" rel="noreferrer">
            Website
          </a>
        ) : null}
      </div>

      <div className={styles.cardField}>
        <span className={styles.cardLabel}>leader</span>
        <div className={styles.cardValueBlock}>
          <span className={styles.cardValue}>{toStr(row.leader) || "—"}</span>
        </div>
      </div>
      <div className={styles.cardField}>
        <span className={styles.cardLabel}>street_address</span>
        <div className={styles.cardValueBlock}>
          <span className={styles.cardValue}>{address || "—"}</span>
        </div>
      </div>
      <div className={styles.cardField}>
        <span className={styles.cardLabel}>website_url</span>
        <div className={styles.cardValueBlock}>
          {website ? (
            <a className={styles.link} href={website} target="_blank" rel="noreferrer">
              {website}
            </a>
          ) : (
            "—"
          )}
        </div>
      </div>
      <div className={styles.cardField}>
        <span className={styles.cardLabel}>latest_yearly_revenue</span>
        <div className={styles.cardValueBlock}>
          <span className={styles.cardValue}>{formatMoney(row.yearly_revenue) || "—"}</span>
        </div>
      </div>
      <div className={styles.cardField}>
        <span className={styles.cardLabel}>net_worth</span>
        <div className={styles.cardValueBlock}>
          <span className={styles.cardValue}>{formatMoney(row.net_worth) || "—"}</span>
        </div>
      </div>
      <div className={styles.cardField}>
        <span className={styles.cardLabel}>neighborhoodscout_crime_rate_score</span>
        <div className={styles.cardValueBlock}>
          <span className={styles.cardValue}>
            {toNum(row.crime_rate_score) == null ? "—" : String(toNum(row.crime_rate_score))}
          </span>
        </div>
      </div>

      <div className={styles.cardSection}>awards_summary</div>
      <div className={styles.cardField}>
        <span className={styles.cardLabel}>total_award_amount</span>
        <div className={styles.cardValueBlock}>
          <span className={styles.cardValue}>{formatMoney(row.award_total) || "—"}</span>
        </div>
      </div>
      <div className={styles.cardField}>
        <span className={styles.cardLabel}>award_count</span>
        <div className={styles.cardValueBlock}>
          <span className={styles.cardValue}>
            {asum?.award_count ?? toNum(row.award_count) ?? "—"}
          </span>
        </div>
      </div>
      <div className={styles.cardField}>
        <span className={styles.cardLabel}>all_award_date_ranges</span>
        <div className={styles.cardValueBlock}>
          <AwardRangesList ranges={ranges} />
        </div>
      </div>

      <footer className={styles.cardSourcesFooter}>
        <SourcesFootnote row={row} />
      </footer>
    </>
  );
}

function matchesText(haystack: string, needle: string) {
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

function buildSearchBlob(row: Company) {
  const parts = [
    toStr(row.company_name),
    toStr(row.organization_name),
    toStr(row.leader),
    toStr(row.street_address),
    toStr(row.city),
    toStr(row.state),
    toStr(row.website_url),
    toStr(row.yearly_revenue),
    toStr(row.net_worth),
    toStr(row.crime_rate_score),
    toStr(row.award_total),
    toStr(row.award_count),
    toStr(row.company_name_citation),
    toStr(row.leader_citation),
    toStr(row.street_address_citation),
    toStr(row.website_url_citation),
    toStr(row.yearly_revenue_citation),
    toStr(row.net_worth_citation),
    toStr(row.crime_rate_score_citation),
    toStr(row.award_total_citation),
    toStr(row.award_count_citation),
  ];
  const as = getAwardsSummary(row);
  if (as?.all_award_date_ranges?.length) {
    for (const r of as.all_award_date_ranges) {
      parts.push(r.value, r.value_citation);
    }
  }
  return parts.filter(Boolean).join(" · ");
}

export function TwChurchTable({ companies }: { companies: Company[] }) {
  const [filters, setFilters] = useState<Filters>({
    q: "",
    state: "",
    city: "",
    crimeMin: "",
    crimeMax: "",
    revenueMin: "",
    revenueMax: "",
    hasRevenueOnly: false,
  });
  const [pageSize, setPageSize] = useState<(typeof DEFAULT_PAGE_SIZES)[number]>(25);
  const [page, setPage] = useState(1);
  const [mobileLayout, setMobileLayout] = useState<MobileLayoutMode>("list");
  const [listOpenIndex, setListOpenIndex] = useState<number | null>(null);
  const [gridDetailIndex, setGridDetailIndex] = useState<number | null>(null);

  useEffect(() => {
    try {
      const v = localStorage.getItem(MOBILE_LAYOUT_KEY);
      if (v === "list" || v === "grid") setMobileLayout(v);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(MOBILE_LAYOUT_KEY, mobileLayout);
    } catch {
      /* ignore */
    }
  }, [mobileLayout]);

  useEffect(() => {
    setListOpenIndex(null);
    setGridDetailIndex(null);
  }, [page, pageSize, mobileLayout]);

  const states = useMemo(() => {
    const set = new Set<string>();
    for (const c of companies) {
      const s = toStr(c.state).trim();
      if (s) set.add(s);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [companies]);

  const cities = useMemo(() => {
    const set = new Set<string>();
    for (const c of companies) {
      const stateOk = !filters.state || toStr(c.state) === filters.state;
      if (!stateOk) continue;
      const city = toStr(c.city).trim();
      if (city) set.add(city);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [companies, filters.state]);

  const filtered = useMemo(() => {
    const q = filters.q.trim();
    const crimeMin = filters.crimeMin ? Number(filters.crimeMin) : null;
    const crimeMax = filters.crimeMax ? Number(filters.crimeMax) : null;
    const revMin = filters.revenueMin ? Number(filters.revenueMin) : null;
    const revMax = filters.revenueMax ? Number(filters.revenueMax) : null;

    return companies.filter((row) => {
      if (filters.state && toStr(row.state) !== filters.state) return false;
      if (filters.city && toStr(row.city) !== filters.city) return false;

      if (q) {
        const blob = buildSearchBlob(row);
        if (!matchesText(blob, q)) return false;
      }

      const crime = toNum(row.crime_rate_score);
      if (crimeMin != null && (crime == null || crime < crimeMin)) return false;
      if (crimeMax != null && (crime == null || crime > crimeMax)) return false;

      const rev = toNum(row.yearly_revenue);
      if (filters.hasRevenueOnly && (rev == null || rev <= 0)) return false;
      if (revMin != null && (rev == null || rev < revMin)) return false;
      if (revMax != null && (rev == null || rev > revMax)) return false;

      return true;
    });
  }, [companies, filters]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, totalPages);

  const pageRows = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, pageSize, safePage]);

  const clearFilters = () => {
    setFilters({
      q: "",
      state: "",
      city: "",
      crimeMin: "",
      crimeMax: "",
      revenueMin: "",
      revenueMax: "",
      hasRevenueOnly: false,
    });
    setPage(1);
  };

  const update = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.toolbar}>
        <div className={styles.search}>
          <label className={styles.label} htmlFor="tw-q">
            Search
          </label>
          <input
            id="tw-q"
            className={styles.input}
            value={filters.q}
            onChange={(e) => update("q", e.target.value)}
            placeholder="Company, city, address, website…"
          />
        </div>

        <details className={styles.filters}>
          <summary className={styles.filtersSummary}>
            Filters <span className={styles.filtersHint}>(tap to open)</span>
          </summary>

          <div className={styles.filtersGrid}>
            <div>
              <label className={styles.label} htmlFor="tw-state">
                State
              </label>
              <select
                id="tw-state"
                className={styles.select}
                value={filters.state}
                onChange={(e) => {
                  update("state", e.target.value);
                  update("city", "");
                }}
              >
                <option value="">All</option>
                {states.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={styles.label} htmlFor="tw-city">
                City
              </label>
              <select
                id="tw-city"
                className={styles.select}
                value={filters.city}
                onChange={(e) => update("city", e.target.value)}
              >
                <option value="">All</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.range}>
              <div>
                <label className={styles.label} htmlFor="tw-crime-min">
                  Crime score min
                </label>
                <input
                  id="tw-crime-min"
                  className={styles.input}
                  inputMode="numeric"
                  value={filters.crimeMin}
                  onChange={(e) => update("crimeMin", e.target.value)}
                  placeholder="e.g. 1"
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="tw-crime-max">
                  Crime score max
                </label>
                <input
                  id="tw-crime-max"
                  className={styles.input}
                  inputMode="numeric"
                  value={filters.crimeMax}
                  onChange={(e) => update("crimeMax", e.target.value)}
                  placeholder="e.g. 10"
                />
              </div>
            </div>

            <div className={styles.range}>
              <div>
                <label className={styles.label} htmlFor="tw-rev-min">
                  Revenue min
                </label>
                <input
                  id="tw-rev-min"
                  className={styles.input}
                  inputMode="numeric"
                  value={filters.revenueMin}
                  onChange={(e) => update("revenueMin", e.target.value)}
                  placeholder="e.g. 1000000"
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="tw-rev-max">
                  Revenue max
                </label>
                <input
                  id="tw-rev-max"
                  className={styles.input}
                  inputMode="numeric"
                  value={filters.revenueMax}
                  onChange={(e) => update("revenueMax", e.target.value)}
                  placeholder="e.g. 5000000"
                />
              </div>
            </div>

            <label className={styles.check}>
              <input
                type="checkbox"
                checked={filters.hasRevenueOnly}
                onChange={(e) => update("hasRevenueOnly", e.target.checked)}
              />
              Only show rows with revenue
            </label>

            <button type="button" className={styles.clearBtn} onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        </details>

        <div className={styles.meta}>
          <div className={styles.count}>
            Showing <b>{pageRows.length}</b> of <b>{total}</b>
          </div>
          <div className={styles.pageSize}>
            <label className={styles.label} htmlFor="tw-page-size">
              Rows
            </label>
            <select
              id="tw-page-size"
              className={styles.select}
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value) as any);
                setPage(1);
              }}
            >
              {DEFAULT_PAGE_SIZES.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Desktop/tablet: all JSON fields */}
      <div className={styles.tableShell} role="region" aria-label="Organization data table">
        <table className={styles.table}>
          <thead>
            <tr>
              <th>organization_name</th>
              <th>leader</th>
              <th>street_address</th>
              <th>website_url</th>
              <th className={styles.num}>latest_yearly_revenue</th>
              <th className={styles.num}>net_worth</th>
              <th className={styles.num}>neighborhoodscout_crime_rate_score</th>
              <th className={styles.num}>awards_summary.total_award_amount</th>
              <th className={styles.num}>awards_summary.award_count</th>
              <th>awards_summary.all_award_date_ranges</th>
            </tr>
          </thead>
          <tbody>
            {pageRows.map((row, idx) => {
              const orgName = toStr(row.organization_name) || toStr(row.company_name);
              const leader = toStr(row.leader);
              const address = formatAddress(row);
              const website = getWebsite(row);
              const asum = getAwardsSummary(row);
              const ranges = asum?.all_award_date_ranges ?? [];
              const src = collectSources(row);
              const hasSources = src.urls.length > 0 || src.notes.length > 0;

              return (
                <Fragment key={idx}>
                  <tr>
                    <td>
                      <div className={styles.cellMain}>{orgName || "—"}</div>
                    </td>
                    <td>
                      <div>{leader || "—"}</div>
                    </td>
                    <td>
                      <div>{address || "—"}</div>
                    </td>
                    <td>
                      {website ? (
                        <a className={styles.link} href={website} target="_blank" rel="noreferrer">
                          {website.replace(/^https?:\/\//, "")}
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className={styles.num}>{formatMoney(row.yearly_revenue) || "—"}</td>
                    <td className={styles.num}>{formatMoney(row.net_worth) || "—"}</td>
                    <td className={styles.num}>
                      {toNum(row.crime_rate_score) == null ? "—" : toNum(row.crime_rate_score)}
                    </td>
                    <td className={styles.num}>{formatMoney(row.award_total) || "—"}</td>
                    <td className={styles.num}>{asum?.award_count ?? toNum(row.award_count) ?? "—"}</td>
                    <td>
                      <AwardRangesList ranges={ranges} />
                    </td>
                  </tr>
                  {hasSources ? (
                    <tr className={styles.sourceRow}>
                      <td colSpan={10} className={styles.sourceRowCell}>
                        <SourcesFootnote row={row} />
                      </td>
                    </tr>
                  ) : null}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile: list / grid + thumb-sized controls */}
      <div className={styles.mobileZone} aria-label="Mobile organizations">
        <div className={styles.mobileViewToggle} role="group" aria-label="Layout">
          <div className={styles.viewToggleItem}>
            <button
              type="button"
              className={styles.viewToggleBtn}
              aria-pressed={mobileLayout === "list"}
              aria-label="List layout"
              onClick={() => setMobileLayout("list")}
            >
              <LayoutList className={styles.viewToggleIcon} strokeWidth={2} aria-hidden />
            </button>
            <span className={styles.viewToggleLabel}>List</span>
          </div>
          <div className={styles.viewToggleItem}>
            <button
              type="button"
              className={styles.viewToggleBtn}
              aria-pressed={mobileLayout === "grid"}
              aria-label="Grid layout"
              onClick={() => setMobileLayout("grid")}
            >
              <LayoutGrid className={styles.viewToggleIcon} strokeWidth={2} aria-hidden />
            </button>
            <span className={styles.viewToggleLabel}>Grid</span>
          </div>
        </div>

        {mobileLayout === "list" ? (
          <div className={styles.mobileList} role="list">
            {pageRows.map((row, idx) => {
              const orgName = toStr(row.organization_name) || toStr(row.company_name);
              const address = formatAddress(row);
              const rev = formatMoney(row.yearly_revenue);
              const asum = getAwardsSummary(row);
              const nAwards = asum?.award_count ?? toNum(row.award_count) ?? 0;
              const open = listOpenIndex === idx;
              const sub = [address.slice(0, 52) + (address.length > 52 ? "…" : ""), rev || "—", `${nAwards} award${nAwards === 1 ? "" : "s"}`]
                .filter(Boolean)
                .join(" · ");

              return (
                <div key={idx} className={styles.listRowWrap} role="listitem">
                  <button
                    type="button"
                    className={styles.listRowTrigger}
                    aria-expanded={open}
                    onClick={() => setListOpenIndex(open ? null : idx)}
                  >
                    <div className={styles.listRowText}>
                      <div className={styles.listRowTitle}>{orgName || "—"}</div>
                      <div className={styles.listRowSub}>{sub}</div>
                    </div>
                    <ChevronRight
                      className={`${styles.listChevron} ${open ? styles.listChevronOpen : ""}`}
                      aria-hidden
                      strokeWidth={2.25}
                    />
                  </button>
                  {open ? (
                    <article className={styles.listDetailCard}>
                      <MobileOrgDetailFields row={row} />
                    </article>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <div className={styles.mobileGrid}>
              {pageRows.map((row, idx) => {
                const orgName = toStr(row.organization_name) || toStr(row.company_name);
                const website = getWebsite(row);
                const rev = formatMoney(row.yearly_revenue) || "—";
                const asum = getAwardsSummary(row);
                const awardTotal = formatMoney(row.award_total) || "—";
                const selected = gridDetailIndex === idx;

                return (
                  <div
                    key={idx}
                    role="button"
                    tabIndex={0}
                    className={`${styles.gridTile} ${selected ? styles.gridTileSelected : ""}`}
                    aria-pressed={selected}
                    aria-label={`${orgName}. Tap for full details.`}
                    onClick={() => setGridDetailIndex(selected ? null : idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setGridDetailIndex(selected ? null : idx);
                      }
                    }}
                  >
                    <Building2 className={styles.gridTileIcon} strokeWidth={1.75} aria-hidden />
                    <div className={styles.gridTileTitle}>{orgName || "—"}</div>
                    <div className={styles.gridTileMeta}>
                      <span className={styles.gridTileStatLine}>Revenue: {rev}</span>
                      <span className={styles.gridTileStatLine}>
                        {(asum?.award_count ?? 0) || 0} award
                        {(asum?.award_count ?? 0) === 1 ? "" : "s"} · {awardTotal} total
                      </span>
                    </div>
                    {website ? (
                      <a
                        href={website}
                        className={styles.gridWebsiteBtn}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                      >
                        Website
                      </a>
                    ) : (
                      <span className={styles.gridWebsiteBtnMuted}>No website</span>
                    )}
                    <span className={styles.gridTileHint}>
                      {selected ? "Tap tile to hide details" : "Tap for full details"}
                    </span>
                  </div>
                );
              })}
            </div>
            {gridDetailIndex != null && pageRows[gridDetailIndex] ? (
              <article className={styles.gridDetailPanel}>
                <MobileOrgDetailFields row={pageRows[gridDetailIndex]} />
                <button
                  type="button"
                  className={styles.gridCloseBtn}
                  onClick={() => setGridDetailIndex(null)}
                >
                  Close details
                </button>
              </article>
            ) : null}
          </>
        )}
      </div>

      <div className={styles.pagination} aria-label="Pagination">
        <button
          type="button"
          className={styles.pageBtn}
          disabled={safePage <= 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Prev
        </button>

        <div className={styles.pageStatus}>
          Page <b>{safePage}</b> of <b>{totalPages}</b>
        </div>

        <button
          type="button"
          className={styles.pageBtn}
          disabled={safePage >= totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
}

