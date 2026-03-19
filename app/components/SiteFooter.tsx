import Link from "next/link";
import { Linkedin, Instagram, Calendar } from "lucide-react";

const CALENDLY = "https://calendly.com/allthingsassistantllc";
const LINKEDIN = "https://www.linkedin.com/in/akilahadams";
const INSTAGRAM = "https://www.instagram.com/p/DM8c0nESYow/";

export function SiteFooter() {
  return (
    <footer className="footerStrip" role="contentinfo">
      {/* Nav strip: breadcrumb-style links */}
      <div className="footerNavStrip">
        <nav className="footerBreadcrumb" aria-label="Footer navigation">
          <Link href="/">All Things Assistant</Link>
          <span className="footerSep">/</span>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer">
            Book a call
          </Link>
          <span className="footerSep">/</span>
          <Link href="/why-akilah">Why hire Akilah</Link>
        </nav>
        <span className="footerGap" aria-hidden="true" />
        <span className="footerMeta">Akilah Adams, MBA · Executive support</span>
      </div>

      {/* tbar-style: brand + social icon links */}
      <div className="footerTbar">
        <Link href="/" className="footerBrand">
          All Things Assistant
        </Link>
        <span className="footerGap" aria-hidden="true" />
        <div className="footerSocials">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="footerIcon footerIconCal"
            title="Book a Discovery Call (Calendly)"
            aria-label="Book a Discovery Call (Calendly)"
          >
            <Calendar size={20} strokeWidth={2} aria-hidden />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="footerIcon footerIconLi"
            title="Akilah Adams on LinkedIn"
            aria-label="Akilah Adams on LinkedIn"
          >
            <Linkedin size={20} strokeWidth={2} aria-hidden />
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="footerIcon footerIconIg"
            title="All Things Assistant on Instagram"
            aria-label="All Things Assistant on Instagram"
          >
            <Instagram size={20} strokeWidth={2} aria-hidden />
          </a>
        </div>
      </div>

      <div className="footerPantone" aria-hidden="true">
        <span className="footerPantoneDot" />
        <span className="footerPantoneDot" />
        <span className="footerPantoneDot" />
        <span className="footerPantoneDot" />
      </div>
    </footer>
  );
}
