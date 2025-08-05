import Title from "@ui/layoutTitle/Title";
import Form from "./form";
import { useLocale, useTranslations } from "next-intl";

const ContactUs = () => {
  const t = useTranslations("ContactUs");
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-bg2 w-full flex flex-col py-20">
      <Title title={t("title")} description={t("description")} />
      <h2
        className={`text-3xl self-center my-20 text-brand1  px-6 py-3 border-2 border-brand1
      ${locale === "en" ? "font-IBM ": "font-morabba"} rounded-tl-4xl rounded-br-4xl`}
      >
        {t("sendMessageTitle")}
      </h2>
      <Form />
    </div>
  );
};

export default ContactUs;
