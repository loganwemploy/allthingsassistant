"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeWriter } from "./TypeWriter";
import styles from "./CollageHero.module.css";

const AKILAH_MAIN =
  "https://dl4.pushbulletusercontent2.com/d0WgxSJ9mXgjr7l62jruYsBA76YsaQtf/image.png";
const AKILAH_CIRCLE =
  "https://dl4.pushbulletusercontent2.com/YVpmFJlIaS2MKM2pi6chgJk20XuTld0i/image.png";

export function CollageHero() {
  return (
    <section className={styles.root} aria-label="Akilah Adams collage hero">
      <div className={styles.shell}>
        <div className={styles.cream}>
          <div className={styles.textCol}>
            <TypeWriter ariaLabel="Hero introduction" speed={1} threshold={0.3}>
              <h1 className={styles.title}>Akilah Adams MBA</h1>
              <p className={styles.subtext}>professional personal assistant</p>
            </TypeWriter>

            <div className={styles.expRow}>
              <div className={styles.pantoneRow} aria-hidden="true">
                <span className={styles.dot} data-tone="1" />
                <span className={styles.dot} data-tone="2" />
                <span className={styles.dot} data-tone="3" />
                <span className={styles.dot} data-tone="4" />
              </div>
              <p className={styles.set}>20 YEARS OF PROFESSIONAL EXPERIENCE</p>
            </div>

            <p className={styles.desc}>
              Reclaim Your Time with All Things Assistant LLC – Your virtual office powerhouse. We provide
              professional, reliable, and detail-oriented virtual assistant services tailored to help you grow,
              scale, and breathe easier.
            </p>

            <Link href="#booking" className={styles.sublink}>
              turn the page →
            </Link>
          </div>

          <div className={styles.visualCol}>
            <div className={styles.watermark} aria-hidden="true">
              <span className={styles.watermarkDigit}>0</span>
              <span className={styles.watermarkDigit}>1</span>
            </div>

            <div className={styles.visualOverlap}>
              <div className={styles.portraitCircle}>
                <Image
                  src={AKILAH_CIRCLE}
                  alt=""
                  fill
                  sizes="(max-width: 56rem) 28vw, 180px"
                  className={styles.portraitImg}
                />
              </div>
              <div className={styles.portraitMain}>
                <Image
                  src={AKILAH_MAIN}
                  alt="Akilah Adams"
                  fill
                  priority
                  sizes="(max-width: 56rem) 42vw, 280px"
                  className={styles.portraitImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
