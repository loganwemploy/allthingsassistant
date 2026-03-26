import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata = {
  title: "Akilah Adams CV | All Things Assistant LLC",
};

export default function CVPage() {
  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow">Download CV</div>
            <h1 className="pinline">
              <span>Akilah Adams, MBA</span>
            </h1>
            <p className="muted" style={{ maxWidth: "60ch" }}>
              This page is a fast-scan summary for recruiters and founders. If you’d like a
              PDF version, you can print/save as PDF from your browser.
            </p>
          </div>

          <div className="card pad">
            <div className="eyebrow">Positioning</div>
            <h2 className="h2">Executive-level virtual assistant for high-profile leaders.</h2>
            <div className="thin-divider" />

            <div className="eyebrow">Highlights</div>
            <ul className="list">
              <li>20+ years of executive administrative support</li>
              <li>MBA</li>
              <li>Calendar + inbox + follow-through systems</li>
              <li>Confidentiality-first support (NDA available)</li>
            </ul>

            <div className="thin-divider" />

            <div className="eyebrow">Next step</div>
            <p className="muted" style={{ marginBottom: 0 }}>
              Ready to map priorities and delegate the first set of tasks?
              <br />
              <Link href="/#booking" className="navLink">
                Book a Discovery Call →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

