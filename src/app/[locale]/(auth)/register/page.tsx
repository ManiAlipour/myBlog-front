"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import AuthLangugeSwitcher from "@/components/features/languageSwitcher/AuthLangugeSwitcher";
import clientApi from "@/lib/axios/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ThreeDot } from "react-loading-indicators";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const locale = useLocale();
  const en = locale === "en";
  const router = useRouter();

  const t = useTranslations("Register");

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, t("nameMin"))
      .max(50, t("nameMax"))
      .required(t("nameRequired")),
    email: Yup.string().email(t("emailNotValid")).required(t("emailRequired")),
    password: Yup.string()
      .min(8, t("passwordMinMax"))
      .required(t("passwordRequired")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("confirmPasswordMatch"))
      .required(t("confirmPasswordRequired")),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    setLoading(true);
    const data = {
      email: values.email,
      name: values.name,
      password: values.password,
      locale,
    };

    clientApi
      .post("/auth/register", data)
      .then(() => {
        setLoading(false);

        router.push(
          `/${locale}/verify-email?email=${encodeURIComponent(values.email)}`
        );
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex  items-center justify-center min-h-screen bg-bg1 px-4">
      <div
        className={`w-full relative max-w-md bg-bg2 p-8 rounded-xl shadow-lg border border-grey ${
          en ? "font-ubuntu" : "font-vazir"
        }`}
      >
        <AuthLangugeSwitcher />

        <h1 className="text-xl font-bold text-center mb-6 text-white">
          {t("title")}
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-brand2"
              >
                {t("name")}
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-bg1 border border-grey rounded-lg text-white placeholder-gray-400 
                           focus:outline-none focus:border-brand1 focus:ring-2 focus:ring-brand1/40 transition text-sm"
                placeholder={en ? "John Doe" : "مانی علیپور"}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-400 text-xs mt-1"
              />
            </div>

            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-1 text-sm font-medium text-brand2"
              >
                {t("confirmPassword")}
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-4 py-2 bg-bg1 border border-grey rounded-lg text-white placeholder-gray-400 
                           focus:outline-none focus:border-brand1 focus:ring-2 focus:ring-brand1/40 transition text-sm"
                placeholder="******"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-400 text-xs mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-brand1 text-bg1 font-medium rounded-lg hover:opacity-90 transition"
            >
              {loading ? (
                <ThreeDot color="#292f36" size="small" />
              ) : (
                <span>{t("submitBtn")}</span>
              )}
            </button>
          </Form>
        </Formik>

        <div className="my-4">
          <span className="text-gray-400">
            {t("haveAccount")}
            <Link className="mx-2 text-brand1" href="/login">
              {t("login")}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
