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
      <div className={styles.rounded}>
        <div className={styles.top}>
          <span className={styles.tag}>Akilah Adams, MBA</span>
          <span className={styles.rule} aria-hidden="true" />
        </div>

        <div className={styles.images}>
          <div className={styles.sticky}>
            <span className={styles.accent} aria-hidden="true" />
            <div className={styles.imgShell}>
              <Image
                src={AKILAH_IMG}
                alt="Akilah Adams, MBA"
                width={520}
                height={680}
                className={styles.img}
              />
            </div>
            <div className={styles.quote}>
              “Discretion, follow-through, and calm execution—so your leadership stays
              focused.”
            </div>
          </div>
        </div>

        <div className={styles.text}>
          <p>
            High-profile leaders don’t lose momentum in big dramatic ways—they lose it
            in the quiet friction: missed follow-ups, scheduling drift, scattered
            logistics, and the constant mental load of remembering everything.
          </p>
          <p>
            <strong>All Things Assistant LLC</strong> exists to remove that friction.
            Akilah is the behind-the-scenes partner who protects your attention,
            keeps operations moving, and makes your day feel controlled again.
          </p>
          <p>
            Without the right support, deadlines slip, relationships cool off, and
            strategic work gets crowded out by coordination. With the right support,
            your calendar, communication, and execution rhythm become reliable.
          </p>
          <div className={styles.ctaRow}>
            <CTAButton href={CALENDLY}>Book a Discovery Call</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

