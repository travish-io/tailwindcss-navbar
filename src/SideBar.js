import { FaHtml5, FaJsSquare, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const SideBar = () => {
  return (
    <div class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<SiTailwindcss size="28" />} />
      <SideBarIcon icon={<FaHtml5 size="28" />} />
      <SideBarIcon icon={<FaCss3Alt size="28" />} />
      <SideBarIcon icon={<FaJsSquare size="28" />} />
      <SideBarIcon icon={<FaPython size="28" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div class="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
export default SideBar;
