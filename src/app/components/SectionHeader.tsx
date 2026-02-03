import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  action,
}: SectionHeaderProps) {
  const alignClasses = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex w-full flex-col gap-3 ${alignClasses}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {eyebrow}
        </p>
      ) : null}
      <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">{title}</h2>
          {subtitle ? <p className="text-brand-muted">{subtitle}</p> : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  );
}
