import { X, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { TypeWriter } from "./TypeWriter";
import styles from "./ComparisonSection.module.css";

const ROWS = [
  { without: "Inbox piles up, urgent replies get buried", with: "Inbox triaged daily, priorities flagged, loops closed" },
  { without: "Calendar chaos — reschedules, double-books, no agendas", with: "Calendar owned: confirmations, prep, clear next steps" },
  { without: "Follow-ups drift for days or weeks", with: "Follow-through systems that close every loop" },
  { without: "Admin eats evenings and weekends", with: "Admin handled — you focus on outcomes" },
  { without: "Context-switching all day", with: "Structured handoffs, consistent execution" },
];

export function ComparisonSection() {
  return (
    <section className={styles.section} aria-label="Before and after comparison">
      <div className={styles.inner}>
        <Reveal direction="left">
          <p className={styles.eyebrow}>Without vs. with support</p>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <TypeWriter speed={3} threshold={0.3} ariaLabel="Comparison title">
            <h2 className={styles.title}>What changes when you delegate</h2>
          </TypeWriter>
        </Reveal>
        <div className={styles.table}>
          <Reveal delay={0.15} direction="scale">
            <div className={styles.headerRow}>
              <div className={styles.headerCell}>
                <X size={16} strokeWidth={2.5} aria-hidden />
                <span>Without support</span>
              </div>
              <div className={styles.headerCell}>
                <Check size={16} strokeWidth={2.5} aria-hidden />
                <span>With All Things Assistant</span>
              </div>
            </div>
          </Reveal>
          {ROWS.map((r, i) => (
            <Reveal key={r.without} delay={0.2 + i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={styles.row}>
                <div className={styles.cell}>
                  <span className={styles.bullet} aria-hidden="true" />
                  <span className="mobile-clamp-2">{r.without}</span>
                </div>
                <div className={`${styles.cell} ${styles.cellWith}`}>
                  <Check size={14} strokeWidth={2.5} className={styles.checkIcon} aria-hidden />
                  <span className="mobile-clamp-2">{r.with}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
