import type { SelectHTMLAttributes } from "react";

type FormSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  helper?: string;
};

export default function FormSelect({ label, helper, id, children, ...props }: FormSelectProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className="w-full rounded-2xl border border-brand-sand bg-brand-surface-strong px-4 py-3 text-sm text-brand-accent focus:border-brand-gold focus:outline-none"
        {...props}
      >
        {children}
      </select>
      {helper ? <p className="text-xs text-brand-muted">{helper}</p> : null}
    </div>
  );
}
