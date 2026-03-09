/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo, useState } from "react";
import styles from "./CollageHero.module.css";

const AKILAH_1 =
  "https://dl4.pushbulletusercontent2.com/d0WgxSJ9mXgjr7l62jruYsBA76YsaQtf/image.png";
const AKILAH_2 =
  "https://dl4.pushbulletusercontent2.com/YVpmFJlIaS2MKM2pi6chgJk20XuTld0i/image.png";

type Tab = {
  id: string;
  label: string;
  title: string;
  body: string;
};

export function CollageHero() {
  const tabs = useMemo<Tab[]>(
    () => [
      {
        id: "m_1",
        label: "fig. 01",
        title: "Primary Points",
        body:
          "All Things Assistant LLC helps busy professionals reclaim their time by handling administrative tasks so they can focus on growth.",
      },
      {
        id: "m_2",
        label: "fig. 02",
        title: "Breadth Subjects",
        body:
          "Email & calendar management, office management, research, and operational systems—built with consistency and executive-level follow-through.",
      },
      {
        id: "m_3",
        label: "fig. 03",
        title: "Elective Courses",
        body:
          "Project-based support, workflow/CRM setup, and custom packages—tailored to your business size and season of growth.",
      },
    ],
    [],
  );

  const [active, setActive] = useState<Tab["id"]>("m_1");

  return (
    <section className={styles.root} aria-label="Akilah Adams editorial collage hero">
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

      <div className={styles.ban_b}>
        <div className={styles.bg_img}>
          <img
            src="https://i.pinimg.com/736x/28/9e/1b/289e1b763314ce624793e0ed711933ff.jpg"
            alt=""
          />
        </div>

        <div className={styles.main_menu}>
          <div className={`${styles.w3_bar} ${styles.w3_menu}`} role="tablist" aria-label="Figures">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`${styles.w3_button} ${active === t.id ? styles.w3_select : ""}`}
                aria-selected={active === t.id}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tabs.map((t) => (
            <div
              key={t.id}
              className={styles.menu}
              hidden={active !== t.id}
              aria-label={t.title}
            >
              <h2>{t.title}</h2>
              <p>{t.body}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.bg_img} ${styles.bg_imgB}`}>
          <img
            src="https://i.pinimg.com/736x/2d/6c/d4/2d6cd485c13c56447d85500f445a9d4c.jpg"
            alt=""
          />
        </div>
      </div>

      <div className={styles.line_b} />
      <div className={styles.line_a} />

      <div className={styles.imej}>
        <img
          src="https://i.pinimg.com/474x/d7/33/fd/d733fde04b667492f9e2e539883b8142.jpg"
          alt=""
        />
      </div>

      <div className={styles.no_c}>02</div>
    </section>
  );
}

