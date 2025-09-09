import React from 'react'

const Contact = () => {
  return (
   <>
   <div className="contact">
    <div className="textandcontact bg-slate-950 py-20 ">
      <div className="text">
        <div className="text">
                <div className="text">
            <div className="grid justify-center gap-4">
                <h1 className='text-4xl text-white font-extrabold font-sans ' >CONTACTS US
                <p className="w-72 md:w-20 h-[4px] px-20 my-3 bg-purple-800"></p>

                </h1>
            </div>
            <div className="paragraph">
                <h1 className='text-gray-600 font-bold text-xl text-center' >A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</h1>
            </div>
        </div>

            </div>
      </div>
      <div className="contact">
        <div className="from flex justify-center py-10 ">
          <div className="bg-gray-900  min-w-[500px] min-h-[600px] ">
            <div className="">

            <input type="email" placeholder='Enter Your Email' name="Enter Your Email" id="" className='py-3 px-12 bg-gray-800  ' />
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Contact