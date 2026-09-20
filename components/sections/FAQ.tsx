"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
  ];

  return (
    <section id="faq" className="section">
      <div className="container">
        <p className="eyebrow">FAQ</p>
        <h2 className="heading-xl mt-3">
          {t("title")}
          <br />
          {t("title2")}
        </h2>
        <p className="mt-3 text-sm text-[#70423F] -300">{t("subtitle")}</p>

        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-md bg-[#E28576]-50/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-sm font-medium text-[#70423F]  md:text-base">
                    {item.q}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-[#70423F] ">
                    {open ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden px-6 transition-all duration-300 ${open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="text-sm leading-relaxed text-[#70423F] -300">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
