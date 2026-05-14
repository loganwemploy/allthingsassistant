import Link from "next/link";
import { Linkedin, Calendar, Instagram } from "lucide-react";

const LINKEDIN = "https://www.linkedin.com/in/akilahadams";
const INSTAGRAM = "https://www.instagram.com/p/DM8c0nESYow/";

export function SiteFooter() {
  return (
    <footer className="footerStrip" role="contentinfo">
      <div className="footerMain">
        <div className="footerLeft">
          <Link href="/" className="footerBrand">
            All Things Assistant
          </Link>
          <span className="footerDot" aria-hidden="true" />
          <span className="footerName">Akilah Adams, MBA</span>
        </div>

        <nav className="footerNav" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/#booking">Book a call</Link>
          <Link href="/about-me">About Me</Link>
        </nav>

        <div className="footerSocials">
          <Link
            href="/#booking"
            className="footerIcon footerIconCal"
            aria-label="Book a Discovery Call"
          >
            <Calendar size={18} strokeWidth={2} aria-hidden />
          </Link>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="footerIcon footerIconLi"
            aria-label="Akilah Adams on LinkedIn"
          >
            <Linkedin size={18} strokeWidth={2} aria-hidden />
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="footerIcon footerIconIg"
            aria-label="All Things Assistant on Instagram"
          >
            <Instagram size={18} strokeWidth={2} aria-hidden />
          </a>
        </div>
      </div>

      <div className="footerLegal">
        All Things Assistant LLC. All rights reserved.
      </div>
    </footer>
  );
}
