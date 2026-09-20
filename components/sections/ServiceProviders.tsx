import { UserCheck, Paperclip, CheckCircle2, MessageSquareText, BadgeCheck, ClipboardCheck, Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";

const steps = [
  { icon: UserCheck, titleKey: "step1", descKey: "step1Desc" },
  { icon: Paperclip, titleKey: "step2", descKey: "step2Desc" },
  { icon: CheckCircle2, titleKey: "step3", descKey: "step3Desc" },
];

const vetting = [
  { icon: MessageSquareText, titleKey: "review" },
  { icon: BadgeCheck, titleKey: "docs" },
  { icon: ClipboardCheck, titleKey: "quality" },
  { icon: Briefcase, titleKey: "onboarding" },
];

export default function ServiceProviders() {
  const t = useTranslations("providers");

  return (
    <section id="service-providers" className="section">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-extrabold leading-[1.05] text-[#70423F]  md:text-6xl">
            {t("title1")}
            <br />
            {t("title2")}
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#70423F] -300">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-2xl font-bold text-[#70423F]  md:text-3xl">
            {t("how")}
          </h3>
          <div className="relative mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            <svg
              className="pointer-events-none absolute inset-x-12 top-12 hidden h-12 w-[calc(100%-6rem)] md:block"
              viewBox="0 0 600 50"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0 25 C 150 0, 300 50, 450 25 S 600 0, 600 25"
                stroke="#0B2F46"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                fill="none"
                opacity="0.4"
              />
            </svg>
            {steps.map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} className="relative text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E28576] text-white shadow-md">
                  <Icon size={32} />
                </div>
                <h4 className="mt-5 text-base font-bold text-[#70423F] ">{t(titleKey)}</h4>
                <p className="mt-3 max-w-xs text-xs text-[#70423F] -300 mx-auto">
                  {t(descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-2xl font-bold text-[#70423F]  md:text-3xl">
            {t("vetting")}
          </h3>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {vetting.map(({ icon: Icon, titleKey }) => (
              <div key={titleKey} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center text-[#70423F] ">
                  <Icon size={36} />
                </div>
                <h4 className="mt-3 text-sm font-bold text-[#70423F] ">{t(titleKey)}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
