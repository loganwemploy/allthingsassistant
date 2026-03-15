import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "./components/CTAButton";
import { CollageHero } from "./components/CollageHero";
import { ObjectionsSections } from "./components/ObjectionsSections";
import { SceneHero } from "./components/SceneHero";
import { SiteHeader } from "./components/SiteHeader";
import { BookingCalendar } from "./components/BookingCalendar";

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
      <SceneHero />
      <ObjectionsSections />
      {/* <Hero /> */}
      {/* <Philosophy /> */}
      <BookingCalendar />
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

// function Philosophy() {
//   return (
//     <section id="philosophy" className="section">
//       <div className="container grid twoCol">
//         <div className="card pad">
//           <div className="eyebrow">Core philosophy</div>
//           <h2 className="h2">Executive-level admin isn&apos;t &quot;small work.&quot;</h2>
//           <p className="muted">
//             Administrative tasks are vital to a business&apos; day-to-day operations,
//             although they tend to be taken for granted because of the misconception that
//             these kinds of tasks are easy. Contrary to popular belief, admin requires
//             great organizational skills and a substantial amount of proactiveness.
//           </p>
//           <div className="thin-divider" />
//           <div className="eyebrow">What you gain</div>
//           <ul className="list">
//             <li>Save hours each week</li>
//             <li>Stay organized</li>
//             <li>Reduce stress</li>
//             <li>Improve productivity</li>
//             <li>Executive-level support without hiring full-time staff</li>
//           </ul>
//         </div>

//         <div className="card pad">
//           <div className="eyebrow">Sales focus</div>
//           <h2 className="h2">A simple funnel: book → clarify → delegate.</h2>
//           <p className="muted">
//             The fastest way to get support is to start with a short discovery call. We’ll
//             identify what’s creating bottlenecks, agree on priorities, and get a plan in
//             place.
//           </p>
//           <div className="heroCtas" style={{ marginTop: 14 }}>
//             <CTAButton href={CALENDLY}>Book a Discovery Call</CTAButton>
//             <Link href="#contact" className="ghostBtn">
//               Send details first
//             </Link>
//           </div>
//           <div className="note">
//             <div className="eyebrow">Please note</div>
//             <div className="muted">Services are not limited to this list.</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
