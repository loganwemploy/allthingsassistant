import { CTAButton } from "./CTAButton";
import { Check } from "lucide-react";
import styles from "./ConversionSections.module.css";

export function ConversionSections() {
  return (
    <section className={styles.wrap} aria-labelledby="conversion-story-heading">
      <div className={styles.container}>
        <article className={styles.card}>
          <p className={styles.eyebrow}>The unspoken cost</p>
          <h2 id="conversion-story-heading" className={styles.title}>
            You&apos;ve mastered your craft—now it&apos;s time your support reflects that level.
          </h2>
          <p className={styles.text}>
            In high-performing environments, growth often comes with hidden friction: shifting priorities,
            complex personalities, follow-up debt, and constant context switching. You are not falling behind;
            you are carrying low-leverage coordination that should already be handled.
          </p>
        </article>

        <article className={styles.card}>
          <p className={styles.eyebrow}>Origin and authority</p>
          <h3 className={styles.title}>Why Akilah built All Things Assistant</h3>
          <p className={styles.text}>
            Akilah began as a church secretary supporting leadership and quickly became known for structure,
            discretion, and calm execution. Over 20+ years and an MBA later, she now operates as a strategic
            partner for leaders who need seamless execution behind the scenes.
          </p>
        </article>

        <div className={styles.grid3}>
          <article className={styles.card}>
            <p className={styles.eyebrow}>Why you need me</p>
            <h3 className={styles.miniTitle}>Your time belongs in leadership.</h3>
            <p className={styles.miniText}>
              Stop spending strategic hours on logistics, scheduling drift, and fragmented follow-through.
            </p>
          </article>

          <article className={styles.card}>
            <p className={styles.eyebrow}>Why trust me</p>
            <h3 className={styles.miniTitle}>Professional, confidential, consistent.</h3>
            <p className={styles.miniText}>
              Decades of executive support in demanding environments built a high standard of discretion and reliability.
            </p>
          </article>

          <article className={styles.card}>
            <p className={styles.eyebrow}>Why choose me</p>
            <h3 className={styles.miniTitle}>Excellence without micromanagement.</h3>
            <p className={styles.miniText}>
              Details are handled at a level where your workflow feels smoother, cleaner, and easier to scale.
            </p>
          </article>
        </div>

        <article className={styles.card}>
          <p className={styles.eyebrow}>Services as outcomes</p>
          <h3 className={styles.title}>What you gain from support that matches your level</h3>
          <ul className={styles.outcomeList}>
            <li>
              <Check className={styles.bulletIcon} aria-hidden />
              <span>Executive operations rhythm: calendar, priorities, and communication handled consistently.</span>
            </li>
            <li>
              <Check className={styles.bulletIcon} aria-hidden />
              <span>Project execution support: fewer dropped handoffs and faster follow-through.</span>
            </li>
            <li>
              <Check className={styles.bulletIcon} aria-hidden />
              <span>Event and meeting orchestration: polished planning without last-minute scramble.</span>
            </li>
            <li>
              <Check className={styles.bulletIcon} aria-hidden />
              <span>Systemized admin flow: cleaner processes that reduce noise and increase output.</span>
            </li>
          </ul>
        </article>

        <article className={styles.card}>
          <p className={styles.eyebrow}>How it works</p>
          <h3 className={styles.title}>A simple path from overwhelm to execution</h3>
          <ol className={styles.process}>
            <li>
              <span className={styles.stepNo}>1</span>
              <span className={styles.stepText}>Discovery and priority mapping around your current bottlenecks.</span>
            </li>
            <li>
              <span className={styles.stepNo}>2</span>
              <span className={styles.stepText}>Workflow alignment, boundaries, and communication cadence.</span>
            </li>
            <li>
              <span className={styles.stepNo}>3</span>
              <span className={styles.stepText}>Ongoing execution with reliable follow-through and calm operational control.</span>
            </li>
          </ol>
        </article>

        <article className={styles.card}>
          <p className={styles.eyebrow}>Decision point</p>
          <h3 className={styles.title}>Operate with clarity, confidence, and ease.</h3>
          <p className={styles.text}>
            If you are ready to stop managing friction and start leading at your highest level,
            let&apos;s map your priorities and build your support rhythm.
          </p>
          <div className={styles.ctaRow}>
            <CTAButton>Book a Discovery Call</CTAButton>
            <span className={styles.micro}>No pressure - this call is for fit and priorities.</span>
          </div>
        </article>
      </div>
    </section>
  );
}
