import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";






const Footer = () => {
    const mainmenu = [
    { id: "about", Lable: "About" },
    { id: "skills", Lable: "Skills" },
    { id: "projects", Lable: "Projects" },
    { id: "contact", Lable: "Contact" },
  ];
  return (
    <>
    <div className="footer ">
        <div className="grid justify-center bg-slate-950 text-center  grid-cols-1 gap-6">
        <div className="name text-2xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">Sohaib Shakeel</div>

        <div className="menu">
              <div className="hidden md:block lg:block">
            <ul className="flex justify-center lg:gap-9 gap-3 font-semibold">
              {mainmenu.map((data) => (
                <li
                  key={data.id}
                  className="text-center text-white"
                >
                  <button onClick={() => handleMenuItemClick(data.id)}>
                    {data.Lable}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sociamediaaps flex justify-center gap-6 ">
          <a href="">
          <FaFacebook  className='text-white text-2xl hover:text-purple-800 items-center ' />
          </a>
           <a href="">
          <FaTwitter  className='text-white text-2xl hover:text-purple-700 items-center ' />
          </a>
           <a href="">
          <FaLinkedin
           className='text-white text-2xl hover:text-blue-700 items-center ' />
          </a>
           <a href="">
          <FaInstagram  className='text-white text-2xl hover:text-red-700 items-center ' />
          </a>
          <a href="">
          <FaGithub  className='text-white text-2xl hover:text-gray-700  items-center ' />
          </a>
          
        </div>
        <div className="copywright">
          <h1 className='text-gray-600 text-xl' >© 2025 Sohaib Shakeel. All rights reserved.</h1>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer