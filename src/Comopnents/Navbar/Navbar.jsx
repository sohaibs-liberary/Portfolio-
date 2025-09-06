import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const handleManuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const mainmenu = [
    { id: "about", Lable: "About", link: "/about" },
    { id: "skills", Lable: "Skills", link: "/skills" },
    { id: "experience", Lable: "Experience", link: "/experience" },
    { id: "projects", Lable: "Projects", link: "/projects" },
    { id: "education", Lable: "Education", link: "/education" },
  ];

  return (
    <>
      <div className="bg-gray-900">
        <div
          className={`Navbar flex justify-around p-10 bg-gray-900  fixed top-0 w-full z-50 transistion duration-300  ${
            isScrolled
              ? "bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-md"
              : ""  // ya ha sa bg-transparent abhi ma na hatia haa bad ma aghr zarooat hoi to lagio gaaa
              

          }`}
        >
          {/* Logo */}
          <div className="logo">
            <a href="">
              <span className="text-xl font-semibold text-purple-800">
                &lt;
              </span>
              <span className="text-xl font-semibold text-white">Sohaib</span>
              <span className="text-xl font-semibold text-purple-800">/</span>
              <span className="text-xl font-semibold text-white">Shakeel</span>
              <span className="text-xl font-semibold text-purple-800">
                &gt;
              </span>
            </a>
          </div>

          {/* Menu */}
          <div className="menu ">
            <div className="hidden md:block lg:block">
            <ul className="flex justify-center lg:gap-9 gap-3 font-semibold">
              {
              mainmenu.map((data) => (
                <li
                  key={data.id}
                  className={`cursor-pointer  ${
                    activeSection === data.id
                      ? "text-blue-800"
                      : "text-white hover:text-purple-600"
                  }`}
                >
                  {/* 👇 Yahan sahi tarah se function call */}
                  <button onClick={() => handleManuItemClick(data.id)}>
                    {data.Lable}
                  </button>
                </li>
              ))}
            </ul>
            </div>
             {/* Mobile Menu */}
          <div className="MobleMenu">
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
          </div>
          {/* Mobile Menu List*/}
          <div className="Moblie Menu block lg:hidden">
            {isOpen && (
              <div className="absolute top-16 left-1/2  transform -translate-x-1/2 w-4/5 bg-slate-900 bg-opacity-50 backdrop-filter backdrop-blur-lg  z-50 rounded-lg shadow-lg ">
                <ul className="flex flex-col gap-6 items-center  space-y py-2 text-gray-600" >
                 {
                  mainmenu.map((data)=>(
                    <li key={data.id} className={`cursor-pointer hover:text-white ${
                      activeSection === data.id ?"text-purple-600":""
                    }`} >
                      <button  onClick={()=> handleManuItemClick(data.id)} className="text-white " >
                        {data.Lable}
                      </button>

                    </li>
                  ))
                 }
                 <div className="socialmediaiocns lg:hidden md:hidden sm:block  ">
              <div className="flex justify-center gap-7   text-white text-3xl">
              <a href="https://www.linkedin.com/feed">
                {" "}
                <FaLinkedin className="hover:text-purple-600" />
              </a>


              <a href="https://github.com/sohaibs-liberary">
                {" "}

                <FaGithub className="hover:text-purple-600" />

              </a>
            </div>
            </div>
                </ul>


              </div>
            )}
            
          </div>
          </div>

          {/* Social Icons */}
          <div className="social-media-links hidden md:block lg:block  ">
            <div className="flex justify-center gap-7 text-white text-3xl">
              <a href="https://www.linkedin.com/feed">
                {" "}
                <FaLinkedin className="hover:text-purple-600" />
              </a>

              <a href="https://github.com/sohaibs-liberary">
                {" "}
                <FaGithub className="hover:text-purple-600" />
              </a>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Navbar;