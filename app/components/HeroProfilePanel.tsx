"use client";

import { useState } from "react";
import Link from "next/link";

export function HeroProfilePanel() {
  const [dark, setDark] = useState(false);

  return (
    <section
      className="heroProfileShell"
      data-theme={dark ? "dark" : "light"}
    >
      <div className="heroProfileTopNav">
        <button
          type="button"
          className="heroProfileThemeSwitch"
          onClick={() => setDark((v) => !v)}
          aria-pressed={dark}
          aria-label="Toggle hero theme"
        >
          <span className="heroProfileThemeIcon" />
        </button>
        <div className="heroProfileBreadcrumb">
          Inbox backlog · calendar chaos · stalled follow‑ups
        </div>
      </div>

      <div className="heroProfileHeader">
        <div className="heroProfileHeaderLeft">
          <div className="heroProfileTitleBlock">
            <div className="heroProfileTitleLine heroProfileTitleLineTop">
              All Things
            </div>
            <div className="heroProfileTitleLine heroProfileTitleLineBottom">
              Assistant
            </div>
          </div>
          <div className="heroProfileCp">
            <Link href="#booking">Book an intake</Link>
            <Link href="#pricing">View pricing</Link>
            <Link href="#services">See services</Link>
          </div>
        </div>
        <div className="heroProfileHeaderRight">
          <div className="heroProfileLinks">
            <Link href="#philosophy">Why admin matters</Link>
            <Link href="#how">How it works</Link>
            <Link href="#contact">Contact</Link>
            <Link href="/mint">Mint showcase</Link>
          </div>
          <div className="heroProfileTagline">
            What takes you hours each week can take minutes with the right executive support.
          </div>
        </div>
      </div>
    </section>
  );
}


