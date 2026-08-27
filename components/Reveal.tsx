"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useSyncExternalStore } from "react";
import type { ReactNode, Ref } from "react";

const SPRING = { type: "spring", stiffness: 260, damping: 22, mass: 0.9 } as const;

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Resolves to `false` for SSR and the client's hydration pass (matching
 * markup exactly), then updates to the real preference right after —
 * React's blessed pattern for SSR-safe external browser state.
 */
export function useSafeReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function Reveal({
  children,
  delay = 0,
  y = 48,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useSafeReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ ...SPRING, delay }}
    >
      {children}
    </motion.div>
  );
}

export function HeadlineReveal({
  lines,
  className,
  lineClassName,
  accentLines = [],
  delayStart = 0,
  as: Tag = "span",
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  accentLines?: number[];
  delayStart?: number;
  as?: "span" | "h1" | "h2" | "h3";
}) {
  const reduce = useSafeReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  if (reduce) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span
            key={line + i}
            className={`block ${accentLines.includes(i) ? "text-brass" : ""} ${lineClassName ?? ""}`}
          >
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag ref={ref as Ref<HTMLHeadingElement>} className={className}>
      {lines.map((line, i) => (
        <span key={line + i} className="block overflow-hidden py-[0.18em]">
          <motion.span
            className={`block ${accentLines.includes(i) ? "text-brass" : ""} ${lineClassName ?? ""}`}
            initial={{ opacity: 0, y: 70 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              mass: 1,
              delay: delayStart + i * 0.1,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
