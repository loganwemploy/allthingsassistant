"use client";

import { Phone, FileText, RefreshCw } from "lucide-react";
import { Reveal } from "./Reveal";
import { TypeWriter } from "./TypeWriter";
import { WordHighlight } from "./WordHighlight";
import styles from "./ApproachStrip.module.css";

const STEPS = [
  {
    icon: Phone,
    title: "Discovery",
    desc: "Discovery and priority mapping around your current bottlenecks.",
  },
  {
    icon: FileText,
    title: "Alignment",
    desc: "Workflow alignment, boundaries, and communication cadence.",
  },
  {
    icon: RefreshCw,
    title: "Execution",
    desc: "Ongoing execution with reliable follow-through and calm operational control.",
  },
];

export function ApproachStrip() {
  return (
    <section className={styles.section} aria-label="How we work together">
      <div className={styles.inner}>
        <Reveal direction="left">
          <p className={styles.eyebrow}>How it works</p>
        </Reveal>
        <Reveal direction="zoom" delay={0.08}>
          <TypeWriter speed={3} threshold={0.3} ariaLabel="Approach title">
            <h2 className={`${styles.title} gradient-text-card`}>
              A simple path from <WordHighlight>overwhelm to execution</WordHighlight>
            </h2>
          </TypeWriter>
        </Reveal>
        <div className={styles.grid}>
          {STEPS.map(({ icon: Icon, title, desc }, i) => {
            const dirs = ["left", "zoom", "right"] as const;
            return (
              <Reveal key={title} delay={0.12 * i} direction={dirs[i]}>
                <div className={styles.card}>
                  <span className={styles.stepNum}>0{i + 1}</span>
                  <Icon className={styles.icon} strokeWidth={1.5} aria-hidden />
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardDesc}>
                    <span className="desktop-only">{desc}</span>
                    <span className="mobile-only">{desc === "Discovery and priority mapping around your current bottlenecks." ? "Map your bottlenecks." : desc === "Workflow alignment, boundaries, and communication cadence." ? "Align workflows and cadence." : "Reliable execution, calm control."}</span>
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
