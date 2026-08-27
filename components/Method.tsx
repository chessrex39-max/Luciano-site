"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeadlineReveal, Reveal, useSafeReducedMotion } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico do caso",
    text: "Análise do histórico contributivo (CNIS) e da situação atual do benefício ou do pedido junto ao INSS.",
  },
  {
    n: "02",
    title: "Estratégia",
    text: "Definição do caminho mais adequado: pedido administrativo, recurso ou ação judicial, conforme o caso.",
  },
  {
    n: "03",
    title: "Acompanhamento",
    text: "Instrução do processo e retorno claro sobre cada etapa, até a decisão final.",
  },
];

export function Method() {
  const reduce = useSafeReducedMotion();

  return (
    <section id="metodo" className="relative overflow-hidden bg-paper py-24 text-ink sm:py-32">
      <div
        className="pointer-events-none absolute -right-56 top-0 h-[34rem] w-[34rem] rounded-full bg-garnet/[0.06]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-brass/[0.05]"
        aria-hidden="true"
      />

      <div className="container-page relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow text-garnet">Como funciona</span>
          </Reveal>

          <HeadlineReveal
            as="h2"
            lines={["Um processo claro,", "do início ao fim."]}
            delayStart={0.1}
            className="font-display text-shell mx-auto mt-5 text-[10vw] text-ink xs:text-5xl sm:text-6xl"
          />

          <Reveal delay={0.25} className="mx-auto mt-5 max-w-lg">
            <p className="text-base leading-relaxed text-ink/65 sm:text-lg">
              Cada caso previdenciário tem prazos e documentos próprios. Saber
              em que etapa o processo está evita surpresas.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:mt-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] border-2 border-garnet/70 sm:max-w-sm lg:mx-0">
            <Image
              src="/images/luciano-avatar.jpg"
              alt="Luciano Conrado, advogado"
              fill
              sizes="(min-width: 1024px) 28rem, 24rem"
              className="object-cover"
            />
          </Reveal>

          <div className="relative flex flex-col gap-10">
            <div
              className="pointer-events-none absolute left-[1.55rem] top-2 bottom-2 hidden w-px bg-garnet/25 sm:block"
              aria-hidden="true"
            />

            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={0.15 * i}>
                <motion.div
                  className="relative flex gap-6"
                  whileHover={reduce ? undefined : { x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <span className="font-display text-shell relative z-10 flex h-[3.1rem] w-[3.1rem] shrink-0 items-center justify-center rounded-full border border-garnet bg-paper text-2xl text-garnet">
                    {step.n}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-shell text-xl text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/65">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
