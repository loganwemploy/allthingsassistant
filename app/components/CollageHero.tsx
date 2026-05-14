"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeWriter } from "./TypeWriter";
import { WordHighlight } from "./WordHighlight";
import { Reveal } from "./Reveal";
import styles from "./CollageHero.module.css";

const AKILAH_PHOTO = "/akilah-hero.jpg";

export function CollageHero() {
  return (
    <section className={styles.root} aria-label="Hero">
      <div className={styles.shell}>
        <div className={styles.panel}>
          <div className={styles.textCol}>
            <Reveal direction="left">
              <TypeWriter ariaLabel="Hero introduction" speed={1} threshold={0.3}>
                <p className={styles.eyebrow}>Akilah Adams · MBA</p>
              </TypeWriter>
            </Reveal>

            <Reveal direction="zoom">
              <TypeWriter speed={2} threshold={0.3} ariaLabel="Hero title">
                <h1 className={`${styles.title} gradient-text-hero`}>
                  Administrative <WordHighlight>Professional</WordHighlight>
                </h1>
              </TypeWriter>
            </Reveal>

            <Reveal direction="up">
                <p className={styles.desc}>
                  <span className="desktop-only"><strong className={styles.taglineHighlight}>Reclaim Your Time</strong> with
                  All Things Assistant LLC – Your virtual office powerhouse. We provide
                  professional, reliable, and detail-oriented virtual assistant services
                  tailored to help you grow, scale, and breathe easier.</span>
                  <span className="mobile-only">Reclaim your time with virtual support.</span>
                </p>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <div className={`${styles.metaRow} mobile-clamp-1`}>
                <span className={styles.meta}>20+ years exec support</span>
                <span className={styles.metaDot} aria-hidden="true" />
                <span className={styles.meta}>MBA</span>
                <span className={styles.metaDot} aria-hidden="true" />
                <span className={styles.meta}>Confidential / discreet</span>
                <span className={styles.metaDot} aria-hidden="true" />
                <span className={styles.meta}>Remote + virtual-ready</span>
                <span className={styles.metaDot} aria-hidden="true" />
                <span className={styles.meta}>Fast follow-through</span>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <Link href="/#booking" className={styles.cta}>
                Book a Discovery Call
              </Link>
            </Reveal>


          </div>

          <div className={styles.visualCol}>
            <div className={styles.photoFrame}>
              <div className={styles.photoAccent} aria-hidden="true" />
              <Image
                src={AKILAH_PHOTO}
                alt="Akilah Adams, Administrative Professional"
                fill
                sizes="(max-width: 56rem) 50vw, 320px"
                className={styles.photo}
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
