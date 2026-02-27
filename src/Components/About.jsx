import React from "react";
import image from '../assets/Image/undraw_profile_d7qw.png'
import resume from '../assets/Image/Prem_Resume.pdf'
import './About.css'

export default function About() {
  const skill = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Tailwind CSS",
    "Responsive Design",
  ];

  return (
    <>

    <section id="About">
      
      <div className=" bg-[#323946] py-7 md:py-16">
        
        <h5 className="text-center text-white font-medium md:mr-96 text-4xl">
          About <span className=" text-[#0ef]">Me</span> 
        </h5>
        
        <div className=" px-5 md:grid grid-cols-2 ">
          <div className="  mt-5 text-white md:mt-20 md:ml-36 indent-12 text-justify md:text-lg">
            <p>
              I’m a Front-End Developer passionate about building modern and responsive
              websites. I enjoy creating clean UI designs and converting them into
              real web applications using React.
            </p>
            <p className=" mt-2.5">
              I’m looking for a Frontend Developer opportunity where I can improve my
              skills, work on real projects, and contribute to a growing team.
            </p>
            <div className="resume mt-5">
              <a href={resume}className=" relative">
                Resume
              </a>
              {/* <i className="fa-solid fa-arrow-down"></i>   */}
            </div>
          </div>
          <img src={image} alt="" className=" mt-7 md:mt-0" />
        </div>
      
      </div>

    </section>

  </>

  );
}
