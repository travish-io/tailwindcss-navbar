import { React } from "react";
import { FaHtml5, FaJsSquare, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const NavBar = () => {
  return (
    <div class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 shadow-lg lg:w-screen lg:h-16 lg:flex-row">
      <NavBarIcon
        icon={<SiTailwindcss size="28" />}
        text={"Tailwindcss 🌬"}
        link={"https://tailwindcss.com/docs/installation"}
      />
      <NavBarIcon
        icon={<FaHtml5 size="28" />}
        text={"HTML5 < />"}
        link={"https://devdocs.io/html/"}
      />
      <NavBarIcon
        icon={<FaCss3Alt size="28" />}
        text={"CSS3 3️⃣"}
        link={"https://www.w3schools.com/cssref/default.asp"}
      />
      <NavBarIcon
        icon={<FaJsSquare size="28" />}
        text={"JavaScript 🟨"}
        link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
      />
      <NavBarIcon
        icon={<FaPython size="28" />}
        text={"Python 🐍"}
        link={"https://developer.mozilla.org/en-US/docs/Glossary/Python"}
      />
    </div>
  );
};

const NavBarIcon = ({ icon, link, text }) => (
  <div class="navbar-icon group">
    {icon}
    <span class="navbar-tooltip group-hover:scale-100">
      <a href={link} target={"_blank"} rel="noopener noreferrer">
        {text}
      </a>
    </span>
  </div>
);
export default NavBar;
