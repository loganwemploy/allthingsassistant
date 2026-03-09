import Link from "next/link";
import { CTAButton } from "./CTAButton";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container sectionTight">
        <div className="footerTop">
          <div className="footerBrand">
            <div className="footerName">All Things Assistant LLC</div>
            <div className="muted">
              Executive Administrative Support • Virtual Assistant Services
            </div>
          </div>

          <div className="footerCta">
            <CTAButton>Book a Discovery Call</CTAButton>
          </div>
        </div>

        <div className="footerGrid">
          <div className="footerCol">
            <div className="eyebrow">Contact</div>
            <div className="footerLinks">
              <Link
                href="https://calendly.com/allthingsassistantllc"
                target="_blank"
                rel="noopener noreferrer"
                className="footerLink"
              >
                Schedule a call (Calendly)
              </Link>
              <Link className="footerLink" href="/contact">
                Contact form
              </Link>
            </div>
          </div>

          <div className="footerCol">
            <div className="eyebrow">Social</div>
            <div className="footerLinks">
              <Link
                className="footerLink"
                href="https://www.linkedin.com/in/akilahadams"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                className="footerLink"
                href="https://www.instagram.com/p/DM8c0nESYow/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </div>
          </div>

          <div className="footerCol">
            <div className="eyebrow">Quick links</div>
            <div className="footerLinks">
              <Link className="footerLink" href="/services">
                Services
              </Link>
              <Link className="footerLink" href="/about">
                About Akilah
              </Link>
              <Link className="footerLink" href="/how-it-works">
                How It Works
              </Link>
            </div>
          </div>
        </div>

        <div className="footerBottom muted">
          © {new Date().getFullYear()} All Things Assistant LLC. All rights reserved.
        </div>
      </div>

      <div className="pantoneStrip" aria-hidden="true">
        <div className="pantone1" />
        <div className="pantone2" />
        <div className="pantone3" />
        <div className="pantone4" />
      </div>
    </footer>
  );
}

