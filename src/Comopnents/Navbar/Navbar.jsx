import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detect karo
      const sections = document.querySelectorAll("section, div[id]");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const mainmenu = [
    { id: "about", Lable: "About" },
    { id: "skills", Lable: "Skills" },
    { id: "projects", Lable: "Projects" },
    { id: "contact", Lable: "Contact" },
  ];

  return (
    <div className="bg-slate-950">
      <div
        className={`Navbar bg-slate-950  flex justify-around p-6 fixed top-0 w-full z-50 transition duration-300 ${
          isScrolled
            ? "bg-slate-950 bg-opacity-50 backdrop-blur-md shadow-md"
            : ""
        }`}
      >
        {/* Logo */}
        <div className="logo">
          <a href="#home">
            <span className="text-xl font-semibold text-purple-800">&lt;</span>
            <span className="text-xl font-semibold text-white">Sohaib</span>
            <span className="text-xl font-semibold text-purple-800">/</span>
            <span className="text-xl font-semibold text-white">Shakeel</span>
            <span className="text-xl font-semibold text-purple-800">&gt;</span>
          </a>
        </div>

        {/* Menu */}
        <div className="menu">
          {/* Desktop */}
          <div className="hidden md:block lg:block">
            <ul className="flex justify-center lg:gap-9 gap-3 font-semibold">
              {mainmenu.map((data) => (
                <li
                  key={data.id}
                  className={`cursor-pointer ${
                    activeSection === data.id
                      ? "text-purple-600"
                      : "text-white hover:text-purple-400"
                  }`}
                >
                  <button onClick={() => handleMenuItemClick(data.id)}>
                    {data.Lable}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <RxCross2
                className="text-3xl text-purple-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <CiMenuFries
                className="text-3xl text-purple-600 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>

          {/* Mobile Menu List */}
          {isOpen && (
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-slate-900 bg-opacity-80 backdrop-blur-lg z-50 rounded-lg shadow-lg">
              <ul className="flex flex-col gap-6 items-center py-6">
                {mainmenu.map((data) => (
                  <li
                    key={data.id}
                    className={`cursor-pointer ${
                      activeSection === data.id
                        ? "text-purple-600"
                        : "text-white hover:text-purple-400"
                    }`}
                  >
                    <button onClick={() => handleMenuItemClick(data.id)}>
                      {data.Lable}
                    </button>
                  </li>
                ))}
                <div className="flex justify-center gap-7 text-white text-3xl">
                  <a href="https://www.linkedin.com/feed">
                    <FaLinkedin className="hover:text-purple-600" />
                  </a>
                  <a href="https://github.com/sohaibs-liberary">
                    <FaGithub className="hover:text-purple-600" />
                  </a>
                </div>
              </ul>
            </div>
          )}
        </div>

        {/* Social Icons Desktop */}
        <div className="hidden md:block lg:block">
          <div className="flex justify-center gap-7 text-white text-3xl">
            <a href="https://www.linkedin.com/feed">
              <FaLinkedin className="hover:text-purple-600" />
            </a>
            <a href="https://github.com/sohaibs-liberary">
              <FaGithub className="hover:text-purple-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
