"use client";

import { useMemo, useState } from "react";
import styles from "./twchurch-table.module.css";

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
  const city = toStr(row.city);
  const state = toStr(row.state);
  return [street, [city, state].filter(Boolean).join(", ")].filter(Boolean).join(" · ");
}

function getCitation(row: Company, key: string) {
  const citeKey = `${key}_citation`;
  const v = row[citeKey];
  const s = toStr(v);
  return s && s.startsWith("http") ? s : "";
}

function getWebsite(row: Company) {
  const url = toStr(row.website_url);
  return url && url.startsWith("http") ? url : "";
}

function matchesText(haystack: string, needle: string) {
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

function buildSearchBlob(row: Company) {
  const parts = [
    toStr(row.company_name),
    toStr(row.street_address),
    toStr(row.city),
    toStr(row.state),
    toStr(row.website_url),
    toStr(row.yearly_revenue),
    toStr(row.net_worth),
    toStr(row.crime_rate_score),
  ];
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
      if (filters.hasRevenueOnly && rev == null) return false;
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

      {/* Desktop/tablet spreadsheet */}
      <div className={styles.tableShell} role="region" aria-label="Spreadsheet table">
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Address</th>
              <th>Website</th>
              <th className={styles.num}>Revenue</th>
              <th className={styles.num}>Net worth</th>
              <th className={styles.num}>Crime</th>
            </tr>
          </thead>
          <tbody>
            {pageRows.map((row, idx) => {
              const company = toStr(row.company_name);
              const companyCite = getCitation(row, "company_name");
              const address = formatAddress(row);
              const addressCite = getCitation(row, "street_address") || getCitation(row, "city");
              const website = getWebsite(row);
              const websiteCite = getCitation(row, "website_url");
              const revenue = formatMoney(row.yearly_revenue);
              const revenueCite = getCitation(row, "yearly_revenue");
              const netWorth = formatMoney(row.net_worth);
              const netWorthCite = getCitation(row, "net_worth");
              const crime = toNum(row.crime_rate_score);
              const crimeCite = getCitation(row, "crime_rate_score");

              return (
                <tr key={idx}>
                  <td>
                    <div className={styles.cellMain}>{company || "—"}</div>
                    {companyCite ? (
                      <a className={styles.cite} href={companyCite} target="_blank" rel="noreferrer">
                        source
                      </a>
                    ) : null}
                  </td>
                  <td>
                    <div className={styles.cellMain}>{address || "—"}</div>
                    {addressCite ? (
                      <a className={styles.cite} href={addressCite} target="_blank" rel="noreferrer">
                        source
                      </a>
                    ) : null}
                  </td>
                  <td>
                    {website ? (
                      <a className={styles.link} href={website} target="_blank" rel="noreferrer">
                        {website.replace(/^https?:\/\//, "")}
                      </a>
                    ) : (
                      "—"
                    )}
                    {websiteCite ? (
                      <a className={styles.cite} href={websiteCite} target="_blank" rel="noreferrer">
                        source
                      </a>
                    ) : null}
                  </td>
                  <td className={styles.num}>
                    {revenue || "—"}
                    {revenueCite ? (
                      <a className={styles.cite} href={revenueCite} target="_blank" rel="noreferrer">
                        source
                      </a>
                    ) : null}
                  </td>
                  <td className={styles.num}>
                    {netWorth || "—"}
                    {netWorthCite ? (
                      <a className={styles.cite} href={netWorthCite} target="_blank" rel="noreferrer">
                        source
                      </a>
                    ) : null}
                  </td>
                  <td className={styles.num}>
                    {crime == null ? "—" : crime}
                    {crimeCite ? (
                      <a className={styles.cite} href={crimeCite} target="_blank" rel="noreferrer">
                        source
                      </a>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className={styles.cards} aria-label="Mobile list">
        {pageRows.map((row, idx) => {
          const company = toStr(row.company_name);
          const address = formatAddress(row);
          const website = getWebsite(row);
          const revenue = formatMoney(row.yearly_revenue);
          const netWorth = formatMoney(row.net_worth);
          const crime = toNum(row.crime_rate_score);

          return (
            <article key={idx} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardTitle}>{company || "—"}</div>
                {website ? (
                  <a className={styles.cardLink} href={website} target="_blank" rel="noreferrer">
                    Website
                  </a>
                ) : null}
              </div>
              <div className={styles.cardRow}>
                <span className={styles.cardLabel}>Address</span>
                <span className={styles.cardValue}>{address || "—"}</span>
              </div>
              <div className={styles.cardGrid}>
                <div className={styles.cardRow}>
                  <span className={styles.cardLabel}>Revenue</span>
                  <span className={styles.cardValue}>{revenue || "—"}</span>
                </div>
                <div className={styles.cardRow}>
                  <span className={styles.cardLabel}>Net worth</span>
                  <span className={styles.cardValue}>{netWorth || "—"}</span>
                </div>
                <div className={styles.cardRow}>
                  <span className={styles.cardLabel}>Crime</span>
                  <span className={styles.cardValue}>{crime == null ? "—" : crime}</span>
                </div>
              </div>
            </article>
          );
        })}
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

