"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { HeadlineReveal, Reveal, useSafeReducedMotion } from "./Reveal";

const PILLARS = [
  {
    title: "Análise técnica antes de agir",
    text: "Cada caso começa pelo cálculo previdenciário e pela revisão do histórico contributivo, para entender exatamente o que o INSS considerou e o que pode ter ficado de fora.",
  },
  {
    title: "Atendimento direto, sem intermediários",
    text: "O contato é com o próprio advogado, do primeiro diagnóstico às decisões sobre o andamento do processo.",
  },
  {
    title: "Acompanhamento até a decisão final",
    text: "Recursos administrativos e ações judiciais têm prazos próprios. Cada etapa é informada, sem deixar o cliente sem resposta.",
  },
];

function PillarCard({
  title,
  text,
  delay,
}: {
  title: string;
  text: string;
  delay: number;
}) {
  const reduce = useSafeReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="pt-5"
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className="relative h-0.5 w-full overflow-hidden bg-ink/10">
        <motion.div
          className="absolute inset-y-0 left-0 w-full origin-left bg-garnet"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : undefined}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
        />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/65">{text}</p>
    </motion.div>
  );
}

export function Positioning() {
  return (
    <section className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Reveal className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-garnet/70 sm:h-24 sm:w-24">
            <Image
              src="/images/luciano-avatar.jpg"
              alt="Luciano Conrado, advogado"
              fill
              sizes="96px"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow text-garnet">Sobre o advogado</span>
            <p className="font-display text-shell mt-1 text-2xl text-ink sm:text-3xl">
              Luciano Almeida Conrado
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <HeadlineReveal
            as="h2"
            lines={["Advocacia séria,", "focada em resolver", "o seu caso."]}
            className="font-display text-shell text-[11vw] text-ink sm:text-6xl lg:text-[3.6vw]"
          />

          <Reveal delay={0.2} className="self-end">
            <p className="max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
              O trabalho é conduzido com ética, responsabilidade e respeito
              por cada cliente, valores que orientam o escritório desde a
              primeira conversa até o encerramento do processo. Em Direito
              Previdenciário, isso significa tratar cada benefício como o que
              ele é: uma questão que afeta diretamente a renda e a
              tranquilidade de uma família.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-ink/10 pt-10 sm:mt-20 sm:grid-cols-3 sm:pt-12">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.title} delay={i * 0.12} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
