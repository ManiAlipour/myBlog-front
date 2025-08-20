"use client";
import { useState } from "react";
import FadeDownOnScroll from "@/components/anim/FadeDownOnScroll";
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import { useFormik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import { TbSend } from "react-icons/tb";
import * as Yup from "yup";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      setIsOpen(false); // بستن مودال بعد ارسال
    },
  });

  const locale = useLocale();
  const en = locale === "en";
  const t = useTranslations("ContactUs");

  return (
    <>
      {/* دکمه نمایش فقط در موبایل */}
      <div className="flex justify-center mt-36 md:hidden my-4">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-brand2 text-white px-6 self-center py-2 rounded-lg"
        >
          {t("contactBtn")}
        </Button>
      </div>

      {/* فرم دسکتاپ */}
      <form
        className="
          hidden md:flex flex-col gap-6
          w-full max-w-2xl mx-auto
          px-4 py-6 md:px-12
          rounded-xl shadow
          bg-[#f7f3ec] border border-[#ede2d3]
          dark:bg-[#22201e] dark:border-[#36312a]
          backdrop-blur-sm
        "
        onSubmit={formik.handleSubmit}
      >
        <Input
          {...formik.getFieldProps("name")}
          required
          label={t("nameLable")}
          placeholder={t("namePlaceholder")}
        />
        <Input
          {...formik.getFieldProps("email")}
          required
          label={t("emailLable")}
          placeholder={t("emailPlaceholder")}
        />
        <Input
          {...formik.getFieldProps("message")}
          required
          type="textarea"
          rows={5}
          label={t("messageLable")}
          placeholder={t("massagePlaceholder")}
        />

        <FadeDownOnScroll offset={-100} className="w-full flex justify-center">
          <Button
            type="submit"
            className={`bg-brand2 hover:scale-105 transition-all duration-300 w-full md:w-auto flex justify-center 
            items-center gap-2 ${en ? "font-ubuntu" : "font-vazir"}`}
          >
            <span className="font-bold">{t("sendBtn")}</span>
            <TbSend className="text-2xl" />
          </Button>
        </FadeDownOnScroll>
      </form>

      {/* مودال موبایل */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#f7f3ec] dark:bg-[#22201e] rounded-xl shadow-lg w-full max-w-lg border border-[#ede2d3] dark:border-[#36312a]">
            <div className="flex justify-between items-center p-4 border-b dark:border-[#36312a] border-[#ede2d3]">
              <h2 className="text-lg font-bold">{t("contactTitle")}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="p-6 flex flex-col gap-4"
            >
              <Input
                {...formik.getFieldProps("name")}
                required
                label={t("nameLable")}
                placeholder={t("namePlaceholder")}
              />
              <Input
                {...formik.getFieldProps("email")}
                required
                label={t("emailLable")}
                placeholder={t("emailPlaceholder")}
              />
              <Input
                {...formik.getFieldProps("message")}
                required
                type="textarea"
                rows={4}
                label={t("messageLable")}
                placeholder={t("massagePlaceholder")}
              />

              <Button
                type="submit"
                className={`bg-brand2 hover:scale-105 transition-all duration-300 w-full flex justify-center 
                items-center gap-2 ${en ? "font-ubuntu" : "font-vazir"}`}
              >
                <span className="font-bold">{t("sendBtn")}</span>
                <TbSend className="text-2xl" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
