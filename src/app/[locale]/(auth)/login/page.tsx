"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";

const LoginForm = () => {
  const locale = useLocale();
  const en = locale === "en";

  const t = useTranslations("Login");

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email(t("emailNotValid")).required(t("emailRequired")),
    password: Yup.string()
      .min(8, t("passwordMinMax"))
      .required(t("passwordRequird")),
  });

  const handleSubmit = async (values: typeof initialValues) => {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-bg1 px-4">
      <div
        className={`w-full max-w-md bg-bg2 p-8 rounded-xl shadow-lg border border-grey ${
          en ? "font-ubuntu" : "font-vazir"
        }`}
      >
        {/* عنوان */}
        <h1 className="text-xl font-bold text-center mb-6 text-white">
          {t("title")}
        </h1>

        {/* فرم */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-brand2"
              >
                {t("email")}
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-bg1 border border-grey rounded-lg text-white placeholder-gray-400 
                           focus:outline-none focus:border-brand1 focus:ring-2 focus:ring-brand1/40 transition text-sm"
                placeholder="you@example.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-400 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-brand2"
              >
                {t("password")}
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 bg-bg1 border border-grey rounded-lg text-white placeholder-gray-400 
                           focus:outline-none focus:border-brand1 focus:ring-2 focus:ring-brand1/40 transition text-sm"
                placeholder="******"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-400 text-xs mt-1"
              />
            </div>

            {/* دکمه ورود */}
            <button
              type="submit"
              className="w-full py-2 bg-brand1 text-bg1 font-medium rounded-lg hover:opacity-90 transition"
            >
              {t("submitBtn")}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
