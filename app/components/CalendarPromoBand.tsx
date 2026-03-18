import Image from "next/image";
import { FileText, Zap } from "lucide-react";
import { CalendarPromoSparkles } from "./CalendarPromoSparkles";
import styles from "./CalendarPromoBand.module.css";

const AKILAH_AVATAR =
  "https://dl4.pushbulletusercontent2.com/d0WgxSJ9mXgjr7l62jruYsBA76YsaQtf/image.png";

export function CalendarPromoBand() {
  return (
    <section className={styles.root} aria-labelledby="calendar-promo-heading">
      <div className={styles.inner}>
        <CalendarPromoSparkles />
        <div className={styles.innerContent}>
        <div className={styles.hero}>
          <div className={styles.eyebrow}>
            <Zap className={styles.eyebrowIcon} aria-hidden />
            <span>// All Things Assistant LLC</span>
          </div>
          <h2 id="calendar-promo-heading" className={styles.headline}>
            Increase productivity, increase output,{" "}
            <span className={styles.accent}>increase profit</span>
          </h2>
          <p className={styles.subtitle}>
            What&apos;s holding you back from moving forward—waiting for the perfect week, or the
            work that never shrinks? Pick a date on the calendar below and take one clear step
            today.
          </p>
          <a href="#booking" className={styles.heroCta}>
            Pick your date
          </a>
        </div>

        <div className={styles.featuresDesktop}>
          <div className={styles.featureCol}>
            <FileText className={styles.featureIcon} strokeWidth={1.5} aria-hidden />
            <p className={styles.featureKicker}>email, scheduling, travel, and follow-through.</p>
            <p className={styles.featureLead}>Relief.</p>
            <p className={styles.featureBody}>
            Stop juggling details in your head. We triage, track, and execute so you can focus on the work only you can do.
            </p>
          </div>
          <div className={styles.featureCol}>
            <FileText className={styles.featureIcon} strokeWidth={1.5} aria-hidden />
            <p className={styles.featureKicker}>What could you accomplish with 20+ extra hours a week?</p>
            <p className={styles.featureLead}>Reclaim your productivity.</p>
            <p className={styles.featureBody}>
              Most admins or business owners spend 20+ hours a week submitting emails, scheduling, or ochestrating. Let's optimize your work flow.            </p>
          </div>
        </div>

        <div className={styles.featuresMobile}>
          <div className={styles.mobileFeatureBlock}>
            <FileText className={styles.featureIcon} strokeWidth={1.5} aria-hidden />
            <p className={styles.featureKicker}>No calendar chaos</p>
            <p className={styles.featureLead}>Reliable.</p>
            <p className={styles.featureBody}>
              One place to request time; we handle coordination and follow-through so your schedule
              stays sane.
            </p>
          </div>
          <div className={styles.mobileFeatureBlock}>
            <FileText className={styles.featureIcon} strokeWidth={1.5} aria-hidden />
            <p className={styles.featureKicker}>From request to clarity</p>
            <p className={styles.featureLead}>Fast.</p>
            <p className={styles.featureBody}>
              Short discovery, clear next steps—so you&apos;re not stuck in email ping-pong.
            </p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.brand}>
            <Image
              src={AKILAH_AVATAR}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.brandText}>Akilah Adams</span>
          </div>
          <a href="#booking" className={styles.orangeCta}>
            Pick your date
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
