import type { InputHTMLAttributes } from "react";

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helper?: string;
};

export default function FormField({ label, helper, id, ...props }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="w-full rounded-2xl border border-brand-sand bg-brand-surface-strong px-4 py-3 text-sm text-brand-accent placeholder:text-brand-muted focus:border-brand-gold focus:outline-none"
        {...props}
      />
      {helper ? <p className="text-xs text-brand-muted">{helper}</p> : null}
    </div>
  );
}
