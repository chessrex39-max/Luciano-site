"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PillButton } from "./PillButton";

const LINKS = [
  { href: "#atuacao", label: "Áreas de Atuação" },
  { href: "#metodo", label: "Método" },
  { href: "#confianca", label: "Diferenciais" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        menuOpen
          ? "bg-ink"
          : scrolled
            ? "bg-ink/90 backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <a
          href="#inicio"
          className="focus-ring font-display text-shell text-xl text-ivory sm:text-2xl"
        >
          Luciano Conrado<span className="text-brass">.</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring text-sm font-medium tracking-wide text-ivory/75 transition-colors hover:text-ivory"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PillButton href="#contato" variant="brass">
            Falar com o escritório
          </PillButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="focus-ring relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`h-px w-6 bg-ivory transition-transform duration-300 ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ivory transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-px w-6 bg-ivory transition-transform duration-300 ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-6 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="focus-ring border-b border-ivory/10 py-5 font-display text-shell text-3xl text-ivory"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <PillButton href="#contato" variant="brass" className="w-full">
              Falar com o escritório
            </PillButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
