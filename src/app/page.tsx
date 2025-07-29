import Sidebar from "@/components/features/sidebar/Sidebar";
import SectionHero from "@/components/layouts/sectionHero/SectionHero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <span className="hidden lg:flex">
        <Sidebar />
      </span>
      <SectionHero />
    </div>
  );
}
