import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "brass" | "ivory" | "outline-light" | "outline-dark";

const styles: Record<Variant, string> = {
  brass: "bg-brass text-ink-deep hover:bg-brass-soft",
  ivory: "bg-ivory text-ink-deep hover:bg-white",
  "outline-light":
    "border border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory/10",
  "outline-dark":
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink/5",
};

export function PillButton({
  href,
  children,
  variant = "brass",
  className = "",
  onClick,
  type,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button";
}) {
  const classes = `focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-[background-color,transform] duration-300 hover:scale-[1.04] active:scale-[0.97] ${styles[variant]} ${className}`;

  if (type === "button") {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
