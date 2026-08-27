"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HeadlineReveal, Reveal } from "./Reveal";
import { PillButton } from "./PillButton";

export function CTA() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-ink py-24 text-ivory sm:py-32"
    >
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-garnet/20 blur-2xl"
        aria-hidden="true"
      />

      <div className="container-page grid grid-cols-1 items-end gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal
          y={0}
          className="relative mx-auto aspect-[3/4] w-full max-w-xs lg:mx-0"
        >
          <div className="relative h-full w-full overflow-hidden rounded-t-[6rem] rounded-b-2xl border border-garnet/40">
            <Image
              src="/images/atendimento-idoso.jpg"
              alt="Cliente em consulta, representando o primeiro atendimento sobre um caso previdenciário"
              fill
              sizes="(min-width: 1024px) 24vw, 70vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/60 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow text-brass-soft">Um primeiro passo</span>
          </Reveal>

          <HeadlineReveal
            as="h2"
            lines={["Me conta o que", "aconteceu com", "seu benefício."]}
            delayStart={0.1}
            className="font-display text-shell mt-5 text-[11vw] text-brass xs:text-5xl sm:text-6xl lg:text-[4.4vw]"
          />

          <Reveal delay={0.35} className="mt-8 max-w-lg">
            <p className="text-base leading-relaxed text-ivory/70 sm:text-lg">
              Uma primeira conversa ajuda a entender o que já foi feito, o que
              está pendente e qual caminho faz sentido a partir daqui.
            </p>
          </Reveal>

          <Reveal delay={0.5} className="mt-9">
            <div className="flex flex-col items-start gap-4">
              <PillButton
                href="#contato"
                type="button"
                variant="brass"
                onClick={() => setShowDemo((v) => !v)}
              >
                Simular conversa no WhatsApp
              </PillButton>

              <AnimatePresence>
                {showDemo && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-sm rounded-xl border border-brass/30 bg-ink-soft px-4 py-3 text-xs leading-relaxed text-ivory/60"
                  >
                    Demonstração de fluxo. Este é um preview desenvolvido pela
                    NEXO: ao publicar o site oficial, este botão abre o
                    WhatsApp real do escritório com o número aprovado por
                    Luciano.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
