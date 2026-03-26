"use client";

import Image from "next/image";
import { CTAButton } from "./CTAButton";
import styles from "./AkilahRoundedPanel.module.css";

const CALENDLY = "https://calendly.com/allthingsassistantllc";
const AKILAH_IMG =
  "https://dl4.pushbulletusercontent2.com/d0WgxSJ9mXgjr7l62jruYsBA76YsaQtf/image.png";

export function AkilahRoundedPanel() {
  return (
    <section className={styles.wrap} aria-label="About Akilah Adams">
      <div className={styles.heroPanel}>
        <div className={styles.copyCol}>
          <div className={styles.kicker}>All Things Assistant LLC</div>
          <h2 className={styles.heroTitle}>
            On the
            <br />
            <span className={styles.large}>Possibility</span> of{" "}
            <span className={styles.large}>Calm</span>
          </h2>

          <h3 className={`${styles.subhead} pinline`}>
            <span>Executive support for high-profile leaders</span>
          </h3>

          <p className={styles.copy}>
            High-stakes leadership loses momentum in the sidelines: inbox drift,
            scheduling pressure, and follow-ups that steal strategic focus. Akilah
            brings quiet precision so your operations stay composed while you lead.
          </p>

          <div className={styles.links}>
            <a href="#booking">Book Discovery Call</a>
            <a href="#booking">View Scheduling</a>
          </div>

          <div className={styles.ctaRow}>
            <CTAButton href={CALENDLY}>Book a Discovery Call</CTAButton>
          </div>
        </div>

        <div className={styles.visualCol}>
          <div className={styles.focal}>
            <Image
              src={AKILAH_IMG}
              alt="Akilah Adams, MBA"
              width={520}
              height={680}
              className={styles.focalImg}
            />
            <span className={styles.point} aria-hidden="true" />
          </div>
          <div className={styles.quote}>
            Discretion. Follow-through. Calm execution.
          </div>
        </div>
      </div>
    </section>
  );
}

