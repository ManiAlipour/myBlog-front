"use client";
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import { useFormik } from "formik";
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
  return (
    <form
      className="flex flex-wrap justify-around w-2/3 mx-auto items-center gap-20 px-20"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex-1/4">
        <Input
          required
          {...formik.getFieldProps("name")}
          label="Your name"
          name="name"
          placeholder="Enter your name"
        />
      </div>

      <div className="flex-1/4">
        <Input
          required
          {...formik.getFieldProps("email")}
          label="Your email"
          name="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="flex-4/4">
        <Input
          required
          {...formik.getFieldProps("message")}
          label="Your message"
          type="textarea"
          placeholder="Enter your needs"
          name="message"
        />
      </div>
      <Button type="submit">
        <span className="font-bold">Send Message</span>{" "}
        <TbSend className="text-2xl" />
      </Button>
    </form>
  );
};

export default Form;
