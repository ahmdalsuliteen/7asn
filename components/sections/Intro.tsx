import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Intro() {
  const t = useTranslations("intro");

  return (
    <section className="section">
      <div className="container grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[#E28576]-50">
          <Image
            src="/about.webp"
            alt="Service providers at work"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-[32px] font-medium leading-[1.2] tracking-tight text-[#70423F] ">
            {t("title")}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.7] text-[#70423F] -300 text-justify">
            {t("p1")}
          </p>
          <p className="mt-5 text-[15px] leading-[1.7] text-[#70423F] -300 text-justify">
            {t("p2")}
          </p>
        </div>
      </div>
    </section>
  );
}
