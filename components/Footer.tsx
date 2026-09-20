"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const t = useTranslations("nav");
  const f = useTranslations("footer");

  const col1 = [
    { href: "/#home", label: t("home") },
    { href: "/#about", label: t("about") },
    { href: "/#services", label: t("services") },
    { href: "/#building-owners", label: t("buildingOwners") },
    { href: "/#service-providers", label: t("serviceProviders") },
    { href: "/#testimonials", label: t("testimonials") },
  ];

  const col2 = [
    { href: "/#blog", label: t("blog") },
    { href: "/#faq", label: t("faq") },
    { href: "/privacy", label: f("privacy") },
    { href: "/terms", label: f("terms") },
    { href: "/#contact", label: f("contact") },
  ];

  return (
    <footer className="bg-[#E28576] text-[#70423F]">
      <div className="container grid grid-cols-1 gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-10 text-xs text-[#70423F]">
            {f("copyright")}
            <br />
            {f("rights")}
          </p>
        </div>

        <nav className="md:col-span-3">
          <ul className="space-y-3 text-sm text-[#70423F]">
            {col1.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="md:col-span-3">
          <ul className="space-y-3 text-sm text-[#70423F]">
            {col2.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2 md:text-right">
          <SocialIcons className="md:justify-end" />
        </div>
      </div>
    </footer>
  );
}
