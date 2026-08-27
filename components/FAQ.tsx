"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HeadlineReveal, Reveal, useSafeReducedMotion } from "./Reveal";

const FAQS = [
  {
    q: "O INSS negou meu pedido. Ainda posso recorrer?",
    a: "Em geral, sim: existe prazo e caminho para recurso administrativo ou ação judicial. Cada caso depende dos documentos e do histórico contributivo, por isso a análise é sempre individual.",
  },
  {
    q: "Quanto tempo demora um processo previdenciário?",
    a: "Varia conforme a via, administrativa ou judicial, e a complexidade do caso. Esse prazo estimado é explicado logo na análise inicial, não depois que o processo já está em andamento.",
  },
  {
    q: "Preciso reunir todos os documentos antes do primeiro contato?",
    a: "Não. O primeiro contato serve justamente para entender a situação e orientar quais documentos são necessários para o seu caso específico.",
  },
  {
    q: "Como funciona o primeiro contato?",
    a: "Pelo botão nesta página. Este é um preview desenvolvido pela NEXO. Os canais reais de atendimento são configurados na entrega final do site.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useSafeReducedMotion();

  return (
    <section id="faq" className="bg-paper py-24 text-ink sm:py-32">
      <div className="container-page max-w-3xl">
        <Reveal>
          <span className="eyebrow text-garnet">Perguntas frequentes</span>
        </Reveal>

        <HeadlineReveal
          as="h2"
          lines={["Antes de conversar."]}
          delayStart={0.1}
          className="font-display text-shell mt-5 text-[11vw] text-ink xs:text-5xl sm:text-6xl"
        />

        <div className="mt-14 divide-y divide-garnet/20 border-t border-garnet/20 sm:mt-16">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 0.08}>
                <div>
                  <motion.button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    className="focus-ring flex w-full cursor-pointer items-center gap-5 py-6 text-left"
                    whileHover={reduce ? undefined : { x: 4 }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  >
                    <motion.span
                      className="font-display text-shell flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-garnet text-lg"
                      animate={{
                        backgroundColor: open ? "#7c1420" : "rgba(124,20,32,0)",
                        color: open ? "#f4ede3" : "#7c1420",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>
                    <span className="flex-1 text-lg font-semibold text-ink sm:text-xl">
                      {item.q}
                    </span>
                    <motion.span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-garnet/50 text-xl font-light text-garnet"
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </motion.button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-6 pl-0 text-sm leading-relaxed text-ink/65 sm:pl-16 sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
