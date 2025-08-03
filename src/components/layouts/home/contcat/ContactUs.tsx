import Title from "@ui/layoutTitle/Title";
import Form from "./form";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-bg2 w-full flex flex-col py-20">
      <Title
        title="Contact"
        description="I’m currently available for freelance work"
      />
      <h2
        className="text-3xl self-center my-20 text-brand1  px-6 py-3 border-2 border-brand1
      font-IBM rounded-tl-4xl rounded-br-4xl  "
      >
        Send Me A Message
      </h2>
      <Form />
    </div>
  );
};

export default ContactUs;
