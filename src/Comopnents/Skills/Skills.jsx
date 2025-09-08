import React from 'react'


const Skills = () => {


    const Frontend =[

        {
            id:1,
            img:  "https://tarunkaushik.vercel.app/assets/html-CfI0Cw-d.png",
            name:"HTML",

        },{
            id:1,
            img:  "https://tarunkaushik.vercel.app/assets/css-BDv6rEn7.png",
            name:"CSS",

        },{
            id:1,
            img: "https://tarunkaushik.vercel.app/assets/javascript-Bh7ioiOO.png",
            name:"JAVASCRIPT",

        },{
            id:1,
            img:  "https://tarunkaushik.vercel.app/assets/reactjs-LYxsbuPE.png",
            name:"REACT",

        },
        {
            id:1,
            img:  "https://tarunkaushik.vercel.app/assets/tailwindcss-CCkYV0vR.png",
            name:"TAILWINCSS",

        },

    ];


    const Skills =[
        {
            id:1,
            img:  "https://tarunkaushik.vercel.app/assets/git-BClPRNCD.png",
            name:"Git ",

        },{
            id:1,
            img:  "https://tarunkaushik.vercel.app/assets/github-DabB8wTb.png",
            name:"GitHub",

        },{
            id:1,
            img: "https://tarunkaushik.vercel.app/assets/vscode-DI9n3a0r.png",
            name:"VS Code",

        },{
            id:1,
            img:  "https://tarunkaushik.vercel.app/assets/vercel-B3cpfMqI.png",
            name:"Versal",

        },
        // {
        //     id:1,
        //     img:  "https://tarunkaushik.vercel.app/assets/tailwindcss-CCkYV0vR.png",
        //     name:"TAILWINCSS",

        // },
    ];

  return (
   <>
   <div className="Skills">
    <div className="textandskills bg-gray-900 p-5">
        <div className="text">
            <div className="grid justify-center gap-4">
                <h1 className='text-4xl text-white font-extrabold font-sans ' >SKILLS
                <p className="w-40 md:w-20 h-[4px] px-14 my-3 bg-purple-800"></p>

                </h1>
            </div>
            <div className="paragraph">
                <h1 className='text-gray-600 font-bold text-xl text-center' >A collection of my technical skills and expertise honed through various projects and experiences</h1>
            </div>
        </div>
        <div className="skill ">
            <div className="skills  lg:flex  justify-center md:mx-20 gap-5 py-8">

                {/* FONTEND */}
                <div className="skills lg:flex  justify-center md:mx-20 gap-5 py-8">

                
                <div className="first shadow-[0_10px_20px_rgba(130,69,236,0.5)]  max-w-[590px] max-h-[600px] border-white border-[1px] rounded-lg py-10 px-20">
                   <h1 className='text-4xl text-white font-extrabold font-sans text-center' >Frontend</h1>
                  
                   <ul className="grid lg:grid-cols-3 sm:grid-cols-2  md:grip-cols-2 lg:gap-8  gap-5 my-8  " >

                    {
                        Frontend.map((data,index)=>(
                            <li key={index} >

                            <div className="flex justify-center  lg:min-w-32  sm:w-36 max-h-9 p-1 rounded-full border-gray-600 border-[1px] ">
                            <img src={data.img} alt="language img"  className='text-white max-w-[40px] max-h-[30px]  ' />
                            <h1 className='  text-gray-400' >{data.name}</h1>
                         </div>   
                            </li>
                        ))
                    }
                   
                    </ul>

                </div>
                {/* TOOLS */}
                 <div className="first max-w-[590px] max-h-[690px] border-white border-[1px] lg:my-0 my-16  shadow-[0_10px_20px_rgba(130,69,236,0.5)] rounded-lg py-10 px-20">
                   <h1 className='text-4xl text-white font-extrabold font-sans text-center' >Skills</h1>
                  
                   <ul className="grid lg:grid-cols-3 sm:grid-cols-2  md:grip-cols-2 lg:gap-8 gap-5 my-8  " >

                    {
                        Skills.map((data,index)=>(
                            <li key={index} >

                            <div className="flex justify-center gap-2 min-w-32  max-h-9 p-1 rounded-full border-gray-600 border-[1px] ">
                            <img src={data.img} alt="language img"  className='text-white max-w-[30px] max-h-[30px]  ' />
                            <h1 className='  text-gray-400' >{data.name}</h1>
                         </div>   
                            </li>
                        ))
                    }
                   
                    </ul>

                </div>
                </div>
            </div>


        </div>
    </div>
   </div>
   </>
  )
}

export default Skills