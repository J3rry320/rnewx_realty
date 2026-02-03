import type { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

export default function StatCard({ icon, label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl glass p-4">
      <div className="flex items-center gap-3 text-brand-gold">
        {icon}
        <p className="text-xs uppercase tracking-[0.2em] text-brand-muted">{label}</p>
      </div>
      <p className="mt-3 text-2xl font-semibold text-brand-accent">{value}</p>
    </div>
  );
}
