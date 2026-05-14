import { BriefcaseBusiness, Lock, Laptop, GraduationCap, Timer } from "lucide-react";
import { TypeWriter } from "./TypeWriter";
import { Reveal } from "./Reveal";
import styles from "./CredentialsBar.module.css";

const ITEMS = [
  { icon: BriefcaseBusiness, text: "20+ years exec support" },
  { icon: GraduationCap, text: "MBA" },
  { icon: Lock, text: "Confidential / discreet" },
  { icon: Laptop, text: "Remote + virtual-ready" },
  { icon: Timer, text: "Fast follow-through" },
] as const;

export function CredentialsBar() {
  const ITEM_DIRECTIONS = ["scale", "zoom", "fade", "up", "scale"] as const;

  return (
    <section className={styles.section} aria-label="Real credentials">
      <div className={styles.inner}>
        <Reveal direction="left">
          <TypeWriter speed={3} threshold={0.3} ariaLabel="Credentials heading">
            <p className={styles.eyebrow}>20 YEARS OF PROFESSIONAL EXPERIENCE</p>
          </TypeWriter>
        </Reveal>
        <div className={styles.grid}>
          {ITEMS.map(({ icon: Icon, text }, i) => (
            <Reveal key={text} delay={0.06 * i} direction={ITEM_DIRECTIONS[i]}>
              <div className={styles.item}>
                <Icon className={styles.icon} strokeWidth={1.5} aria-hidden />
                <span className={styles.text}>{text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
