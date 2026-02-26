import React from "react";
import './Skills.css';

export default function Skills() {
  const skill = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Tailwind CSS",
    "Responsive Design",
  ];

  return (
    
    <section id="Skills">

      <div className=" bg-[#323946] py-7">

        <h5 className="skills text-4xl text-white font-medium text-center">
          Skill<span className=" text-[#0ef]">s</span>
        </h5>
     
        <div className="skill grid grid-cols-2 gap-4 mt-7 px-4 md:grid-cols-3 md:py-5 text-lg font-medium">
          {skill.map ((skill, index) =>
          <div
          key={index}
          className=" rounded-4xl text-center text-[#323946] py-2.5 md:py-4 bg-[#0ef]
            transition hover:shadow-[0_0_1rem_#0ef] duration-300 hover:scale-105 cursor-pointer"
          >
            {skill}
          </div>)}
        </div>

      </div>

    </section>
    
 );
}











      {/* <div className=" px-6 mt-10 md:px-28 md:mt-16 md:mr-96">
        <h3 className=" text-3xl text-indigo-800 font-bold opacity-70">
          Skills
        </h3>

        <div className=" grid grid-cols-2 gap-3 mt-7 md:grid-cols-3">
          {skill.map ((skill, index) => (
            <div
            key={index}
            className=" rounded-xl py-3.5 text-center bg-slate-500 text-white
             hover:bg-slate-600 transition cursor-pointer md:py-5 md:text-xl"
            >
              {skill}
            </div>
          ))}
        </div>
      </div> */}
    
    
 
