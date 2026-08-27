import { HeadlineReveal, Reveal } from "./Reveal";
import { PillButton } from "./PillButton";

const NAV_LINKS = [
  { href: "#atuacao", label: "Áreas de Atuação" },
  { href: "#metodo", label: "Método" },
  { href: "#confianca", label: "Diferenciais" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="bg-ink pt-20 text-ivory">
      <div className="container-page">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <HeadlineReveal
            as="h2"
            lines={["Vamos", "conversar?"]}
            delayStart={0.05}
            className="font-display text-shell select-none text-[17vw] leading-[0.85] text-ivory/[0.06] sm:text-[10rem] lg:text-[7vw]"
          />

          <Reveal
            delay={0.25}
            className="w-full max-w-sm shrink-0 lg:pb-3"
          >
            <div className="rounded-3xl border border-brass/30 bg-ink-soft/60 p-6 shadow-[0_0_60px_-15px_rgba(197,155,89,0.35)] sm:p-8">
              <span className="eyebrow text-brass-soft">
                Pronto quando você estiver
              </span>
              <p className="mt-3 text-base leading-relaxed text-ivory/70">
                Uma primeira conversa já ajuda a entender o caso, sem
                compromisso.
              </p>
              <PillButton
                href="#contato"
                variant="brass"
                className="group mt-6 w-full justify-center px-8 py-4 text-base sm:w-auto"
              >
                Falar com o escritório
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M3.5 8h9m0 0L8.5 4m4 4L8.5 12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </PillButton>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 border-t border-ivory/10 py-12 sm:mt-4 sm:grid-cols-3 sm:gap-8">
          <Reveal>
            <span className="eyebrow text-brass-soft">Luciano Conrado</span>
            <p className="font-display text-shell mt-3 text-2xl text-ivory">
              Advocacia Previdenciária
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/55">
              Afogados da Ingazeira, PE. Atendimento mediante contato prévio,
              endereço e horários a confirmar na versão final do site.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <span className="eyebrow text-brass-soft">Navegar</span>
            <nav className="mt-3 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="focus-ring w-fit text-sm text-ivory/65 transition-colors hover:text-ivory"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </Reveal>

          <Reveal delay={0.16}>
            <span className="eyebrow text-brass-soft">Falar</span>
            <div className="mt-3 flex flex-col gap-2 text-sm text-ivory/65">
              <span>WhatsApp, canal a ativar na entrega final</span>
              <span>@drlucianoconrado.adv (Instagram)</span>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4 border-t border-ivory/10 py-8 text-xs leading-relaxed text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl">
            Esta página é um{" "}
            <strong className="text-ivory/65">
              preview comercial desenvolvido pela NEXO
            </strong>{" "}
            para Luciano Conrado, ainda não publicado como site oficial do
            escritório. Áreas de atuação descrevem o Direito Previdenciário
            de forma geral e não constituem promessa de resultado. Dados de
            contato, endereço e informações institucionais serão confirmados
            antes de qualquer publicação.
          </p>
          <p className="shrink-0">© 2026 · Preview NEXO</p>
        </div>
      </div>
    </footer>
  );
}
