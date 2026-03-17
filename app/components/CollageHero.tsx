/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./CollageHero.module.css";

const AKILAH_1 =
  "https://dl4.pushbulletusercontent2.com/d0WgxSJ9mXgjr7l62jruYsBA76YsaQtf/image.png";
const AKILAH_2 =
  "https://dl4.pushbulletusercontent2.com/YVpmFJlIaS2MKM2pi6chgJk20XuTld0i/image.png";

export function CollageHero() {
  return (
    <section className={styles.root} aria-label="Akilah Adams collage hero">
      <div className={styles.ban_a}>
        <div className={styles.ban_fill}>
          <div className={styles.no_a}>0</div>

          <div className={styles.ban_img}>
            <img src={AKILAH_1} alt="Akilah Adams" />
          </div>

          <div className={styles.and_n}>&amp;</div>
          <div className={styles.and_nx} />

          <div className={styles.ban_subimg}>
            <img src={AKILAH_2} alt="Akilah Adams portrait" />
          </div>

          <div className={styles.ban_mid}>
            <div className={styles.accent_a}>
              <img
                src="https://i.pinimg.com/474x/3d/5a/b6/3d5ab6504ff40f7980b1b0558ad69159.jpg"
                alt=""
              />
            </div>
            <div className={styles.accent_b}>
              <img
                src="https://i.pinimg.com/474x/37/3d/77/373d771608163f520b291eb046e4e48b.jpg"
                alt=""
              />
            </div>
            <div className={styles.accent_c}>
              <img
                src="https://i.pinimg.com/736x/d5/a5/7a/d5a57a7e8362463e71866a1580a4ab1a.jpg"
                alt=""
              />
            </div>

            <div className={styles.pantone_1} />
            <div className={styles.pantone_2} />
            <div className={styles.pantone_3} />
            <div className={styles.pantone_4} />

            <div className={styles.set}>20 YEARS OF PROFESSIONAL EXPERIENCE</div>

            <div className={styles.title}>Akilah Adams MBA</div>

            <div className={styles.subtext}>professional personal assistant</div>

            <div className={styles.desc}>
              Reclaim Your Time with All Things Assistant LLC – Your virtual office
              powerhouse. We provide professional, reliable, and detail-oriented virtual
              assistant services tailored to help you grow, scale, and breathe easier.
            </div>
          </div>

          <div className={styles.no_b}>1</div>
        </div>

        <div className={styles.sublink}>turn the page →</div>
      </div>

      <div className={styles.frame_a} />

      {/* Objection content moved to dedicated \"Why hire Akilah\" page */}
    </section>
  );
}
