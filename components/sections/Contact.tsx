"use client";

import { useState } from "react";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

type FormState = {
  name: string;
  company: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: "", company: "", email: "", message: "" };

export default function Contact() {
  const t = useTranslations("contact");
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState): Errors {
    const e: Errors = {};
    if (!values.name.trim()) e.name = t("errors.name");
    if (!values.company.trim()) e.company = t("errors.company");
    if (!values.email.trim()) e.email = t("errors.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = t("errors.emailInvalid");
    if (!values.message.trim() || values.message.trim().length < 10)
      e.message = t("errors.message");
    return e;
  }

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(data);
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
      setData(initial);
    }
  }

  const inputBase =
    "w-full rounded-md border bg-white px-3 py-2.5 text-sm text-[#70423F]  placeholder:text-[#70423F] -200 focus:outline-none focus:ring-2 focus:ring-navy/30";

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="eyebrow">{t("eyebrow")}</p>
        <h2 className="heading-xl mt-3">
          {t("headline1")}
          <br />
          {t("headline2")}
        </h2>
        <p className="mt-2 text-sm text-[#70423F] -300">{t("subtitle")}</p>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm font-bold text-[#70423F] ">{t("introTitle")}</p>
              <h3 className="mt-2 text-4xl font-extrabold text-[#70423F]  md:text-5xl">
                {t("introHeadline")}
              </h3>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-[#70423F] -300">
                {t("introText")}
              </p>

              <div className="mt-[50px] grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <div className="text-sm font-bold text-[#70423F] ">{t("address")}</div>
                  <p className="mt-1 text-sm text-[#70423F] -300">Riyadh, Saudi Arabia</p>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#70423F] ">{t("emailLabel")}</div>
                  <p className="mt-1 text-sm text-[#70423F] -300">sales@company.com</p>
                </div>
                <div>
                  <div className="text-sm mt-[80px] font-bold text-[#70423F] ">{t("phoneLabel")}</div>
                  <p className="mt-1 text-sm text-[#70423F] -300">+966 XXXXXXXX</p>
                </div>
                <div>
                  <div className="text-sm mt-[80px] font-bold text-[#70423F] ">{t("socialLabel")}</div>
                  <ul className="mt-2 flex gap-4 text-[#70423F] ">
                    <li><Facebook size={18} /></li>
                    <li><Linkedin size={18} /></li>
                    <li><Instagram size={18} /></li>
                    <li><Twitter size={18} /></li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="mt-8 border-t border-navy-100" />
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            className="flex flex-col rounded-md bg-[#F4F4F4] p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-[#70423F] ">{t("formTitle")}</h3>

            {submitted && (
              <p className="mt-4 rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800">
                {t("success")}
              </p>
            )}

            <div className="mt-5 flex flex-1 flex-col space-y-4">
              <div>
                <label className="text-sm text-[#70423F] ">
                  {t("name")} <span className="text-accent-red">*</span>
                </label>
                <input
                  name="name"
                  value={data.name}
                  onChange={onChange}
                  placeholder={t("fullName")}
                  className={`${inputBase} ${errors.name ? "border-red-400" : "border-navy-100"} mt-1`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm text-[#70423F] ">
                  {t("company")} <span className="text-accent-red">*</span>
                </label>
                <input
                  name="company"
                  value={data.company}
                  onChange={onChange}
                  placeholder={t("companyName")}
                  className={`${inputBase} ${errors.company ? "border-red-400" : "border-navy-100"} mt-1`}
                />
                {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
              </div>

              <div>
                <label className="text-sm text-[#70423F] ">
                  {t("emailLabel")} <span className="text-accent-red">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={onChange}
                  placeholder={t("placeholderEmail")}
                  className={`${inputBase} ${errors.email ? "border-red-400" : "border-navy-100"} mt-1`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>

              <div className="flex flex-1 flex-col">
                <label className="text-sm text-[#70423F] ">
                  {t("message")} <span className="text-accent-red">*</span>
                </label>
                <textarea
                  name="message"
                  value={data.message}
                  onChange={onChange}
                  placeholder={t("placeholderMessage")}
                  className={`${inputBase} ${errors.message ? "border-red-400" : "border-navy-100"} mt-1 flex-1`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
              </div>

              <button type="submit" className="btn-primary w-full">
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}