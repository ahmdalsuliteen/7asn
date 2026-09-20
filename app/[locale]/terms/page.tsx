import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);

  return {
    title: "Terms & Conditions — Atheer",
    description: "Terms and conditions governing your use of Atheer's products, services, and website.",
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("terms");

  const sections = [
    {
      title: t("section1"),
      body: [t("section1Body1")],
    },
    {
      title: t("section2"),
      body: [t("section2Body1"), t("section2Body2"), t("section2Body3")],
    },
    {
      title: t("section3"),
      body: [t("section3Body1"), t("section3Body2"), t("section3Body3")],
    },
    {
      title: t("section4"),
      body: [t("section4Body1"), t("section4Body2"), t("section4Body3")],
    },
    {
      title: t("section5"),
      body: [t("section5Body1"), t("section5Body2")],
    },
    {
      title: t("section6"),
      body: [t("section6Body1"), t("section6Body2")],
    },
    {
      title: t("section7"),
      body: [t("section7Body1"), t("section7Body2")],
    },
    {
      title: t("section8"),
      body: [t("section8Body1")],
    },
    {
      title: t("section9"),
      body: [t("section9Body1")],
    },
  ];

  return (
    <article className="container max-w-4xl py-16 md:py-24">
      <header>
        <h1 className="text-3xl font-semibold text-[#70423F] md:text-4xl">
          {t("title1")}
        </h1>
        <h2 className="mt-2 text-4xl font-extrabold text-[#70423F] md:text-5xl">
          {t("title2")}
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-[#70423F] -300">
          {t("subtitle")}
        </p>
        <p className="mt-2 text-xs font-bold text-accent-red">{t("updated")}</p>
      </header>

      <p className="mt-10 text-sm leading-relaxed text-[#70423F] -300">
        {t("intro")}
      </p>

      <div className="mt-10 space-y-10">
        {sections.map((s) => (
          <section key={s.title}>
            <h3 className="text-xl font-bold text-[#000] md:text-2xl">{s.title}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#70423F] -300">
              {s.body.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
