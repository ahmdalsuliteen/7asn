import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import BuildingOwners from "@/components/sections/BuildingOwners";
import ServiceProviders from "@/components/sections/ServiceProviders";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import { setRequestLocale } from "next-intl/server";

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Intro />
      <About />
      <Services />
      <BuildingOwners />
      <ServiceProviders />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}
