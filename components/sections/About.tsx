import Image from "next/image";
import { useTranslations } from "next-intl";

const team = [
  { name: "Sara Al-Otaibi", role: "Co-Founder & CEO" },
  { name: "Khalid Al-Sayed", role: "Chief Operating Officer" },
  { name: "Layla Al-Najjar", role: "Head of Partnerships" },
  { name: "Omar Al-Qahtani", role: "Head of Engineering" },
  { name: "Hana Al-Mutairi", role: "Customer Success Lead" },
];

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="max-w-3xl text-3xl tracking-[2px] font-semibold leading-[1.1] text-[#70423F] md:text-4xl lg:text-5xl">
          {t("title1")}
          <br className="hidden sm:block" /> {t("title2")}
        </h2>

        <div className="relative mt-10 aspect-[16/6] w-full overflow-hidden rounded-md bg-[#E28576]-50">
          <Image
            src="/about2.webp"
            alt="Service providers at a residential property"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-14">
          <div className="flex flex-col justify-between gap-16">
            <div>
              <h3 className="text-4xl font-semibold tracking-tight text-[#000000] md:text-5xl">
                {t("vision")}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#70423F] -300">
                {t("visionText")}
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-semibold tracking-tight text-[#000000] md:text-5xl">
                {t("mission")}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#70423F] -300">
                {t("missionText")}
              </p>
            </div>
          </div>

          <div className="relative min-h-[420px] w-full overflow-hidden rounded-2xl bg-[#E28576]-50 md:min-h-full">
            <Image
              src="/about.webp"
              alt="Atheer team at work"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover opacity-90"
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[#000000] md:text-3xl">
            {t("story")}
          </h3>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#70423F] -300">
            <p>{t("story1")}</p>
            <p>{t("story2")}</p>
            <p>{t("story3")}</p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-[#E85E4F] md:text-3xl">
            {t("team")}
          </h3>
          <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
            {team.map((m) => (
              <li
                key={m.name}
                className="rounded-md border border-navy-50 bg-white p-4 text-center shadow-sm"
              >
                <div className="aspect-square w-full overflow-hidden rounded bg-[#E28576]-50/70" />
                <div className="mt-3 text-sm font-bold text-[#70423F] ">{m.name}</div>
                <div className="mt-1 text-xs text-[#70423F] -300">{m.role}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
