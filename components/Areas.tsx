"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { HeadlineReveal, Reveal, useSafeReducedMotion } from "./Reveal";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden="true">
      <rect x="5" y="8" width="22" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 13h22M11 5v6M21 5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden="true">
      <path d="M6 26V14M16 26V6M26 26V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 26h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden="true">
      <path
        d="M4 17h5l3-8 5 16 3-11 2 3h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden="true">
      <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 27v-2c0-3.5 3-6 7-6s7 2.5 7 6v2M18 27v-1.5c0-2.8 2.3-5 5.2-5 2.6 0 4.8 1.8 5.3 4.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden="true">
      <path
        d="M16 4l10 4v8c0 7-4.5 10.5-10 12-5.5-1.5-10-5-10-12V8l10-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 16l3 3 6-6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden="true">
      <path
        d="M8 8h16v16H8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 14h8M12 18h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M22 6l3 3-11 11H11v-3L22 6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const AREAS: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <CalendarIcon />,
    title: "Aposentadoria por Idade",
    text: "Avaliação dos requisitos etários e de tempo de contribuição para o pedido junto ao INSS.",
  },
  {
    icon: <ChartIcon />,
    title: "Aposentadoria por Tempo de Contribuição",
    text: "Levantamento do histórico contributivo e das regras de transição aplicáveis a cada caso.",
  },
  {
    icon: <PulseIcon />,
    title: "Auxílio por Incapacidade",
    text: "Pedidos e recursos relacionados a afastamento por doença ou acidente que impeça o trabalho.",
  },
  {
    icon: <FamilyIcon />,
    title: "Pensão por Morte",
    text: "Orientação a dependentes sobre documentação, prazos e habilitação do benefício junto ao INSS.",
  },
  {
    icon: <ShieldIcon />,
    title: "BPC / LOAS",
    text: "Benefício assistencial para idosos e pessoas com deficiência em situação de baixa renda.",
  },
  {
    icon: <ReviewIcon />,
    title: "Revisão de Benefícios",
    text: "Reanálise de benefícios já concedidos quando há indício de cálculo incorreto ou direito não considerado.",
  },
];

export function Areas() {
  const reduce = useSafeReducedMotion();

  return (
    <section id="atuacao" className="bg-ink py-24 text-ivory sm:py-32">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow text-brass-soft">Áreas de atuação</span>
        </Reveal>

        <HeadlineReveal
          as="h2"
          lines={["Direito Previdenciário,", "explicado caso a caso."]}
          delayStart={0.1}
          className="font-display text-shell mt-5 text-[10vw] text-ivory xs:text-5xl sm:text-6xl lg:text-[3.4vw]"
        />

        <Reveal delay={0.25} className="mt-5 max-w-lg">
          <p className="text-base leading-relaxed text-ivory/65 sm:text-lg">
            Cada frente exige uma leitura própria da legislação e do histórico
            contributivo. Estas são as principais frentes de atuação do
            escritório.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.08}>
              <motion.div
                className="group relative h-full overflow-hidden rounded-2xl border border-garnet/40 bg-ink-soft p-7"
                whileHover={reduce ? undefined : { y: -6, borderColor: "rgba(200,80,90,0.85)" }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-garnet/0 blur-2xl transition-colors duration-500 group-hover:bg-garnet/25"
                  aria-hidden="true"
                />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-brass/40 text-brass transition-transform duration-300 group-hover:scale-110 group-hover:border-brass">
                  {area.icon}
                </span>
                <h3 className="relative mt-6 text-lg font-semibold text-ivory">
                  {area.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ivory/60">
                  {area.text}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
