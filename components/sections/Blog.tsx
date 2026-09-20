import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Blog() {
  const t = useTranslations("blog");

  const posts = [
    { date: t("date"), title: t("post1"), category: t("categoryPartnerships") },
    { date: t("date"), title: t("post2"), category: t("categorySecurity") },
    { date: t("date"), title: t("post3"), category: t("categoryMaintenance") },
    { date: t("date"), title: t("post4"), category: t("categoryPlatform") },
    { date: t("date"), title: t("post5"), category: t("categoryInsights") },
    { date: t("date"), title: t("post6"), category: t("categoryTrends") },
  ];

  return (
    <section id="blog" className="section">
      <div className="container">
        <p className="eyebrow">{t("eyebrow")}</p>
        <h2 className="heading-lg mt-3">{t("heading")}</h2>
        <p className="mt-2 text-sm text-[#70423F] -300">{t("subtitle")}</p>

        <article className="mt-10 grid grid-cols-1 items-center gap-8 rounded-md border border-navy-50 p-6 shadow-sm md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[#E28576]-50/40">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Featured story"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="text-base leading-relaxed text-[#70423F] -300 md:text-lg">
            {t("feature")}
          </p>
        </article>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.title}
              href="#"
              className="group block rounded-md transition hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-[#E28576]-50/40">
                <span className="absolute left-3 top-3 z-10 rounded bg-white/85 px-2 py-1 text-[10px] font-medium text-[#70423F] ">
                  {p.date}
                </span>
                <Image
                  src={`https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80`}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-90 transition group-hover:opacity-100"
                />
              </div>
              <h3 className="mt-3 text-sm font-bold leading-snug text-[#70423F] ">{p.title}</h3>
              <span className="mt-3 inline-block rounded border border-navy-50 px-3 py-1 text-[11px] text-[#70423F] -300">
                {p.category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
