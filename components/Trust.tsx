import { HeadlineReveal, Reveal } from "./Reveal";

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden="true">
      <path
        d="M4 15l5-5 6 5 4-4c1.2-1.2 3-1.2 4 0l5 5-4 4-3-3-6 6c-1 1-2.5 1-3.5 0l-1-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 21l3 3c1 1 2.5 1 3.5 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden="true">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 9v7l5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden="true">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="1.4" fill="currentColor" />
    </svg>
  );
}

const POINTS = [
  {
    n: "01",
    word: "Atendimento",
    bg: "bg-garnet-deep",
    icon: HandshakeIcon,
    text: "O contato acompanha o caso do início ao fim, sem deixar o cliente sem retorno entre uma etapa e outra.",
    chips: ["Contato direto", "Sem intermediários", "Retorno claro"],
  },
  {
    n: "02",
    word: "Transparência",
    bg: "bg-ink-soft",
    icon: ClockIcon,
    text: "Processos administrativos e judiciais têm prazos próprios. Cada etapa é explicada antes de acontecer, não depois.",
    chips: ["Prazos explicados", "Sem surpresas", "Acompanhamento"],
  },
  {
    n: "03",
    word: "Clareza",
    bg: "bg-garnet-deep",
    icon: TargetIcon,
    text: "Cada caso é avaliado pelos seus próprios documentos e histórico contributivo. Nenhum resultado é prometido antes dessa análise.",
    chips: ["Análise individual", "Sem promessa vazia", "Documentos reais"],
  },
];

export function Trust() {
  return (
    <section id="confianca">
      <div className="bg-ink py-20 text-ivory sm:py-24">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow text-brass-soft">Por que confiar</span>
          </Reveal>

          <HeadlineReveal
            as="h2"
            lines={["Ética e excelência", "não são slogans."]}
            delayStart={0.1}
            className="font-display text-shell mt-5 max-w-2xl text-[10vw] text-ivory xs:text-5xl sm:text-6xl lg:text-[3.2vw]"
          />
        </div>
      </div>

      {POINTS.map((point) => {
        const Icon = point.icon;
        return (
          <div
            key={point.word}
            className={`${point.bg} relative flex min-h-[52vh] items-center overflow-hidden py-16 text-ivory sm:min-h-[58vh]`}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, rgba(244,237,227,1) 0px, rgba(244,237,227,1) 1px, transparent 1px, transparent 34px)",
              }}
            />
            <span
              aria-hidden="true"
              className="font-display text-shell pointer-events-none absolute -right-[0.05em] -top-[0.08em] select-none text-[40vw] leading-none text-ivory/[0.05] lg:-top-[0.15em] lg:text-[20vw]"
            >
              {point.n}
            </span>

            <div className="container-page relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10">
              <div>
                <Reveal className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-garnet bg-ivory/5 text-brass">
                    <Icon />
                  </span>
                  <span className="eyebrow text-ivory/55">
                    Diferencial {point.n}
                  </span>
                </Reveal>

                <HeadlineReveal
                  as="h3"
                  lines={[point.word]}
                  delayStart={0.08}
                  className="font-display text-shell mt-5 text-[13vw] leading-none sm:text-7xl lg:text-[5.5vw]"
                />
              </div>

              <div className="max-w-md lg:justify-self-end">
                <Reveal delay={0.15}>
                  <p className="text-base leading-relaxed text-ivory/70 sm:text-lg">
                    {point.text}
                  </p>
                </Reveal>
                <Reveal delay={0.3} className="mt-7 flex flex-wrap gap-2.5">
                  {point.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-garnet/50 bg-ivory/5 px-4 py-1.5 text-xs font-medium tracking-wide text-ivory/75"
                    >
                      {chip}
                    </span>
                  ))}
                </Reveal>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
