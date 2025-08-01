import Button from "@/components/ui/button/Button";
import Title from "@ui/layoutTitle/Title";
import Image from "next/image";
import Link from "next/link";


const Blogs = async () => {
  return (
    <div id="blogs" className="min-h-screen bg-bg2 w-full flex flex-col py-20">
      <Title
        title="Blogs"
        description="My thoughts on technology and business, welcome to subscribe"
      />

      <div
        className="flex flex-col md:flex-row gap-10 justify-baseline border-t border-b w-2/3 mx-auto
       my-10 py-10"
      >
        <div className="flex-2/6 flex justify-center items-center">
          <Image
            src="/images/blog-image.png"
            alt="blog-image"
            width={240}
            height={240}
          />
        </div>
        <div className="flex-4/6 flex flex-col gap-5 justify-around md:px-4">
          <span className="text-3xl text-brand1">
            What does it take to become a web developer?
          </span>

          <span className="font-light text-gray-400">
            Web development, also known as website development, encompasses a
            variety of tasks and processes involved in creating websites for the
            internet…
          </span>

          <Link className="text-brand1" href="/">
            <span className="border-b border-b-brand1 py-1">Read More </span>{" "}
            {">>"}
          </Link>

          <div className="flex flex-wrap justify-start items-center gap-4">
            <span className="bg-bg1 text-center text-sm flex-2/4 md:flex-auto px-2 py-1 rounded-4xl font-extralight text-gray-300">
              Web Developer
            </span>

            <span className="flex flex-1/4 gap-2 items-center md:flex-auto">
              <span>Text</span>
              <span className="text-gray-400">Mani</span>
            </span>

            <span className="flex flex-1/4 md:flex-auto gap-2 items-center">
              <span>Data</span>
              <span className="text-gray-400">10 Oct.2023</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10">
        <Button color="blue">View More</Button>
        <Button color="dark">Subscribe</Button>
      </div>
    </div>
  );
};

export default Blogs;
