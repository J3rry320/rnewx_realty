import type { ReactNode } from "react";

type StepperItem = {
  title: string;
  description?: string;
  icon?: ReactNode;
};

type StepperProps = {
  items: StepperItem[];
  activeIndex: number;
  ariaLabel?: string;
};

export default function Stepper({ items, activeIndex, ariaLabel = "Progress" }: StepperProps) {
  return (
    <div className="rounded-3xl glass p-6 shadow-sm" aria-label={ariaLabel}>
      <ol className="space-y-4">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const isComplete = index < activeIndex;
          const circleStyles = isComplete
            ? "bg-brand-gold text-brand-ink"
            : isActive
              ? "border border-brand-gold text-brand-gold"
              : "border border-brand-sand text-brand-muted";

          return (
            <li key={item.title} className="flex items-start gap-3">
              <span
                className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${circleStyles}`}
                aria-current={isActive ? "step" : undefined}
              >
                {index + 1}
              </span>
              <div>
                <p className={`text-sm font-semibold ${isActive ? "text-brand-accent" : "text-brand-muted"}`}>
                  {item.title}
                </p>
                {item.description ? (
                  <p className="text-xs text-brand-muted">{item.description}</p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
