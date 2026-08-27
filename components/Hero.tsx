import Image from "next/image";
import { HeadlineReveal, Reveal } from "./Reveal";
import { PillButton } from "./PillButton";
import { ScrollHint } from "./ScrollHint";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-32 pb-20"
    >
      <HeroVideo />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244,237,227,1) 1px, transparent 1px)",
          backgroundSize: "min(20%, 12rem) 100%",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-garnet/20 blur-3xl" />

      <div className="container-page relative z-10 grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="eyebrow text-brass-soft">
              Direito Previdenciário · Afogados da Ingazeira, PE
            </span>
          </Reveal>

          <HeadlineReveal
            as="h1"
            lines={["Direito Previdenciário", "conduzido com", "técnica e clareza."]}
            accentLines={[2]}
            delayStart={0.12}
            className="font-display text-shell mt-5 text-[10vw] text-ivory xs:text-5xl sm:text-5xl lg:text-[3.6vw]"
          />

          <Reveal delay={0.55} className="mt-8 max-w-md">
            <p className="text-base leading-relaxed text-ivory/70 sm:text-lg">
              Luciano Conrado atua em aposentadorias, benefícios por
              incapacidade, pensão por morte, BPC e revisão de benefícios
              junto ao INSS, com a sofisticação, a responsabilidade e o
              respeito que orientam o escritório desde o primeiro contato.
            </p>
          </Reveal>

          <Reveal
            delay={0.7}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <PillButton href="#contato">Conversar sobre meu caso</PillButton>
            <a
              href="#atuacao"
              className="focus-ring text-sm font-medium text-ivory/55 underline decoration-ivory/25 underline-offset-4 transition-colors hover:text-ivory"
            >
              Ver áreas de atuação
            </a>
          </Reveal>
        </div>

        <Reveal
          delay={0.3}
          y={0}
          className="relative order-first mx-auto w-full max-w-lg lg:order-last lg:mx-0 lg:max-w-none lg:justify-self-end"
        >
          <div className="relative aspect-[474/281] w-full overflow-hidden rounded-[2.5rem]">
            <Image
              src="/images/escritorio-fachada-v2.jpg"
              alt="Fachada do escritório de Luciano Conrado Advocacia, em Afogados da Ingazeira, PE"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -top-5 -right-5 h-24 w-24 rounded-full bg-brass/90 sm:h-28 sm:w-28" />
        </Reveal>
      </div>

      <ScrollHint className="absolute inset-x-0 bottom-8 hidden sm:flex" />
    </section>
  );
}
