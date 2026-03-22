import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import week1 from "./data/week-1.json";
import styles from "./dashboard.module.css";
import type { Lead, LeadDetail, TipVariant, WeekLeadsData } from "./types";

const data = week1 as WeekLeadsData;

export const metadata: Metadata = {
  title: "Weekly leads · All Things Assistant",
  description: "Personal assistant job leads curated for Akilah.",
  robots: { index: false, follow: false },
};

function TipCallout({
  variant = "note",
  text,
}: {
  variant?: TipVariant;
  text: string;
}) {
  const cls =
    variant === "highlight"
      ? styles.tipHighlight
      : variant === "warning"
        ? styles.tipWarning
        : styles.tipNote;

  const label =
    variant === "highlight"
      ? "Best bet"
      : variant === "warning"
        ? "Heads up"
        : "Tip";

  const icon =
    variant === "highlight" ? "★" : variant === "warning" ? "!" : "→";

  return (
    <aside className={`${styles.tip} ${cls}`} role="note">
      <p className={styles.tipLabel}>
        <span className={styles.tipIcon} aria-hidden="true">
          {icon}
        </span>
        {label}
      </p>
      <p className={styles.tipText}>{text}</p>
    </aside>
  );
}

function DetailValue({ detail }: { detail: LeadDetail }) {
  if (detail.href) {
    return (
      <a
        href={detail.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.detailLink}
      >
        {detail.value}
      </a>
    );
  }
  return <>{detail.value}</>;
}

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>

      <header className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link href="/" className={styles.backLink}>
            ← All Things Assistant
          </Link>
          <span className={styles.weekBadge}>{data.weekLabel}</span>
        </div>
      </header>

      <main id="main-content" className={styles.main}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Live from Indeed</p>
          <h1 className={styles.title}>{data.pageTitle}</h1>
          <p className={styles.subtitle}>{data.pageSubtitle}</p>
        </div>

        <section
          className={styles.leadsSection}
          aria-labelledby="leads-heading"
        >
          <h2 id="leads-heading" className={styles.sectionTitle}>
            Job leads
          </h2>
          <ol className={styles.leadList}>
            {data.leads.map((lead: Lead, i: number) => (
              <li key={lead.id} className={styles.lead}>
                <article aria-labelledby={`lead-${lead.id}-title`}>
                  <header className={styles.leadHeader}>
                    <span className={styles.leadIndex}>Lead {i + 1}</span>
                    <h2 id={`lead-${lead.id}-title`} className={styles.leadTitle}>
                      <span aria-hidden="true">🏢 </span>
                      {lead.company}
                      <span className={styles.jobTitleLine}>
                        {lead.jobTitle}
                      </span>
                    </h2>
                    <p className={styles.location}>
                      <span className={styles.locationLabel}>Location</span>
                      {lead.location}
                    </p>
                  </header>

                  <dl className={styles.details}>
                    {lead.details.map((d) => (
                      <div key={`${lead.id}-${d.label}`}>
                        <dt className={styles.dt}>{d.label}</dt>
                        <dd className={styles.dd}>
                          <DetailValue detail={d} />
                        </dd>
                      </div>
                    ))}
                    <div className={styles.jobRow}>
                      <dt className={styles.dt}>Job listing</dt>
                      <dd className={styles.dd}>
                        {lead.jobUrl ? (
                          <a
                            href={lead.jobUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.jobLink}
                          >
                            View listing on Indeed
                          </a>
                        ) : (
                          <p className={styles.jobMissing}>
                            Indeed URL not saved yet — open the role from your
                            Indeed search or saved listing.
                          </p>
                        )}
                      </dd>
                    </div>
                  </dl>

                  <TipCallout
                    variant={lead.tipVariant ?? "note"}
                    text={lead.tip}
                  />
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section
          className={styles.friendSection}
          aria-labelledby="friend-notes-heading"
        >
          <div className={styles.friendCard}>
            <h2 id="friend-notes-heading" className={styles.friendTitle}>
              {data.friendNotesHeading}
            </h2>
            <ul className={styles.friendList}>
              {data.friendNotes.map((note, idx) => (
                <li key={`friend-${idx}`}>{note}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
