// "use client";

// import { useLocale, useTranslations } from "next-intl";
// import { Link, usePathname, useRouter } from "@/i18n/routing";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import Logo from "./Logo";

// export default function Header() {
//   const t = useTranslations("nav");
//   const locale = useLocale();
//   const router = useRouter();
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
//   const isArabic = locale === "ar";

//   const nav = [
//     { href: "/#home", label: t("home") },
//     { href: "/#about", label: t("about") },
//     { href: "/#services", label: t("services") },
//     { href: "/#building-owners", label: t("buildingOwners") },
//     { href: "/#service-providers", label: t("serviceProviders") },
//     { href: "/#testimonials", label: t("testimonials") },
//     { href: "/#blog", label: t("blog") },
//   ];

//   const toggleLocale = (nextLocale: string) => {
//     if (nextLocale !== locale) {
//       router.replace(pathname || "/", { locale: nextLocale });
//     }
//   };

//   return (
//     <header
//       dir={isArabic ? "rtl" : "ltr"}
//       className="sticky top-0 z-50 bg-[#E28576] text-white shadow-sm"
//     >
//       <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
//         <Logo light />

//         <nav className="hidden lg:block">
//           <ul className={`flex items-center gap-7 text-sm ${isArabic ? "flex-row-reverse" : ""}`}>
//             {nav.map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className="text-[#70423F] transition hover:text-white"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
//           <div className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1 md:flex">
//             <button
//               type="button"
//               onClick={() => toggleLocale("en")}
//               className={`rounded-full px-2 py-1 text-xs font-medium ${locale === "en" ? "bg-white text-[#E28576]" : "text-white/80"}`}
//             >
//               EN
//             </button>
//             <button
//               type="button"
//               onClick={() => toggleLocale("ar")}
//               className={`rounded-full px-2 py-1 text-xs font-medium ${locale === "ar" ? "bg-white text-[#E28576]" : "text-white/80"}`}
//             >
//               AR
//             </button>
//           </div>

//           <button
//             aria-label="Toggle menu"
//             aria-expanded={open}
//             onClick={() => setOpen((s) => !s)}
//             className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/90 lg:hidden"
//           >
//             {open ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <div className="border-t border-white/10 bg-[#E28576] lg:hidden">
//           <ul className={`container flex flex-col py-3 ${isArabic ? "items-end" : "items-start"}`}>
//             {nav.map((item) => (
//               <li key={item.href} className="w-full">
//                 <Link
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   className="block py-3 text-sm text-[#70423F] hover:text-white"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const isArabic = locale === "ar";

  const nav = [
    { href: "/#home", label: t("home") },
    { href: "/#about", label: t("about") },
    { href: "/#services", label: t("services") },
    { href: "/#building-owners", label: t("buildingOwners") },
    { href: "/#service-providers", label: t("serviceProviders") },
    { href: "/#testimonials", label: t("testimonials") },
    { href: "/#blog", label: t("blog") },
  ];

  const toggleLocale = (nextLocale: string) => {
    if (nextLocale !== locale) {
      router.replace(pathname || "/", { locale: nextLocale });
    }
    setLangOpen(false);
    setOpen(false);
  };

  return (
    <header
      dir={isArabic ? "rtl" : "ltr"}
      className="sticky top-0 z-50 bg-[#E28576] text-white shadow-sm"
    >
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo light />

        <nav className="hidden lg:block">
          <ul className={`flex items-center gap-7 text-sm ${isArabic ? "flex-row-reverse" : ""}`}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[#70423F] transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
          {/* Desktop language switcher */}
          <div className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1 md:flex">
            <button
              type="button"
              onClick={() => toggleLocale("en")}
              className={`rounded-full px-2 py-1 text-xs font-medium ${locale === "en" ? "bg-white text-[#E28576]" : "text-white/80"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => toggleLocale("ar")}
              className={`rounded-full px-2 py-1 text-xs font-medium ${locale === "ar" ? "bg-white text-[#E28576]" : "text-white/80"}`}
            >
              AR
            </button>
          </div>

          {/* Mobile language dropdown */}
          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => setLangOpen((s) => !s)}
              className="inline-flex h-10 items-center gap-1 rounded-md px-2 text-white/90"
            >
              <Globe size={18} />
              <span className="text-xs font-medium uppercase">{locale}</span>
              <ChevronDown size={14} className={`transition ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {langOpen && (
              <div className="absolute end-0 mt-2 w-28 overflow-hidden rounded-md border border-white/20 bg-[#E28576] shadow-lg">
                <button
                  type="button"
                  onClick={() => toggleLocale("en")}
                  className={`block w-full px-3 py-2 text-start text-sm ${locale === "en" ? "bg-white/20 font-semibold" : "text-white/90 hover:bg-white/10"}`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => toggleLocale("ar")}
                  className={`block w-full px-3 py-2 text-start text-sm ${locale === "ar" ? "bg-white/20 font-semibold" : "text-white/90 hover:bg-white/10"}`}
                >
                  العربية
                </button>
              </div>
            )}
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/90 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#E28576] lg:hidden">
          <ul className={`container flex flex-col py-3 ${isArabic ? "items-end" : "items-start"}`}>
            {nav.map((item) => (
              <li key={item.href} className="w-full">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-[#70423F] hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}