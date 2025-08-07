"use client";
import FadeDownOnScroll from "@/components/anim/FadeDownOnScroll";
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import { useFormik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import { TbSend } from "react-icons/tb";
import * as Yup from "yup";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const locale = useLocale();
  const en = locale === "en";

  const t = useTranslations("ContactUs");
  return (
    <form
      className="
        w-full max-w-2xl mx-auto flex flex-col gap-6
        px-4 py-6 md:px-12
        rounded-xl shadow
        bg-[#f7f3ec] border border-[#ede2d3]
        dark:bg-[#22201e] dark:border-[#36312a]
        backdrop-blur-sm
      "
      onSubmit={formik.handleSubmit}
    >
      <div>
        <Input
          required
          {...formik.getFieldProps("name")}
          label={t("nameLable")}
          name="name"
          placeholder={t("namePlaceholder")}
        />
      </div>

      <div>
        <Input
          required
          {...formik.getFieldProps("email")}
          label={t("emailLable")}
          name="email"
          placeholder={t("emailPlaceholder")}
        />
      </div>

      <div>
        <Input
          required
          {...formik.getFieldProps("message")}
          label={t("messageLable")}
          type="textarea"
          placeholder={t("massagePlaceholder")}
          name="message"
          rows={5}
        />
      </div>
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
  );
};

export default Form;
