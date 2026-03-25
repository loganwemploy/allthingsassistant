import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "./CTAButton";
import { AlertCircle, ArrowLeftRight, Check, Clock3, Users } from "lucide-react";
import { SceneHero } from "./SceneHero";
import styles from "./ConversionSections.module.css";

const AKILAH_HERO =
  "https://dl4.pushbulletusercontent2.com/d0WgxSJ9mXgjr7l62jruYsBA76YsaQtf/image.png";

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
          <h2 id="context-heading" className={styles.contextTitle}>
            The unspoken tax on high performers.
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

      <SceneHero />

      <section
        className={styles.originSection}
        aria-labelledby="origin-hero-heading"
      >
        <div className={styles.originHero}>
          <div className={styles.originHeroImageWrap}>
            <Image
                src={AKILAH_HERO}
                alt="Akilah Adams, MBA — founder of All Things Assistant LLC"
              fill
              priority
              sizes="100vw"
              className={styles.originHeroImgAkilah}
            />
            <div className={styles.originHeroScrim} aria-hidden />
            <div className={styles.originHeroShoulderTone} aria-hidden />
          </div>
          <div className={styles.originHeroContent}>
            <p className={styles.originTagline}>The evolution of support</p>
            <h2 id="origin-hero-heading" className={styles.originHeroTitle}>
                Calm under pressure.
              <br />
              Precision by design.
            </h2>
            <div className={styles.originHeroRule} aria-hidden />
          </div>
        </div>

        <div className={styles.originBody}>
          <div className={styles.originBodyInner}>
            <div className={styles.originColText}>
              <h3 id="conversion-story-heading" className={styles.originHeading}>
                From the sanctuary to the boardroom.
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
                    src="https://dl4.pushbulletusercontent2.com/YVpmFJlIaS2MKM2pi6chgJk20XuTld0i/image.png"
                    alt="Akilah Adams"
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
          <h2 className={styles.title}>What you gain from support that matches your level</h2>
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
          <h2 className={styles.title}>A simple path from overwhelm to execution</h2>
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
          <h2 className={styles.title}>Operate with clarity, confidence, and ease.</h2>
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
