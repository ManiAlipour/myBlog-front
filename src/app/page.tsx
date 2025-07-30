import Sidebar from "@/components/features/sidebar/Sidebar";
import About from "@/components/layouts/about/About";
import SectionHero from "@/components/layouts/sectionHero/SectionHero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <span className="hidden lg:flex">
        <Sidebar />
      </span>
      <SectionHero />
      <About />
    </div>
  );
}
