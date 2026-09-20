import Image from "next/image";
import { useTranslations } from "next-intl";

const services = [
  {
    icon: "/icons/cleaning.jpg",
    titleKey: "cleaning",
    descKey: "cleaningDesc",
  },
  {
    icon: "/icons/Maintenance.jpg",
    titleKey: "maintenance",
    descKey: "maintenanceDesc",
  },
  {
    icon: "/icons/Security.jpg",
    titleKey: "security",
    descKey: "securityDesc",
  },
  {
    icon: "/icons/Fire-Safety.jpg",
    titleKey: "fireSafety",
    descKey: "fireSafetyDesc",
  },
  {
    icon: "/icons/Landscaping.jpg",
    titleKey: "landscaping",
    descKey: "landscapingDesc",
  },
  {
    icon: "/icons/Relocation.jpg",
    titleKey: "relocation",
    descKey: "relocationDesc",
  },
];

const audience = [
  {
    icon: "/icons/target/Commercial.jpg",
    titleKey: "commercial",
    descKey: "commercialDesc",
  },
  {
    icon: "/icons/target/Shopping.jpg",
    titleKey: "shopping",
    descKey: "shoppingDesc",
  },
  {
    icon: "/icons/target/Financial.jpg",
    titleKey: "financial",
    descKey: "financialDesc",
  },
  {
    icon: "/icons/target/Residential.jpg",
    titleKey: "residential",
    descKey: "residentialDesc",
  },
];

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-extrabold leading-[1.05] text-[#70423F] md:text-6xl">
            {t("title1")}
            <br />
            {t("title2")}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#70423F] -300">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon, titleKey, descKey }) => (
            <div
              key={titleKey}
              className="group rounded-2xl border border-sky-200 bg-white p-7 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
            >
              <div className="relative h-24 w-24">
                <Image
                  src={icon}
                  alt={`${t(titleKey)} icon`}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#70423F] ">{t(titleKey)}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-[#70423F] -300 text-justify">
                {t(descKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold text-[#E85E4F] md:text-3xl">
            {t("targetAudience")}
          </h3>
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {audience.map(({ icon, titleKey, descKey }) => (
              <div
                key={titleKey}
                className="rounded-2xl border border-sky-200 bg-white p-6 text-center transition hover:border-sky-300 hover:shadow-md"
              >
                <div className="relative mx-auto h-24 w-24">
                  <Image
                    src={icon}
                    alt={`${t(titleKey)} icon`}
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
                <h4 className="mt-5 text-base font-extrabold leading-tight text-[#70423F] ">
                  {t(titleKey)}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#70423F] -300">
                  {t(descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
