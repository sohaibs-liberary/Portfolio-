import React from 'react'
import Projectone from "/src/assets/Opera Snapshot_2025-09-09_113646_for-form.vercel.app.png"
import Projecttwo from "/src/assets/Opera Snapshot_2025-09-09_114659_weather-app-neon-nu-37.vercel.app.png"
import Projectthree from "/src/assets/Opera Snapshot_2025-09-09_125317_gain-tau.vercel.app.png"
import Projectfour from "/src/assets/Opera Snapshot_2025-09-09_114448_clock.html.png"

const Projects = () => {
    const projects =[
         {
            card:1,
            img:Projectone,
            title:"Ecommeence Website",
            detail:"I built a modern and responsive fashion eCommerce frontend using ReactJS and Tailwind CSS.  ",
        },
        {
            card:2,
            img:Projecttwo,
            title:"Weather Check",
            detail:"A responsive weather app built using React.js, designed to fetch and display real-time weather data for any city using an API.",
        },
        {
            card:3,
            img:Projectthree,
            title:"Job Posting Page",
            detail:"GAIN+ is a modern web platform built for freelancers and companies to connect, collaborate, and work on projects. Inspired by leading platforms like Fiverr and Upwork, this project showcases a clean UI, strong layout design, and user-friendly components.",
        },{
            card:4,
            img:Projectfour,
            title:"Digital Watch",
            detail:"A sleek digital clock built with JavaScript, featuring dynamic time updates and a modern UI design.",
        },
    ];
  return (
    <>
    <div className="Pojects">
        <div className="textandcards bg-slate-950 ">
            <div className="text">
                <div className="text">
            <div className="grid justify-center gap-4">
                <h1 className='text-4xl text-white font-extrabold font-sans ' >PROJECTS
                <p className="w-72 md:w-20 h-[4px] px-20 my-3 bg-purple-800"></p>

                </h1>
            </div>
            <div className="paragraph">
                <h1 className='text-gray-600 font-bold text-xl text-center' >A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</h1>
            </div>
        </div>

            </div>
            <div className="Projectscards">
                <div className="projects py-6 overflow-hidden object-cover ">
                    <ul  className='grid lg:grid-cols-3 md:grid-cols-2  lg:px-60 gap-4 ' >
                        {
                            projects.map((cards,index)=>(
                                <div className="cardsdetails hover:translate-y-[-8px] hover:duration-200 hover:ease-4s hover:shadow-[0_10px_20px_rgba(130,69,236,0.5)]  max-w-[400px] max-h-[600px] border-white border-[1px] rounded-lg py-10  " key={index}>
                                    <li className='cursor-pointer ' >
                                        <img src={cards.img} alt="project image" className='lg:max-w-[380px] lg:min-h-[auto] p-10 rounded-lg  ' />
                                        <h1 className='text-white font-bold text-3xl  px-10'  >{cards.title}</h1>
                                        <p className='text-gray-500 font-semibold px-10 py-4' >{cards.detail}</p>
                                    </li>
                                </div>
                            ))
                        }
                    </ul>



                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Projects