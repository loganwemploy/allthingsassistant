declare module "@splidejs/react-splide" {
  import type { ComponentType, HTMLAttributes, ReactNode } from "react";

  export interface SplideProps extends HTMLAttributes<HTMLElement> {
    options?: Record<string, unknown>;
    hasTrack?: boolean;
    tag?: string;
    extensions?: Record<string, unknown>;
    transition?: ComponentType<unknown> | null;
    children?: ReactNode;
  }

  export interface SplideSlideProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    children?: ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}
