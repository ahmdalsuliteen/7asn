import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="home" className="relative isolate">
      <div className="relative h-[440px] w-full sm:h-[500px] md:h-[560px] lg:h-[600px]">
        <Image
          src="/hero.webp"
          alt="Professional with toolbox"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="container relative flex h-full items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl font-normal leading-[1.1] tracking-tight drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">{t("title1")}</span>
              <span className="block">{t("title2")}</span>
            </h1>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-[#E28576] px-8 py-3.5 text-sm font-medium text-[#70423F] shadow-lg ring-1 ring-white/10 transition hover:bg-[#E28576]-700"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
