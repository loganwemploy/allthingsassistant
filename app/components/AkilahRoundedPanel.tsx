"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeWriter } from "./TypeWriter";
import { WordHighlight } from "./WordHighlight";
import { Reveal } from "./Reveal";
import styles from "./AkilahRoundedPanel.module.css";

const AKILAH_PHOTO = "/akilah-photo.jpg";

export function AkilahRoundedPanel() {
  return (
    <section className={styles.wrap} aria-label="About All Things Assistant">
      <div className={styles.panel}>
        <div className={styles.copyCol}>
          <Reveal direction="left">
            <p className={styles.eyebrow}>All Things Assistant LLC</p>
          </Reveal>

          <Reveal direction="zoom">
            <TypeWriter speed={3} threshold={0.3} ariaLabel="Panel title">
              <h2 className={styles.title}>
                On the Possibility of <WordHighlight light>Calm</WordHighlight>
              </h2>
            </TypeWriter>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <p className={styles.copy}>
              Executive support for high-profile leaders. High-stakes leadership loses
              momentum in the sidelines: inbox drift, scheduling pressure, and follow-ups
              that steal strategic focus. Akilah brings quiet precision so your operations
              stay composed while you lead.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className={styles.ctaRow}>
              <Link href="/#booking" className="btn btnPrimary">Book a Discovery Call</Link>
              <Link href="/contact" className="btn">View Scheduling</Link>
            </div>
          </Reveal>
        </div>

        <div className={styles.visualCol}>
          <Reveal direction="scale" delay={0.1}>
            <div className={styles.photoFrame}>
              <Image
                src={AKILAH_PHOTO}
                alt="Akilah Adams"
                width={320}
                height={400}
                className={styles.photo}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}