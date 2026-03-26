import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "./CTAButton";
import { AlertCircle, ArrowLeftRight, Check, Clock3, Users } from "lucide-react";
import styles from "./ConversionSections.module.css";
import { TypeWriter } from "./TypeWriter";

const RELAXED_OFFICE =
  "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1600";

const CONTEXT_ROWS = [
  {
    icon: AlertCircle,
    text: "Constantly shifting priorities that drain your creative energy.",
  },
  {
    icon: Users,
    text: "Office politics and operational friction slowing your momentum.",
  },
  {
    icon: Clock3,
    text: "Accumulating follow-up debt that keeps you awake at night.",
  },
  {
    icon: ArrowLeftRight,
    text: "Exhausting context switching between vision and coordination.",
  },
] as const;

export function ConversionSections() {
  const leftRows = CONTEXT_ROWS.slice(0, 2);
  const rightRows = CONTEXT_ROWS.slice(2, 4);

  return (
    <section className={styles.wrap} aria-labelledby="context-heading">
      <div className={styles.container}>
        <div className={styles.contextSection}>
          <p className={styles.contextEyebrow}>The context</p>
          <h2 id="context-heading" className={`${styles.contextTitle} pinline`}>
            <span>The unspoken tax on high performers.</span>
          </h2>
          <div className={styles.contextGrid}>
            <div className={styles.contextCard}>
              {leftRows.map(({ icon: Icon, text }) => (
                <div key={text} className={styles.contextRow}>
                  <Icon className={styles.contextIcon} strokeWidth={1.5} aria-hidden />
                  <p className={styles.contextRowText}>{text}</p>
                </div>
              ))}
            </div>
            <div className={styles.contextCard}>
              {rightRows.map(({ icon: Icon, text }) => (
                <div key={text} className={styles.contextRow}>
                  <Icon className={styles.contextIcon} strokeWidth={1.5} aria-hidden />
                  <p className={styles.contextRowText}>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.contextDivider} role="separator" />
          <blockquote className={styles.contextQuote}>
            <p>
              High-leverage leadership means protecting your attention from low-leverage coordination—so
              strategy gets the room it deserves.
            </p>
          </blockquote>
          <Link href="#booking" className={styles.contextCta}>
            If this feels familiar, start here
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>

      <section
        className={styles.originSection}
        aria-labelledby="origin-hero-heading"
      >
        <div className={styles.originBody}>
          <div className={styles.originBodyInner}>
            <div className={styles.originColText}>
              <h3
                id="conversion-story-heading"
                className={`${styles.originHeading} pinline`}
              >
                <span>From the sanctuary to the boardroom.</span>
              </h3>
              <blockquote className={styles.originQuote}>
                <p>
                  I learned early that the highest form of service is invisibility—the smooth operation of
                  a space where leaders can simply lead.
                </p>
              </blockquote>
              <p className={styles.originBodyText}>
                Akilah began as a church secretary supporting leadership and quickly became known for structure,
                discretion, and calm execution. That foundation became what she calls{" "}
                <em>executive steadiness</em>: quiet precision that keeps the room steady so vision can move.
              </p>
              <p className={styles.originBodyText}>
                Over 20+ years and an MBA later, she founded All Things Assistant to bring that same standard
                to the boardroom—strategic partnership for leaders who need seamless execution behind the scenes.
              </p>
            </div>
            <div className={styles.originColVisual}>
              <div className={styles.originVisualCard}>
                <div className={styles.originVisualHeader}>
                  <p className={styles.originVisualName}>Akilah Adams</p>
                  <p className={styles.originVisualRole}>MBA · Professional executive support</p>
                </div>
                <div className={styles.originVisualPhoto} aria-hidden>
                  <Image
                    src={RELAXED_OFFICE}
                    alt="Relaxed office work setting"
                    fill
                    sizes="(max-width: 52rem) 100vw, 40vw"
                    className={styles.originVisualImg}
                  />
                </div>
                <div className={styles.originBadge}>
                  <span>20 years of refinement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.grid3}>
          <article className={styles.card}>
            <p className={styles.eyebrow}>Why you need me</p>
            <h3 className={`${styles.miniTitle} pinline`}>
              <span>Your time belongs in leadership.</span>
            </h3>
            <p className={styles.miniText}>
              Stop spending strategic hours on logistics, scheduling drift, and fragmented follow-through.
            </p>
          </article>

          <article className={styles.card}>
            <p className={styles.eyebrow}>Why trust me</p>
            <h3 className={`${styles.miniTitle} pinline`}>
              <span>Professional, confidential, consistent.</span>
            </h3>
            <p className={styles.miniText}>
              Decades of executive support in demanding environments built a high standard of discretion and reliability.
            </p>
          </article>

          <article className={styles.card}>
            <p className={styles.eyebrow}>Why choose me</p>
            <h3 className={`${styles.miniTitle} pinline`}>
              <span>Excellence without micromanagement.</span>
            </h3>
            <p className={styles.miniText}>
              Details are handled at a level where your workflow feels smoother, cleaner, and easier to scale.
            </p>
          </article>
        </div>

        <article className={styles.card}>
          <p className={styles.eyebrow}>Services as outcomes</p>
          <h2 className={`${styles.title} pinline`}>
            <span>What you gain from support that matches your level</span>
          </h2>

          <div className={styles.trustStrip} aria-label="Trust signals">
            <span className={styles.trustPill}>NDA available</span>
            <span className={styles.trustPill}>Executive comms</span>
            <span className={styles.trustPill}>Calendar + inbox</span>
            <span className={styles.trustPill}>Follow-through systems</span>
          </div>

          <ul className={styles.outcomeList}>
            <li>
              <Check className={styles.bulletIcon} aria-hidden />
              <span>Executive operations rhythm: calendar, priorities, and communication—kept consistent.</span>
            </li>
            <li>
              <Check className={styles.bulletIcon} aria-hidden />
              <span>Project execution support: fewer dropped handoffs, faster follow-through.</span>
            </li>
            <li>
              <Check className={styles.bulletIcon} aria-hidden />
              <span>Meetings and events: polished planning without last-minute scramble.</span>
            </li>
            <li>
              <Check className={styles.bulletIcon} aria-hidden />
              <span>Systemized admin flow: cleaner processes that reduce noise.</span>
            </li>
          </ul>
        </article>

        <article className={styles.card}>
          <p className={styles.eyebrow}>How it works</p>
          <h2 className={`${styles.title} pinline`}>
            <span>A simple path from overwhelm to execution</span>
          </h2>
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

        <article className={`${styles.card} ${styles.pinlineCard}`}>
          <div className={styles.pinlineContainer}>
            <h2 className={styles.pinlineHeadline}>
              On the
              <br />
              <span className={styles.pinlineLarge}>Possibility</span> of{" "}
              <span className={styles.pinlineLarge}>Support</span>
            </h2>

            <h3 className={styles.pinlineTitle}>
              <span>Executive Pinline</span>
            </h3>

            <p className={styles.pinlineText}>
              High-profile leadership should not be spent in inbox triage and fragmented
              follow-up. Akilah provides quiet, senior-level execution that keeps every
              moving part aligned so your calendar, communication, and commitments stay
              sharp under pressure.
            </p>
          </div>
        </article>

        <article className={styles.card}>
          <p className={styles.eyebrow}>Decision point</p>
          <TypeWriter ariaLabel="Decision point message" speed={1} threshold={0.25}>
            <h2 className={`${styles.title} pinline`}>
              <span>Operate with clarity, confidence, and ease.</span>
            </h2>
            <p className={styles.text}>
              If you are ready to stop managing friction and start leading at your highest level,
              let&apos;s map your priorities and build your support rhythm.
            </p>
          </TypeWriter>
          <div className={styles.ctaRow}>
            <CTAButton>Book a Discovery Call</CTAButton>
            <Link href="/cv" className={styles.contextCta} style={{ marginLeft: 0 }}>
              Download CV
              <span aria-hidden="true"> →</span>
            </Link>
            <span className={styles.micro}>No pressure - this call is for fit and priorities.</span>
          </div>
        </article>
      </div>
    </section>
  );
}
