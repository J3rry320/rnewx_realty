import type { ReactNode } from "react";

type StepCardProps = {
  step: number;
  title: string;
  description: string;
  icon: ReactNode;
  label?: string;
};

export default function StepCard({ step, title, description, icon, label = "Step" }: StepCardProps) {
  return (
    <div className="rounded-3xl glass p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {label} {step}
        </span>
        <div className="text-brand-gold">{icon}</div>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-brand-accent">{title}</h3>
      <p className="mt-3 text-sm text-brand-muted">{description}</p>
    </div>
  );
}
