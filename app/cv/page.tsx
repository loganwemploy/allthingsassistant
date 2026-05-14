"use client";

import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";
import { useEffect } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export default function CVPage() {
  useEffect(() => {
    document.title = "Akilah Adams CV | All Things Assistant";
  }, []);

  return (
    <main className="page">
      <SiteHeader />

      <section className="section">
        <div className="container">
          <Link href="/" className="cv-back">
            <ArrowLeft size={16} strokeWidth={1.5} aria-hidden />
            Back to home
          </Link>

          <div className="sectionHead">
            <div className="eyebrow">Download CV</div>
            <h1 className="pinline">
              <span>Akilah Adams, MBA</span>
            </h1>
            <p className="muted">
              This page is a fast-scan summary for recruiters and founders. If you&rsquo;d like a
              PDF version, use the download button below.
            </p>
          </div>

          <div className="cv-hero-card">
            <div className="eyebrow">Positioning</div>
            <h2 className="h2">Executive-level virtual assistant for high-profile leaders.</h2>
          </div>

          <div className="cv-grid">
            <div className="card pad">
              <div className="eyebrow">Core services</div>
              <ul className="list">
                <li>Executive calendar + inbox management</li>
                <li>Travel arrangements &amp; research</li>
                <li>Project coordination &amp; follow-through</li>
                <li>Document prep, data entry, expense tracking</li>
              </ul>
            </div>

            <div className="card pad">
              <div className="eyebrow">Qualifications</div>
              <ul className="list">
                <li>20+ years of executive administrative support</li>
                <li>MBA, Business Administration</li>
                <li>100% confidential &amp; discreet (NDA available)</li>
                <li>Remote-first, virtual-ready</li>
              </ul>
            </div>

            <div className="card pad">
              <div className="eyebrow">Ideal client</div>
              <ul className="list">
                <li>Founders, executives, and high-performers</li>
                <li>Leaders who need calm, reliable execution</li>
                <li>Busy professionals overwhelmed by admin</li>
                <li>Teams needing part-time executive support</li>
              </ul>
            </div>
          </div>

          <div className="cv-note">
            <button type="button" className="cv-print-btn" onClick={() => window.print()}>
              <Printer size={16} strokeWidth={1.5} aria-hidden />
              Download PDF
            </button>
            <p style={{ marginTop: "0.75rem" }}>
              Or use your browser&rsquo;s Print → Save as PDF.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
