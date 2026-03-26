"use client";

import { BriefcaseBusiness, Lock, Laptop, GraduationCap, Timer } from "lucide-react";
import styles from "./QualifiersBand.module.css";

const ITEMS = [
  { icon: BriefcaseBusiness, text: "20+ years exec support" },
  { icon: GraduationCap, text: "MBA" },
  { icon: Lock, text: "Confidential / discreet" },
  { icon: Laptop, text: "Remote + virtual-ready" },
  { icon: Timer, text: "Fast follow-through" },
] as const;

export function QualifiersBand() {
  return (
    <section className={styles.root} aria-label="Key qualifications">
      <div className={styles.inner}>
        <div className={styles.band}>
          {ITEMS.map(({ icon: Icon, text }) => (
            <div key={text} className={styles.item}>
              <Icon className={styles.icon} strokeWidth={1.5} aria-hidden="true" />
              <div className={styles.text}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

