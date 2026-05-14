import Link from "next/link";
import { CalendarCheck, CheckSquare, Users, GitBranch, MessageSquare, RefreshCw } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { PageHero } from "../components/PageHero";

export const metadata = {
  title: "Services | All Things Assistant",
  description:
    "Senior administrative support services — inbox triage, calendar ownership, project execution, and follow-through systems for busy leaders.",
};

const SERVICES = [
  { icon: CalendarCheck, title: "Executive operations rhythm", desc: "Calendar, priorities, and communication — kept consistent." },
  { icon: CheckSquare, title: "Project execution support", desc: "Fewer dropped handoffs, faster follow-through on every initiative." },
  { icon: Users, title: "Meetings and events", desc: "Polished planning without last-minute scramble." },
  { icon: GitBranch, title: "Systemized admin flow", desc: "Cleaner processes that reduce noise and free your focus." },
  { icon: MessageSquare, title: "Executive comms", desc: "Correspondence drafted, triaged, and managed with your voice." },
  { icon: RefreshCw, title: "Follow-through systems", desc: "Lightweight workflows so nothing slips through the cracks." },
];

export default function ServicesPage() {
  return (
    <main className="page">
      <SiteHeader />

      <PageHero
        page="svc"
        eyebrow="Services"
        title="Administrative support you can hand off with confidence."
        description="Inbox triage, calendar ownership, document ops, and the day-to-day execution that keeps your business running."
      />

      <section className="svc-outcomes">
        <div className="container">
          <div className="svc-outcomes-inner">
            <p className="eyebrow svc-outcomes-eyebrow">
              Services as outcomes
            </p>
            <h2 className="heroTitle svc-outcomes-title">
              What you gain from support that matches your level
            </h2>
            <div className="svc-list">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className={`svc-card ${i === 0 ? "svc-card-featured" : ""}`}>
                    <Icon size={18} strokeWidth={1.5} className="svc-card-icon" aria-hidden />
                    <div>
                      <strong className="svc-card-title">{s.title}</strong>
                      <span className="svc-card-desc mobile-clamp-1"> — {s.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section svc-cta">
        <div className="container">
          <h2 className="h2 pinline"><span>Ready to hand off the admin?</span></h2>
          <p className="muted svc-cta-text">
            Start with a Discovery Call and we&apos;ll map the first handoffs.
          </p>
          <div className="svc-cta-btns">
            <Link href="/#booking" className="btn btnPrimary">Book a Discovery Call</Link>
            <Link href="/how-it-works" className="btn">See how it works</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
