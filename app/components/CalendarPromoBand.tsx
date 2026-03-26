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
            <span>// Built for leaders ready to delegate</span>
          </div>
          <h2 id="calendar-promo-heading" className={`${styles.headline} pinline`}>
            <span>You’ve mastered your craft—now it’s time your support reflects that level.</span>
          </h2>
          <p className={styles.subtitle}>
            In high-performing environments, hidden friction slows execution. Book a Discovery Call to replace fragmented admin with seamless follow-through and strategic support.
          </p>
          <a href="#booking" className={styles.heroCta}>
            Book a Discovery Call
          </a>
        </div>

        <div className={styles.featuresDesktop}>
          <div className={styles.featureCol}>
            <FileText className={styles.featureIcon} strokeWidth={1.5} aria-hidden />
            <p className={styles.featureKicker}>Why you need me</p>
            <p className={styles.featureLead}>Lead, don't manage logistics.</p>
            <p className={styles.featureBody}>
            Your highest-value time belongs to growth and decisions, not inbox routing, scheduling drift, and follow-up debt.
            </p>
          </div>
          <div className={styles.featureCol}>
            <FileText className={styles.featureIcon} strokeWidth={1.5} aria-hidden />
            <p className={styles.featureKicker}>Why trust me</p>
            <p className={styles.featureLead}>Professional, confidential, consistent.</p>
            <p className={styles.featureBody}>
              Over two decades of executive support and an MBA-backed operating approach means details are handled with precision and discretion.            </p>
          </div>
        </div>

        <div className={styles.featuresMobile}>
          <div className={styles.mobileFeatureBlock}>
            <FileText className={styles.featureIcon} strokeWidth={1.5} aria-hidden />
            <p className={styles.featureKicker}>Why choose me</p>
            <p className={styles.featureLead}>Reliable.</p>
            <p className={styles.featureBody}>
              I operate at a standard where excellence is expected and your workflow feels effortless.
            </p>
          </div>
          <div className={styles.mobileFeatureBlock}>
            <FileText className={styles.featureIcon} strokeWidth={1.5} aria-hidden />
            <p className={styles.featureKicker}>Discovery call outcome</p>
            <p className={styles.featureLead}>Fast.</p>
            <p className={styles.featureBody}>
              You leave with clear priorities, a support rhythm, and immediate next actions.
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
            Book a Discovery Call
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
