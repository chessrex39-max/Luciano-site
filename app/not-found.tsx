import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-ivory">
      <span className="eyebrow text-brass-soft">Página não encontrada</span>
      <h1 className="font-display text-shell mt-4 text-[18vw] text-ivory sm:text-8xl">
        404
      </h1>
      <p className="mt-4 max-w-sm text-ivory/65">
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-brass px-6 py-3 text-sm font-semibold text-ink-deep transition-colors hover:bg-brass-soft"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
