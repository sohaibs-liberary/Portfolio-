import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Myimg from "/src/assets/WhatsApp Image 2025-09-03 at 12.56.13 AM.jpeg"

const About = () => {
  return (
    <div className="About">
      <div className="bg-gray-900">
        <div className="text-and-image flex justify-center gap-32 py-14 ">
          <div className="text py-16 max-w-[660px] ">
            <div className="name">
              <h1 className="text-7xl font-extrabold text-white">Hi, I am</h1>
              <h1 className="text-7xl py-4 font-extrabold text-white">
                Sohaib Shakeel
              </h1>
            </div>

            <div className="changeskills flex gap-2 text-white text-xl">
              <div className="text text-4xl py-1 font-bold text-white">I am a</div>
              <div className="effact text-4xl py-1  font-bold text-purple-600 ">
                <Typewriter 
                  words={[
                    "Web Developer",
                    "React Developer",
                    "Frontend Designer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                    />
              </div>
            </div>
            <div className="abountme py-5">
              <h1 className="text-wrap text-white text-xl" >I am a Frontend developer with over 4 months of experience in building scalable web applications. Skilled in  front-end and, I specialize in the React.js and other modern technologies to create seamless user experiences and efficient solutions .</h1>
              </div>
          </div>

          <div className="image">
            <div className="">
              <img src={Myimg} alt="" className="rounded-full w-[600px] h-[610px]" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
