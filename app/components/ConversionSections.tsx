import Link from "next/link";
import {
  ArrowLeftRight,
  BriefcaseBusiness,
  Check,
  Clock3,
  FileText,
  Zap,
  RefreshCw,
  Target,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { TypeWriter } from "./TypeWriter";
import styles from "./ConversionSections.module.css";

const CONTEXT_ITEMS = [
  {
    icon: ArrowLeftRight,
    text: "Constantly shifting priorities that drain your creative energy.",
  },
  {
    icon: BriefcaseBusiness,
    text: "Office politics and operational friction slowing your momentum.",
  },
  {
    icon: Clock3,
    text: "Accumulating follow-up debt that keeps you awake at night.",
  },
  {
    icon: RefreshCw,
    text: "Exhausting context switching between vision and coordination.",
  },
] as const;

const SERVICE_OUTCOMES = [
  {
    icon: Check,
    text: "Executive operations rhythm: calendar, priorities, and communication — kept consistent.",
  },
  {
    icon: Target,
    text: "Project execution support: fewer dropped handoffs, faster follow-through.",
  },
  {
    icon: FileText,
    text: "Meetings and events: polished planning without last-minute scramble.",
  },
  {
    icon: Zap,
    text: "Systemized admin flow: cleaner processes that reduce noise.",
  },
] as const;

const TRUST = [
  "NDA available",
  "Executive comms",
  "Calendar + inbox",
  "Follow-through systems",
];

export function ConversionSections() {
  return (
    <section className={styles.wrap} aria-labelledby="context-heading">
      <div className={styles.container}>
        <div className={styles.contextSection}>
          <Reveal direction="left">
            <p className={styles.eyebrow}>The context</p>
          </Reveal>
          <Reveal direction="zoom">
            <TypeWriter speed={3} threshold={0.25} ariaLabel="Context heading">
              <h2 id="context-heading" className={styles.contextTitle}>
                The unspoken tax on high performers.
              </h2>
            </TypeWriter>
          </Reveal>
          <div className={styles.problemGrid}>
            {CONTEXT_ITEMS.map(({ icon: Icon, text }, i) => (
              <Reveal key={text} delay={0.08 * i} direction="left">
                <div className={styles.problemRow}>
                  <Icon className={styles.problemIcon} strokeWidth={1.5} aria-hidden />
                  <p className={styles.problemText}>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="fade" delay={0.3}>
            <p className={styles.quote}>
              High-leverage leadership means protecting your attention from low-leverage
              coordination — so strategy gets the room it deserves.
            </p>
          </Reveal>
          <Reveal direction="right" delay={0.35}>
            <Link href="/#booking" className={styles.contextCta}>
              If this feels familiar, start here →
            </Link>
          </Reveal>
        </div>

        <div className={styles.outcomesSection}>
          <Reveal direction="left">
            <p className={styles.eyebrow}>Services as outcomes</p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2 className={styles.outcomesTitle}>
              What you gain from support that matches your level
            </h2>
          </Reveal>

          <div className={styles.outcomesGrid}>
            {SERVICE_OUTCOMES.map(({ icon: Icon, text }, i) => {
              const dirs = ["scale", "zoom", "fade", "scale"] as const;
              return (
                <Reveal key={text} delay={0.06 * i} direction={dirs[i]}>
                  <div className={styles.outcomeCard}>
                    <Icon className={styles.outcomeIcon} strokeWidth={1.5} aria-hidden />
                    <p className={styles.outcomeText}>{text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className={styles.trustRow}>
            {TRUST.map((t, i) => (
              <Reveal key={t} delay={0.08 * i} direction="up">
                <span className={styles.trustPill}>{t}</span>
              </Reveal>
            ))}
          </div>

          <Reveal direction="right" delay={0.25}>
            <div className={styles.ctaRow}>
              <Link href="/#booking" className={styles.cta}>
                Book a Discovery Call
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
