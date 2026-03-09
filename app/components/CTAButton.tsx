import Link from "next/link";
import type { ReactNode } from "react";

export function CTAButton({
  children,
  className,
  href = "https://calendly.com/allthingsassistantllc",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <Link
      className={`btn btnPrimary ${className ?? ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}

