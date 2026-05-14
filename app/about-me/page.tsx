import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { CTAButton } from "../components/CTAButton";

const AKILAH_PHOTO = "/akilah-photo.jpg";
const LINKEDIN = "https://www.linkedin.com/in/akilahadams";

export const metadata = {
  title: "About Me | All Things Assistant",
  description:
    "20+ years of executive support, an MBA, and a calm, confidential approach. Meet Akilah Adams — founder of All Things Assistant.",
};

export default function AboutMePage() {
  return (
    <main className="page">
      <SiteHeader />

      {/* Intro section */}
      <section className="section">
        <div className="container">
          <div className="aboutIntro">
            <div className="aboutTextCol">
              <p className="eyebrow">About Me</p>
              <h1 className="h2 pinline" style={{ maxWidth: "26rem" }}>
                <span>From the sanctuary to the boardroom.</span>
              </h1>
              <blockquote className="aboutQuote">
                <span className="desktop-only">I learned early that the highest form of service is
                invisibility—the smooth operation of a space where leaders can
                simply lead.</span>
                <span className="mobile-only">Service is invisibility — leaders lead.</span>
              </blockquote>
              <p className="muted" style={{ maxWidth: "44ch" }}>
                <span className="desktop-only">Akilah began as a church secretary supporting leadership and
                quickly became known for structure, discretion, and calm execution.
                That foundation became what she calls executive steadiness: quiet
                precision that keeps the room steady so vision can move.</span>
                <span className="mobile-only">Structure, discretion, and calm execution.</span>
              </p>
              <p className="muted" style={{ maxWidth: "44ch" }}>
                <span className="desktop-only">Over 20+ years and an MBA later, she founded All Things Assistant
                to bring that same standard to the boardroom—strategic partnership
                for leaders who need seamless execution behind the scenes.</span>
                <span className="mobile-only">Quiet precision for the boardroom.</span>
              </p>
              <div className="aboutLinks">
                <a
                  className="btn"
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem" }}
                >
                  <Linkedin size={16} strokeWidth={1.5} aria-hidden />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            <div className="aboutImgCol">
              <div className="aboutImgFrame">
                <Image
                  src={AKILAH_PHOTO}
                  alt="Akilah Adams"
                  width={320}
                  height={400}
                  className="aboutImg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sectionDivider" aria-hidden="true" />

      {/* Credentials + CTA */}
      <section className="aboutCtaWrap">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
            20 years of refinement
          </p>
          <h2 className="h2 pinline" style={{ color: "rgba(255,255,255,0.96)", justifyContent: "center" }}>
            <span>Quiet precision. Reliable execution.</span>
          </h2>
          <div className="aboutCtaGrid">
            <div className="aboutCtaCard">
              <span className="aboutCtaNum">20+</span>
              <span className="aboutCtaLabel">Years executive support</span>
            </div>
            <div className="aboutCtaCard">
              <span className="aboutCtaNum">MBA</span>
              <span className="aboutCtaLabel">Business administration</span>
            </div>
            <div className="aboutCtaCard">
              <span className="aboutCtaNum">100%</span>
              <span className="aboutCtaLabel">Confidential &amp; discreet</span>
            </div>
            <div className="aboutCtaCard">
              <span className="aboutCtaNum">Remote</span>
              <span className="aboutCtaLabel">Virtual-ready support</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2.5rem" }}>
            <CTAButton>Book a Discovery Call</CTAButton>
            <Link className="btn" href="/services">
              View services →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
