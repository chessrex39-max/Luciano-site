"use client";

import { motion } from "framer-motion";
import { useSafeReducedMotion } from "./Reveal";

export function ScrollHint({ className = "" }: { className?: string }) {
  const reduce = useSafeReducedMotion();

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <span className="eyebrow text-ivory/45">role para conhecer</span>
      <div className="relative h-10 w-px overflow-hidden bg-ivory/15">
        <motion.span
          className="absolute inset-x-0 top-0 h-3 bg-brass"
          animate={reduce ? undefined : { y: [-12, 40] }}
          transition={
            reduce
              ? undefined
              : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>
    </div>
  );
}
