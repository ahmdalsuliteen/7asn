import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

const reviews = [
  {
    quoteKey: "review1",
    nameKey: "name1",
    roleKey: "role1",
  },
  {
    quoteKey: "review2",
    nameKey: "name2",
    roleKey: "role2",
  },
  {
    quoteKey: "review3",
    nameKey: "name3",
    roleKey: "role3",
  },
  {
    quoteKey: "review4",
    nameKey: "name4",
    roleKey: "role4",
  },
];

const cases = [
  {
    titleKey: "case1Title",
    descKey: "case1Desc",
  },
  {
    titleKey: "case2Title",
    descKey: "case2Desc",
  },
  {
    titleKey: "case3Title",
    descKey: "case3Desc",
  },
];

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="text-5xl font-extrabold tracking-tight text-[#70423F] md:text-6xl lg:text-7xl">
          {t("title")}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
          {reviews.map((r) => (
            <article
              key={r.nameKey + r.roleKey}
              className="rounded-2xl bg-slate-50 p-7 shadow-[0_2px_12px_rgba(11,47,70,0.05)]"
            >
              <div className="flex items-start justify-between">
                <span
                  aria-hidden
                  className="font-serif text-5xl leading-none text-slate-400"
                >
                  &ldquo;
                </span>
                <div className="flex gap-1 text-[#F59E0B]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-[14px] leading-[1.7] text-[#70423F] text-justify">
                {t(r.quoteKey)}
              </p>
              <hr className="mt-6 border-navy-50" />
              <div className="mt-5 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-300" />
                <div>
                  <div className="text-[15px] font-bold text-[#70423F]">
                    {t(r.nameKey)}
                  </div>
                  <div className="mt-0.5 text-xs text-slate-400">{t(r.roleKey)}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <h2 className="mt-24 text-5xl font-semibold tracking-tight text-[#70423F] md:text-6xl lg:text-7xl">
          {t("caseStudies")}
        </h2>
        <div className="mt-12 space-y-12">
          {cases.map((c) => (
            <article
              key={c.titleKey}
              className="grid grid-cols-1 items-center gap-10 border-b border-slate-200 pb-12 md:grid-cols-2 md:gap-16"
            >
              <div>
                <h3 className="text-2xl font-semibold leading-[1.2] text-[#000000] md:text-3xl">
                  {t(c.titleKey)}
                </h3>
                <p className="mt-6 text-[14px] leading-[1.7] text-[#70423F] text-justify">
                  {t(c.descKey)}
                </p>
              </div>
              <div className="aspect-[16/9] w-full rounded-md bg-slate-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
