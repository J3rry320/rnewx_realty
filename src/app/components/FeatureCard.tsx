import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-3xl glass p-6 shadow-sm">
      <div className="flex items-center gap-3 text-brand-gold">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-surface-strong">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-brand-accent">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-brand-muted">{description}</p>
    </div>
  );
}
