import Link from "next/link";
import { Linkedin, Instagram, Calendar, ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { BookingWidget } from "../components/BookingWidget";
import { PageHero } from "../components/PageHero";

const LINKEDIN = "https://www.linkedin.com/in/akilahadams";
const INSTAGRAM = "https://www.instagram.com/p/DM8c0nESYow/";

export const metadata = {
  title: "Contact | All Things Assistant",
  description:
    "Book a 15-minute Discovery Call or reach out via LinkedIn. No commitment, no pitch — just a conversation about your admin needs.",
};

export default function ContactPage() {
  return (
    <main className="page">
      <SiteHeader />

      <PageHero
        page="ct"
        eyebrow="Contact"
        title="Book a Discovery Call"
        description="15 minutes to map your priorities, answer your questions, and see if there&apos;s a fit. No commitment, no pitch."
        mobileDescription="Map your priorities, no commitment."
      />

      <section className="ct-booking">
        <div className="container ct-booking-inner">
          <BookingWidget />
          <div className="ct-trust">
            <span className="ct-trust-badge">
              <Clock size={14} strokeWidth={1.5} aria-hidden />
              Typically responds within 2 hours
            </span>
            <span className="ct-trust-badge">
              <ShieldCheck size={14} strokeWidth={1.5} aria-hidden />
              NDA available on request
            </span>
          </div>
        </div>
      </section>

      <section className="ct-links">
        <div className="container ct-links-inner">
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>Connect</p>
          <div className="ct-links-row">
            <a
              className="ct-link"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} strokeWidth={1.5} aria-hidden />
              <span>LinkedIn</span>
              <ArrowRight size={14} strokeWidth={1.5} aria-hidden />
            </a>
            <a
              className="ct-link"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} strokeWidth={1.5} aria-hidden />
              <span>Instagram</span>
              <ArrowRight size={14} strokeWidth={1.5} aria-hidden />
            </a>
          </div>
          <p className="eyebrow" style={{ margin: "1.5rem 0 1rem" }}>More</p>
          <div className="ct-links-row">
            <Link className="ct-link" href="/how-it-works">
              <Calendar size={18} strokeWidth={1.5} aria-hidden />
              <span>How It Works</span>
            </Link>
            <Link className="ct-link" href="/services">
              <ShieldCheck size={18} strokeWidth={1.5} aria-hidden />
              <span>Services</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
