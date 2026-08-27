"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "lc-intro-seen";
const DURATION = 2600;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

function shouldShowIntro() {
  if (typeof window === "undefined") return false;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return false;
  if (sessionStorage.getItem(SESSION_KEY)) return false;
  return true;
}

function ScalesEmblem() {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      className="h-10 w-10 text-brass sm:h-12 sm:w-12"
      fill="none"
      aria-hidden="true"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
    >
      <path
        d="M32 6v46M18 14h28M11 20l7-6 7 6-7 8-7-8Zm32 0l7-6 7 6-7 8-7-8ZM11 20c0 5 3 9 7 9s7-4 7-9M43 20c0 5 3 9 7 9s7-4 7-9M22 52h20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export function Intro() {
  const [visible, setVisible] = useState(shouldShowIntro);

  useEffect(() => {
    if (!visible) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setVisible(false), DURATION);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink px-6"
          exit={{ opacity: 0, y: "-3%" }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          aria-hidden="true"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, rgba(244,237,227,1) 0px, rgba(244,237,227,1) 1px, transparent 1px, transparent 42px)",
            }}
          />

          <ScalesEmblem />

          <div className="-my-[0.1em] mt-5 overflow-hidden py-[0.1em]">
            <motion.span
              className="font-display text-shell block text-[11vw] text-ivory sm:text-6xl md:text-7xl"
              initial={{ y: "120%", scale: 0.94 }}
              animate={{ y: "0%", scale: 1 }}
              transition={{ type: "spring", stiffness: 190, damping: 18, delay: 0.3 }}
            >
              Luciano Conrado
            </motion.span>
          </div>

          <motion.div
            className="mt-6 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <span className="eyebrow text-brass-soft">
              Advocacia Previdenciária
            </span>
            <motion.span
              className="h-px bg-brass"
              initial={{ width: 0 }}
              animate={{ width: 56 }}
              transition={{ duration: 0.5, delay: 0.95, ease: EASE_OUT }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
