import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const tFooter = useTranslations("Footer");

  return (
    <footer className="border-t border-brand-sand bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-brand-muted md:flex-row md:items-center md:justify-between">
        <p>{tFooter("rights")}</p>
        <div className="flex flex-wrap gap-6">
          <Link className="hover:text-brand-accent" href="/#services">
            {tFooter("services")}
          </Link>
          <Link className="hover:text-brand-accent" href="/#bento">
            {tFooter("trust")}
          </Link>
          <Link className="hover:text-brand-accent" href="/#listings">
            {tFooter("portfolio")}
          </Link>
          <Link className="hover:text-brand-accent" href="/#contact">
            {tFooter("contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
