import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Myimg from "/src/assets/sohaibDP.jpeg";
import CV from "/src/assets/Black Modern Professional Resume (1).pdf";

const About = () => {
  return (
    <div className="About  " id="about">

     

      <div className="bg-slate-950 p-14">
        {/* Mobile photo */}
         <div className="image block lg:hidden">
            <div className="">
              <img
                src={Myimg}
                alt=""
                className="rounded-full lg:w-[500px] lg:h-[500px] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]  animate-float"
              />
            </div>
          </div>

        <div className="text-and-image lg:flex justify-center gap-32 py-14 ">
          <div className="text py-16 max-w-[660px] ">
            <div className="name">
              <h1 className="lg:text-7xl text-4xl font-extrabold text-white">
                Hi, I am
              </h1>
              <h1 className="lg:text-7xl text-4xl py-4 font-extrabold text-white">
                Sohaib Shakeel
              </h1>
            </div>

            <div className="changeskills flex gap-2 text-white text-xl">
              <div className="text lg:text-4xl text-2xl py-1 font-bold text-white">
                I am a
              </div>
              <div className="effact lg:text-4xl text-2xl py-1  font-bold text-purple-600 ">
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
                  delaySpeed={2400}
                />
              </div>
            </div>
            <div className="abountme py-5">
              <h1 className="text-wrap text-gray-500 text-xl">
                I am a Frontend developer with over 4 months of experience in
                building scalable web applications. Skilled in front-end and, I
                specialize in the React.js and other modern technologies to
                create seamless user experiences and efficient solutions .
              </h1>
            </div>
            <div className="btn  ">
              <a href={CV}>
                
              <button className=" bg-gradient-to-r from-purple-950 to-purple-900  drop-shadow-[1px_8px_8px_rgba(130,69,236,0.5)] shadow-lg shadow-purple-500/10 text-white font-semibold text-2xl py-3 px-8 rounded-full hover:translate-y-2 transform transition duration-300"

               >DOWNLOAD CV</button>
              </a>
            </div>
          </div>

          <div className="image hidden lg:block ">
            <div className="">
              <img
                src={Myimg}
                alt=""
                className="rounded-full lg:w-[500px] lg:h-[500px] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
