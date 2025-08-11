"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
    password: Yup.string()
      .min(6, "رمز باید حداقل ۶ کاراکتر باشد")
      .required("رمز عبور الزامی است"),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (!res?.error) router.push("/dashboard");
    else alert("ایمیل یا رمز عبور اشتباه");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bg1 px-4">
      <div className="w-full max-w-md bg-bg2 p-8 rounded-xl shadow-lg border border-grey">
        {/* عنوان */}
        <h1 className="text-xl font-bold text-center mb-6 text-white font-ubuntu">
          ورود به حساب کاربری
        </h1>

        {/* فرم */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            {/* ایمیل */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-brand2 font-ubuntu"
              >
                ایمیل
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

            {/* پسورد */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-brand2 font-ubuntu"
              >
                رمز عبور
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
              className="w-full py-2 bg-brand1 text-bg1 font-medium font-ubuntu rounded-lg hover:opacity-90 transition"
            >
              ورود
            </button>
          </Form>
        </Formik>

        {/* جداکننده */}
        <div className="flex items-center my-5">
          <div className="flex-grow border-t border-grey"></div>
          <span className="mx-3 text-sm text-grey">یا</span>
          <div className="flex-grow border-t border-grey"></div>
        </div>

        {/* گوگل */}
        <button
          onClick={() => signIn("google")}
          className="w-full py-2 border border-grey rounded-lg flex items-center justify-center space-x-2 hover:bg-bg1 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm text-white font-ubuntu">ورود با گوگل</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
