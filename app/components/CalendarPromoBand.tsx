import Image from "next/image";
import Link from "next/link";
import { FileText, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { CalendarPromoSparkles } from "./CalendarPromoSparkles";
import styles from "./CalendarPromoBand.module.css";

const AKILAH_AVATAR =
  "/akilah-photo.jpg";

export function CalendarPromoBand() {
  return (
    <section className={styles.root} aria-labelledby="calendar-promo-heading">
      <div className={styles.inner}>
        <CalendarPromoSparkles />
        <div className={styles.innerContent}>
        <div className={styles.hero}>
          <Reveal direction="left">
            <div className={styles.eyebrow}>
              <Zap className={styles.eyebrowIcon} aria-hidden />
              <span>Built for leaders ready to delegate</span>
            </div>
          </Reveal>
          <Reveal direction="zoom" delay={0.08}>
            <h2 id="calendar-promo-heading" className={`${styles.headline} pinline`}>
              <span>You&apos;ve mastered your craft — now it&apos;s time your support reflects that level.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className={`${styles.subtitle} mobile-clamp-1`}>
              In high-performing environments, hidden friction slows execution. Book a
              Discovery Call to replace fragmented admin with seamless follow-through and
              strategic support.
            </p>
          </Reveal>
          <Reveal direction="right" delay={0.2}>
            <Link href="/contact" className={styles.heroCta}>
              Book a Discovery Call
            </Link>
          </Reveal>
        </div>

        <div className={styles.featuresDesktop}>
          <Reveal direction="left" delay={0.1}>
            <div className={styles.featureCol}>
              <FileText className={styles.featureIcon} strokeWidth={1.5} aria-hidden />
              <p className={styles.featureKicker}>Why you need me</p>
              <p className={styles.featureLead}>Lead, don&apos;t manage logistics.</p>
              <p className={`${styles.featureBody} mobile-clamp-1`}>
                Your highest-value time belongs to growth and decisions, not inbox routing,
                scheduling drift, and follow-up debt.
              </p>
            </div>
          </Reveal>
          <Reveal direction="scale" delay={0.2}>
            <div className={styles.featureCol}>
              <FileText className={styles.featureIcon} strokeWidth={1.5} aria-hidden />
              <p className={styles.featureKicker}>Why trust me</p>
              <p className={styles.featureLead}>Professional, confidential, consistent.</p>
              <p className={`${styles.featureBody} mobile-clamp-1`}>
                Over two decades of executive support and an MBA-backed operating approach
                means details are handled with precision and discretion.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.3}>
            <div className={styles.featureCol}>
              <FileText className={styles.featureIcon} strokeWidth={1.5} aria-hidden />
              <p className={styles.featureKicker}>Why choose me</p>
              <p className={styles.featureLead}>Excellence without micromanagement.</p>
              <p className={`${styles.featureBody} mobile-clamp-1`}>
                Details are handled at a level where your workflow feels smoother, cleaner, and easier to scale.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.3}>
          <div className={styles.bottomBar}>
            <div className={styles.brand}>
              <Image
                src={AKILAH_AVATAR}
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.brandText}>Akilah Adams, MBA</span>
            </div>
            <Link href="/contact" className={styles.orangeCta}>
              Book a Discovery Call
            </Link>
          </div>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
