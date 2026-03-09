import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "./components/CTAButton";
import { PricingSection } from "./components/PricingSection";
import { CollageHero } from "./components/CollageHero";
import { SiteHeader } from "./components/SiteHeader";

const AKILAH_MAIN =
  "https://dl4.pushbulletusercontent2.com/d0WgxSJ9mXgjr7l62jruYsBA76YsaQtf/image.png";
const CALENDLY = "https://calendly.com/allthingsassistantllc";
const LINKEDIN = "https://www.linkedin.com/in/akilahadams";
const INSTAGRAM = "https://www.instagram.com/p/DM8c0nESYow/";

export default function Home() {
  return (
    <main className="page">
      <SiteHeader />
      <CollageHero />
      <Hero />
      <Philosophy />
      <PrimaryServices />
      <Pricing />
      <HowItWorks />
      <ContactSection />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="container heroGrid">
        <div className="heroCopy">
          <div className="pill heroEyebrow">
            Virtual Assistant · Executive Administrative Support
          </div>
          <h1 className="heroTitle">FREEING YOUR TIME, GROWING YOUR BUSINESS.</h1>
          <p className="heroLead">
            All Things Assistant LLC helps busy professionals reclaim their time by
            handling administrative tasks so they can focus on growth.
          </p>
          <div className="heroCtas">
            <CTAButton href={CALENDLY}>Book a Discovery Call</CTAButton>
            <Link href="#services" className="ghostBtn">
              View services
            </Link>
          </div>

          <div className="heroBadges">
            <div className="badge">
              <div className="badgeLabel">Founder</div>
              <div className="badgeTitle">Akilah Adams, MBA</div>
              <div className="badgeBody">Over 20 years of Elite Executive Support</div>
            </div>
            <div className="badge">
              <div className="badgeLabel">Outcome</div>
              <div className="badgeTitle">Relief from overwhelm</div>
              <div className="badgeBody">Inbox, calendar, operations—handled.</div>
            </div>
          </div>
        </div>

        <div className="heroArt">
          <div className="heroFrame">
            <div className="heroPantones" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="heroImageShell">
              <Image
                src="https://dl4.pushbulletusercontent2.com/3Ohq15co1p7L7kzjTejnnvMHTkDJkowd/image.png"
                alt="Akilah Adams banner powerhouse phrasing"
                width={720}
                height={960}
                className="heroImage"
                priority
              />
            </div>
          </div>
          <div className="heroRibbon">
            <span>Schedule appointment · virtual or 1v1</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" className="section">
      <div className="container grid twoCol">
        <div className="card pad">
          <div className="eyebrow">Core philosophy</div>
          <h2 className="h2">Executive-level admin isn&apos;t &quot;small work.&quot;</h2>
          <p className="muted">
            Administrative tasks are vital to a business&apos; day-to-day operations,
            although they tend to be taken for granted because of the misconception that
            these kinds of tasks are easy. Contrary to popular belief, admin requires
            great organizational skills and a substantial amount of proactiveness.
          </p>
          <div className="thin-divider" />
          <div className="eyebrow">What you gain</div>
          <ul className="list">
            <li>Save hours each week</li>
            <li>Stay organized</li>
            <li>Reduce stress</li>
            <li>Improve productivity</li>
            <li>Executive-level support without hiring full-time staff</li>
          </ul>
        </div>

        <div className="card pad">
          <div className="eyebrow">Sales focus</div>
          <h2 className="h2">A simple funnel: book → clarify → delegate.</h2>
          <p className="muted">
            The fastest way to get support is to start with a short discovery call. We’ll
            identify what’s creating bottlenecks, agree on priorities, and get a plan in
            place.
          </p>
          <div className="heroCtas" style={{ marginTop: 14 }}>
            <CTAButton href={CALENDLY}>Book a Discovery Call</CTAButton>
            <Link href="#contact" className="ghostBtn">
              Send details first
            </Link>
          </div>
          <div className="note">
            <div className="eyebrow">Please note</div>
            <div className="muted">Services are not limited to this list.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrimaryServices() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="sectionHead">
          <div className="eyebrow">Primary services</div>
          <h2 className="h2">Admin Tasks · Research &amp; Tools · Lead Generation</h2>
          <p className="muted">
            My executive assistant services are designed for professionals who understand
            the value of time, organization, and strategic support.
          </p>
        </div>

        <div className="grid threeCol">
          <div className="card pad">
            <div className="eyebrow">Monthly Retainer services</div>
            <ul className="list">
              <li>Email Management</li>
              <li>Calendar Management</li>
              <li>Social Media Support</li>
              <li>Troubleshoot</li>
              <li>Research</li>
              <li>Create Templates</li>
              <li>Office Management</li>
              <li>Admin Tasks</li>
              <li>Training</li>
              <li>Consulting</li>
              <li>Event Planning</li>
              <li>Travel Planning</li>
              <li>Client Communication</li>
              <li>Start Up Services</li>
              <li>Data Entry</li>
              <li>Customer Service</li>
            </ul>
          </div>

          <div className="card pad">
            <div className="eyebrow">Project-based services</div>
            <ul className="list">
              <li>Email Inbox Overhaul</li>
              <li>Email Template System</li>
              <li>Calendar Optimization</li>
              <li>Workflow Setup</li>
              <li>Setup CRM</li>
              <li>Organization</li>
              <li>LinkedIn Optimization</li>
              <li>Strategic Support</li>
              <li>Board Meeting Support</li>
            </ul>
          </div>

          <div className="card pad">
            <div className="eyebrow">Hourly services</div>
            <ul className="list">
              <li>Flexible support for specific needs</li>
              <li>Project-based services on demand</li>
              <li>Short-term sprints to clear backlog</li>
            </ul>
          </div>
        </div>

        <div className="grid twoCol" style={{ marginTop: 18 }}>
          <div className="card pad">
            <div className="eyebrow">Social Media Management (word-for-word)</div>
            <p className="muted">
              Social Media Management is a broad service that can range from handling
              your social media community by liking posts, replying to comments, posting
              content that can encourage healthy and friendly discussion in the comments
              section to creating graphics using an editing software like Canva.
            </p>
          </div>
          <div className="card pad">
            <div className="eyebrow">Research (word-for-word)</div>
            <p className="muted">
              Whether a business is a startup or already established, internet research
              is definitely needed. This is important for market research, statistics, or
              getting on top of the latest marketing trend. Research tasks are vital to a
              business because they can yield amazing business data to utilize in growing
              the business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="sectionHead">
          <div className="eyebrow">Pricing</div>
          <h2 className="h2">Clear packages. Executive-level delivery.</h2>
          <p className="muted">
            Choose a monthly package or request a custom plan for seasonal help or
            special projects.
          </p>
        </div>

        <PricingSection />

        <div className="card pad" style={{ marginTop: 18 }}>
          <div className="eyebrow">Service tiers (quick view)</div>
          <div className="grid threeCol" style={{ marginTop: 10 }}>
            <div>
              <div className="tierTitle">Monthly Retainer</div>
              <div className="muted">
                Email/Calendar Management, Social Media Support, Research, Office
                Management.
              </div>
            </div>
            <div>
              <div className="tierTitle">Project-Based</div>
              <div className="muted">
                Email Inbox Overhaul, Workflow Setup, CRM Setup, LinkedIn Optimization.
              </div>
            </div>
            <div>
              <div className="tierTitle">Hourly</div>
              <div className="muted">Flexible support for specific needs.</div>
            </div>
          </div>
          <p className="muted" style={{ marginTop: 12, fontSize: 13 }}>
            PLEASE NOTE: Services are not limited to this list.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container">
        <div className="sectionHead">
          <div className="eyebrow">How it works</div>
          <h2 className="h2">Three simple steps to reclaim your time.</h2>
        </div>

        <div className="grid threeCol">
          <div className="card pad">
            <div className="stepNo">Step 1</div>
            <div className="stepTitle">Book consultation</div>
            <div className="muted">Schedule a discovery call (virtual or 1v1).</div>
          </div>
          <div className="card pad">
            <div className="stepNo">Step 2</div>
            <div className="stepTitle">Identify tasks</div>
            <div className="muted">
              We clarify priorities, processes, and what to delegate first.
            </div>
          </div>
          <div className="card pad">
            <div className="stepNo">Step 3</div>
            <div className="stepTitle">Start delegating</div>
            <div className="muted">Ongoing support with consistent follow-through.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container grid twoCol">
        <div className="card pad">
          <div className="eyebrow">Contact</div>
          <h2 className="h2">Start a conversation with Akilah.</h2>
          <p className="muted">
            My executive assistant services are designed for professionals who understand
            the value of time, organization, and strategic support.
          </p>

          <form className="contactForm">
            <div className="field">
              <label htmlFor="fullName">Full name</label>
              <input id="fullName" name="fullName" type="text" />
            </div>
            <div className="field">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="field">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="field">
              <label htmlFor="zip">Zip code</label>
              <input id="zip" name="zip" type="text" />
            </div>
            <div className="field">
              <label htmlFor="businessSize">Size of business</label>
              <select id="businessSize" name="businessSize" defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option value="small">Small (1–2 employees)</option>
                <option value="med-small">Med-Small (3–5 employees)</option>
                <option value="medium">Medium (6–15 employees)</option>
                <option value="large-medium">Large-Medium (16–30 employees)</option>
                <option value="large">Large (31+ employees)</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="notes">What would you like support with?</label>
              <textarea id="notes" name="notes" rows={4} />
            </div>
            <button type="submit" className="ghostBtn ghostBtnDark">
              Send details
            </button>
          </form>
        </div>

        <div className="card pad">
          <div className="eyebrow">Social</div>
          <ul className="list">
            <li>
              <Link href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                LinkedIn · Akilah Adams, MBA — 950+ followers
              </Link>
            </li>
            <li>
              <Link href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                Instagram · Over 20 years of Elite Executive Support, Proven Success
              </Link>
            </li>
          </ul>
          <div style={{ marginTop: 18 }}>
            <CTAButton href={CALENDLY}>Schedule a meeting · virtual or 1v1</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="card pad finalCta">
          <div>
            <div className="eyebrow">Ready for relief?</div>
            <h2 className="h2">Book your discovery call and start delegating.</h2>
            <p className="muted">
              If inbox overload, scheduling chaos, and administrative backlog are
              slowing you down—this is your next step.
            </p>
          </div>
          <div className="finalCtaBtns">
            <CTAButton href={CALENDLY}>Book a Discovery Call</CTAButton>
            <Link href="#contact" className="ghostBtn">
              Contact Akilah
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="siteFooterShell">
      <div className="container siteFooter">
        <div className="muted">
          © {new Date().getFullYear()} All Things Assistant LLC. All rights reserved.
        </div>
        <div className="muted">
          Virtual Assistant Services · Executive Administrative Support
        </div>
      </div>
    </footer>
  );
}

