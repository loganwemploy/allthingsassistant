import { CollageHero } from "./components/CollageHero";
import { QualifiersBand } from "./components/QualifiersBand";
import { AkilahRoundedPanel } from "./components/AkilahRoundedPanel";
import { FeatureScrollSection } from "./components/FeatureScrollSection";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { BookingCalendar } from "./components/BookingCalendar";
import { CalendarPromoBand } from "./components/CalendarPromoBand";
import { ConversionSections } from "./components/ConversionSections";
import { FeaturedBlogArticles } from "./components/FeaturedBlogArticles";

export default function Home() {
  return (
    <main className="page">
      <SiteHeader />
      <CollageHero />
      <QualifiersBand />
      <AkilahRoundedPanel />
      <ConversionSections />
      <CalendarPromoBand />
      <FeatureScrollSection />
      <FeaturedBlogArticles />
      <BookingCalendar />
      <SiteFooter />
    </main>
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
