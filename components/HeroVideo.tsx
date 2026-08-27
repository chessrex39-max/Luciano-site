"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "./Reveal";

export function HeroVideo() {
  const reduce = useSafeReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {reduce ? (
        <Image
          src="/images/justica-loop-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <motion.video
          className="h-full w-full object-cover"
          src="/videos/justica-loop.mp4"
          poster="/images/justica-loop-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          initial={{ scale: 1.08 }}
          animate={{ scale: [1.08, 1.22, 1.08] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <div className="absolute inset-0 bg-ink-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/85 via-ink-deep/45 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/60 via-transparent to-ink-deep/30" />
      <div className="absolute inset-0 bg-garnet-deep/10 mix-blend-multiply" />
    </div>
  );
}
