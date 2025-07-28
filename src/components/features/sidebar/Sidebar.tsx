import Tooltip from "@/components/ui/tooltip/Tooltip";
import { FaRegEdit } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoIosCode } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiApps2Line, RiComputerLine } from "react-icons/ri";

const btns = [
  {
    title: "Home",
    Icon: RiApps2Line,
    id: 1,
    href: "#",
  },
  {
    title: "About Me",
    Icon: FiUser,
    id: 2,
    href: "#about",
  },
  {
    title: "Skils",
    Icon: IoIosCode,
    id: 3,
    href: "#skils",
  },
  {
    title: "Works",
    Icon: RiComputerLine,
    id: 4,
    href: "#works",
  },
  {
    title: "Blogs",
    Icon: FaRegEdit,
    id: 5,
    href: "#blogs",
  },
  {
    title: "Contact",
    Icon: MdOutlineMailOutline,
    id: 6,
    href: "#contact",
  },
];

const Sidebar = () => {
  return (
    <div
      className="w-16 h-96 border-white text-white border-2 bg-bg2 rounded-4xl fixed flex flex-col
    justify-around items-center text-2xl
    "
    >
      {btns.map((btn) => (
        <button className="cursor-pointer" key={btn.id}>
          <Tooltip text={btn.title} position="right">
            <btn.Icon />
          </Tooltip>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
