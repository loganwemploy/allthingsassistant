import Image from "next/image";
import { CTAButton } from "../components/CTAButton";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const AKILAH_MAIN =
  "https://dl4.pushbulletusercontent2.com/d0WgxSJ9mXgjr7l62jruYsBA76YsaQtf/image.png";

const REASONS = [
  {
    title: "It pays for itself.",
    body:
      "Akilah focuses on the work that frees your time for revenue-generating opportunities—calendar, inbox, follow-through, and operations. Her support is structured so the time you reclaim is worth more than the time you invest.",
  },
  {
    title: "20+ years of elite support.",
    body:
      "With over two decades of executive-level experience and an MBA, Akilah understands how leaders think, decide, and move. You’re not training a beginner—you’re adding seasoned judgment to your corner.",
  },
  {
    title: "Discretion and professionalism.",
    body:
      "Your calendar, clients, and communications are handled with the same confidentiality you expect from in-house staff. Clear boundaries and agreements are standard, so you can delegate without second‑guessing.",
  },
  {
    title: "You don’t have to know what to delegate.",
    body:
      "The discovery call is structured to surface what’s slowing you down: recurring tasks, decision bottlenecks, and loose ends. Together you decide what to hand off first so you’re never guessing where to start.",
  },
  {
    title: "Minimal ramp-up.",
    body:
      "Akilah arrives with systems, templates, and a way of working that plugs into your business. You align on preferences and priorities once, then refine as you go—without constant hand‑holding.",
  },
  {
    title: "Support without a full-time hire.",
    body:
      "You get executive-level support without payroll tax, benefits, or needing to keep someone busy 40 hours a week. Retainer and project options mean support can flex with your season of work.",
  },
];

export const metadata = {
  title: "Why hire Akilah | All Things Assistant LLC",
};

export default function WhyAkilahPage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="whyShell">
        <div className="whyOuter">
          <div className="whyInner">
            <div className="whyNav">
              <div className="whyNavControls" aria-hidden="true">
                <span className="whyNavDot" />
                <span className="whyNavDot" />
                <span className="whyNavDot" />
              </div>
              <div className="whyNavLabel">
                <span className="whyNavTitle">Why hire Akilah</span>
                <span className="whyNavSub">All Things Assistant LLC</span>
              </div>
            </div>

            <div className="whyHeaderBox">
              <div className="whyHeaderLeft">
                <div className="whyHeaderPill">Executive support, without the overwhelm</div>
                <h1 className="whyHeaderTitle">
                  Why hire <span>Akilah Adams</span> as your assistant?
                </h1>
                <p className="whyHeaderIntro">
                  Because you don’t have time to teach the basics. You need someone who can
                  step into the details, protect your calendar and attention, and keep the
                  important work moving forward.
                </p>
                <div className="whyHeaderActions">
                  <CTAButton href="https://calendly.com/allthingsassistantllc">
                    Book a Discovery Call
                  </CTAButton>
                </div>
              </div>

              <div className="whyHeaderPic">
                <div className="whyHeaderPicInner">
                  <Image
                    src={AKILAH_MAIN}
                    alt="Akilah Adams – executive virtual assistant"
                    width={540}
                    height={720}
                    className="whyHeaderImage"
                  />
                </div>
                <div className="whyHeaderBadge">20+ years of professional experience</div>
              </div>
            </div>

            {/* Editorial post-style block: Akilah portrait + short piece (inspired by ref) */}
            <div className="postRow">
              <div className="tagSpace">
                <div className="postTagCw">Akilah Adams</div>
                <div className="postTagFor">busy leaders</div>
              </div>
              <div className="postBody">
                <div className="postBodyInner">
                  <p>
                    I started All Things Assistant LLC because too many capable people are
                    stuck in the weeds—inbox, calendar, follow-ups—instead of doing the work
                    only they can do. <b>My job is to be the right hand you can trust with the
                    details so you can show up where it matters.</b> We begin with a discovery
                    call: we look at where your time actually goes, what you want to hand off
                    first, and how you like to work. From there, I align to your standards and
                    keep things moving so you can focus on growth, not admin.
                  </p>
                </div>
              </div>
              <div className="miniProfile">
                <div className="miniLoop1" aria-hidden="true" />
                <div className="miniUsername">
                  <span>Akilah</span> Adams
                </div>
                {/* <Image
                  src={AKILAH_MAIN}
                  alt="Akilah Adams"
                  width={250}
                  height={425}
                  className="miniProfileImg"
                /> */}
                <div className="miniLoop2" aria-hidden="true" />
                <div className="pointCount">
                  <span><b>20+</b> years</span>
                  <span><b>Executive</b> support</span>
                </div>
              </div>
              <div className="postFooter">
                <div className="smallAvatar">
                  <Image
                    src={AKILAH_MAIN}
                    alt="Akilah Adams"
                    width={70}
                    height={70}
                    className="smallAvatarImg"
                  />
                </div>
                <div className="postInfo">
                  <span>
                    All Things Assistant LLC · <a href="https://calendly.com/allthingsassistantllc" target="_blank" rel="noopener noreferrer">Book a Discovery Call</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="whyBody">
              <div className="whyBodyIntro">
                <p>
                  Many leaders wait too long to get support because it feels expensive, risky,
                  or complicated. This page is here so you can see, in plain language, how
                  working with Akilah solves those concerns.
                </p>
              </div>

              <div className="whyReasons">
                {REASONS.map((reason) => (
                  <article key={reason.title} className="whyReasonCard">
                    <h2 className="whyReasonTitle pinline">
                      <span>{reason.title}</span>
                    </h2>
                    <p className="whyReasonBody">{reason.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

