import FadeDownOnScroll from "@/components/anim/FadeDownOnScroll";
import FadeUpOnScroll from "@/components/anim/FadeUpOnScroll";
import BlogCard from "@features/blogCard/BlogCard";
import Button from "@/components/ui/button/Button";
import Title from "@ui/layoutTitle/Title";
import { getTranslations } from "next-intl/server";

const Blogs = async () => {
  const t = await getTranslations("Blogs");

  return (
    <FadeUpOnScroll
      id="blogs"
      className="min-h-screen bg-bg2 w-full flex flex-col py-20"
    >
      <Title title={t("title")} description={t("description")} />

      {/* <div
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
            <span className="border-b border-b-brand1 py-1">
              {t("readMore")}{" "}
            </span>{" "}
            {">>"}
          </Link>

          <div className="flex flex-wrap justify-start items-center gap-4">
            <span className="bg-bg1 text-center text-sm flex-2/4 md:flex-auto px-2 py-1 rounded-4xl font-extralight text-gray-300">
              Web Developer
            </span>

            <span className="flex flex-1/4 gap-2 items-center md:flex-auto">
              <span>{t("text")}</span>
              <span className="text-gray-400">Mani</span>
            </span>

            <span className="flex flex-1/4 md:flex-auto gap-2 items-center">
              <span>{t("date")}</span>
              <span className="text-gray-400">10 Oct.2023</span>
            </span>
          </div>
        </div>
      </div> */}

      <div className="px-2 py-5 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard
            title="نکات استفاده از شمع در دکوراسیون"
            excerpt="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام"
            image="/images/blog-image.png"
            date="8 مرداد 1403"
            readTime="5 دقیقه"
            href="/blog/candle-tips"
          />

          <BlogCard
            title="چگونه فضای آرامش‌بخش ایجاد کنیم؟"
            excerpt="با چند نکته ساده، می‌توانید خانه‌ای پر از حس راحتی بسازید..."
            image="/images/blog-image.png"
            date="5 مرداد 1403"
            readTime="6 دقیقه"
            href="/blog/calm-home"
            className="hidden md:flex"
          />

          <BlogCard
            title="ترندهای دکوراسیون 2025"
            excerpt="نگاهی به جدیدترین ترندها در طراحی داخلی خانه و چیدمان وسایل..."
            image="/images/blog-image.png"
            date="1 مرداد 1403"
            readTime="4 دقیقه"
            href="/blog/interior-trends"
            className="hidden md:flex"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-10">
        <FadeDownOnScroll offset={-100}>
          <Button type="button" color="blue">
            View More
          </Button>
        </FadeDownOnScroll>

        <FadeDownOnScroll offset={-100}>
          <Button type="button" color="dark">
            Subscribe
          </Button>
        </FadeDownOnScroll>
      </div>
    </FadeUpOnScroll>
  );
};

export default Blogs;
