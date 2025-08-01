import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="flex md:px-10 gap-y-5 px-0 justify-center flex-col xl:flex-row items-center my-20 bg-bg2 min-h-screen py-20"
    >
      <div className="flex-1/2 px-10  gap-y-10 flex w-full flex-col items-start justify-around self-stretch">
        <h2 className="text-3xl px-6 py-3 border-2 border-brand1 rounded-tl-4xl rounded-br-4xl  ">
          About Me
        </h2>

        <section className=" bg-bg1 py-5 px-2 md:p-10 rounded-4xl">
          <span className="text-brand2 text-sm py-5 ">{"<p>"}</span>

          <p className="font-IBM w-full">
            <span className="text-2xl font-extralight text-brand1">Hello!</span>
            <br />
            My name is Mani and I specialize in web developement that utilizes{" "}
            <span className="text-brand1">HTML</span>,{" "}
            <span className="text-brand1">CSS</span>,{" "}
            <span className="text-brand1">JS</span>,{" "}
            <span className="text-brand1">REACT</span>,{" "}
            <span className="text-brand1">NODE</span> and{" "}
            <span className="text-brand1">NEXT</span> etc. <br />
            <br /> I am a highly motivated individual and eternal optimist
            dedicated to writing clear, concise, robust code that works.
            Striving to never stop learning and improving.When I'm not coding,
            I'm <span className="text-brand1">writing blogs</span>,{" "}
            <span className="text-brand1">reading</span>, or{" "}
            <span className="text-brand1">playing games</span>. <br />
            <br /> I like to have my perspective and belief systems challenged
            so that I see the world through new eyes.
          </p>

          <span className="text-brand2 py-5 font-extralight text-sm ">
            {"</p>"}
          </span>
        </section>
      </div>

      <div className="flex-1/2 flex justify-center items-center">
        <Image
          src="/images/coding.png"
          className="md:w-[462px] md:h-[556px]  w-[272px] h-[364px]"
          width={462}
          height={556}
          alt="coding"
        />
      </div>
    </div>
  );
};

export default About;
