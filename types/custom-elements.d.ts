import type { DetailedHTMLProps, HTMLAttributes } from "react";

type TypeWriterElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement> & {
    autostart?: string;
    speed?: string;
    "min-duration"?: string;
    "max-duration"?: string;
    dir?: "ltr" | "rtl";
    "respect-motion-preference"?: string;
    "aria-label"?: string;
  },
  HTMLElement
>;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "type-writer": TypeWriterElementProps;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "type-writer": TypeWriterElementProps;
    }
  }
}

export {};

