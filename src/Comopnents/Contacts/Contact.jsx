import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact" >
        <div className="textandcontact bg-slate-950 py-20 ">
          <div className="text">
            <div className="text">
              <div className="text">
                <div className="grid justify-center gap-4">
                  <h1 className="text-4xl text-white font-extrabold font-sans ">
                    CONTACTS US
                    <p className="w-72 md:w-20 h-[4px] px-28 my-3 bg-purple-800"></p>
                  </h1>
                </div>
                <div className="paragraph">
                  <h1 className="text-gray-600 font-bold text-xl text-center">
                    A showcase of the projects I have worked on, highlighting my
                    skills and experience in various technologies
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="from flex justify-center py-10 ">
              <div className="bg-gray-900 rounded-2xl  lg:min-w-[500px] lg:min-h-[600px] ">
                <div className="py-6">
                  <div className="text grid grid-cols-1 justify-center">
                    <h1 className="text-3xl text-white font-extrabold font-sans text-center ">
                      Connect With Me 🚀
                    </h1>
                  </div>
                  <div className="typing grid grid-cols-1 justify-center mx-20 gap-4 text-center py-8">
                    <input
                      type="email"
                      placeholder=" Your Email"
                      name="Enter Your Email"
                      id=""
                      className="py-5 px-10 bg-gray-950 rounded-lg text-white  lg:w-[370px] w-[290px]"
                    />
                    <input
                      type="text"
                      placeholder=" Your Name"
                      name="Enter Your Email"
                      id=""
                      className="py-5 px-10 bg-gray-950 rounded-lg text-white  lg:w-[370px] w-[290px] "
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      name="Enter Your Email"
                      id=""
                      className="py-5 px-10 bg-gray-950 rounded-lg text-white  lg:w-[370px] w-[290px]"
                    />
                     <input
                      type="text"
                      placeholder="Message"
                      name="Enter Your Email"
                      id=""
                      className="py-0 px-10 bg-gray-950 rounded-lg text-white h-[120px]  lg:w-[370px] w-[290px]"
                    />

                    <button className="py-3 px-10 bg-gradient-to-r from-purple-600 to-pink-700 rounded-lg text-white font-semibold lg:w-[370px] w-[290px]" >Send</button>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
