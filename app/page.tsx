import { CollageHero } from "./components/CollageHero";
import { CredentialsBar } from "./components/CredentialsBar";
import { AkilahRoundedPanel } from "./components/AkilahRoundedPanel";
import { FeatureScrollSection } from "./components/FeatureScrollSection";
import { ConversionSections } from "./components/ConversionSections";
import { ComparisonSection } from "./components/ComparisonSection";
import { ApproachStrip } from "./components/ApproachStrip";
import { CalendarPromoBand } from "./components/CalendarPromoBand";
import { BookingWidget } from "./components/BookingWidget";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { Reveal } from "./components/Reveal";

export default function Home() {
  return (
    <main className="page">
      <SiteHeader />

      <section id="hero" style={{ scrollMarginTop: "4.5rem" }}>
        <CollageHero />
      </section>

      <CredentialsBar />

      <div className="sectionDivider" aria-hidden="true" />

      <AkilahRoundedPanel />

      <div className="sectionDivider sectionDividerBrown" aria-hidden="true" />

      <section id="services" style={{ scrollMarginTop: "4.5rem" }}>
        <ConversionSections />
        <ComparisonSection />
      </section>

      <CalendarPromoBand />

      <FeatureScrollSection />

      <ApproachStrip />

      <div className="sectionDivider" aria-hidden="true" />

      <section id="booking" className="bookingSection">
        <div className="bookingInner">
          <Reveal direction="left">
            <p className="eyebrow">Book a Discovery Call</p>
          </Reveal>
          <Reveal direction="zoom" delay={0.08}>
            <h2 className="h2 pinline">
              <span>Pick a time that works for you.</span>
            </h2>
          </Reveal>
          <Reveal direction="scale" delay={0.15}>
            <BookingWidget />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
