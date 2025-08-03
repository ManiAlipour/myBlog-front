import Blogs from "@layouts/home/blogs/Blogs";
import Sidebar from "@features/sidebar/Sidebar";
import About from "@layouts/home/about/About";
import SectionHero from "@layouts/home/sectionHero/SectionHero";
import Skills from "@layouts/home/skills/Skills";

export default function Home() {
  return (
    <div>
      <span className="hidden lg:flex">
        <Sidebar />
      </span>
      <SectionHero />
      <About />
      <Skills />
      <Blogs />
    </div>
  );
}
