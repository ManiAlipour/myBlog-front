"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import AuthLanguageSwitcher from "@/components/features/languageSwitcher/AuthLangugeSwitcher";
import { useRouter } from "next/navigation";

interface Props {
  email: string;
}

const VerifyEmailForm = ({ email }: Props) => {
  const locale = useLocale();
  const en = locale === "en";
  const t = useTranslations("VerifyEmail");
  const router = useRouter();

  const initialValues = { code: "" };

  const validationSchema = Yup.object({
    code: Yup.string().length(6, t("codeLength")).required(t("codeRequired")),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      console.log("Verify code for:", email, "with code:", values.code);
      // TODO: API تایید کد
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bg1 px-4">
      <div
        className={`w-full relative max-w-md bg-bg2 p-8 rounded-xl shadow-lg border border-grey ${
          en ? "font-ubuntu" : "font-vazir"
        }`}
      >
        <AuthLanguageSwitcher />
        <h1 className="text-xl font-bold text-center mb-6 text-white">
          {t("title")}
        </h1>

        <p className="text-center text-sm text-gray-400 mb-4">
          {t("sentTo")} <span className="text-brand1 font-medium">{email}</span>
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            <div>
              <label
                htmlFor="code"
                className="block mb-1 text-sm font-medium text-brand2"
              >
                {t("code")}
              </label>
              <Field
                type="text"
                id="code"
                name="code"
                className="w-full px-4 py-2 bg-bg1 border border-grey rounded-lg text-white 
                         placeholder-gray-400 focus:outline-none focus:border-brand1 focus:ring-2 focus:ring-brand1/40 
                         transition text-sm tracking-widest text-center"
                placeholder="••••••"
                maxLength={6}
              />
              <ErrorMessage
                name="code"
                component="div"
                className="text-red-400 text-xs mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-brand1 text-bg1 font-medium rounded-lg hover:opacity-90 transition"
            >
              {t("submitBtn")}
            </button>
          </Form>
        </Formik>

        <div className="mt-6 text-center">
          <span className="text-gray-400">{t("noCode")}</span>
          <button
            onClick={() => {
              console.log("Resend code to:", email);
              // TODO: API ارسال مجدد کد
            }}
            className="ml-2 text-brand1 hover:underline"
          >
            {t("resend")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailForm;
