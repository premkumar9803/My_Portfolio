import React from "react";
import frame from '../assets/Image/My-photo.png'
import './Hero.css'

export default function Hero() {
  return (
    
    <section id="Home">        
      
      <div className=" bg-[#1f242d] px-5 py-8 md:py-2 leading-8">
        
        <div className=" md:mt-20">
          <h2 className=" text-center md:relative">
            Hi, I'm <span className="  text-[#0ef]">PREM KUMAR R</span>
          </h2>

          {/* MY-IMAGE */}
          <div className=" home-image">
            <div className=" image-content">
                 <img src={frame} alt="" className="" /> 
            </div>
          </div>

          <div className="text-center text-white md:leading-14 mt-5 md:mt-3 front">
            <p className=" font-medium md:text-xl">Front-End Developer Skilled in</p>
            <span className=" font-medium text-sm opacity-65 md:text-xl">HTML, CSS, JavaScript, React and Tailwind CSS</span>
            <p className=" font-medium text-sm opacity-65 md:text-lg">I build responsive and user-friendly websites.</p> 
          </div>

          {/* ICONS */}
          <div className=" text-[#0ef] flex gap-3 px-4 mt-3.5 text-xs md:px-66 md:py-6 md:text-base icon ">
            {/* Github */}
            <a href="https://github.com/premkumar9803" className="home-icon">
            <i className="fa-brands fa-github "></i>
            <span className=" home-icons">
              Github
            </span>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/prem-kumar-r-63a50b194/" className="home-icon">
            <i className="fa-brands fa-linkedin-in"></i>
            <span className="home-icons">
              LinkedIn
            </span>
            </a>
            {/* Gmail */}
            <a href="" className="home-icon">
            <i className="fa-solid fa-at"></i>
            <span className="home-icons">
              Gmail
            </span>
            </a>
          </div> 
        </div>
      
      </div>

    </section> 
      
  );
}
 