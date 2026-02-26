import React from "react";
import github from '../assets/Image/github (1).png'
import linkedin from '../assets/Image/linkedin (1).png'

export default function Contact() {
  return (
    <>

      <section id="Contact">

        <div className=" py-5 px-5 bg-[#323946]">
          
          <h2 className=" text-4xl font-medium text-center md:ml-96">
            Contact <span className=" text-[#0ef]">Me!</span>
          </h2>
        
          <div className=" mt-2 md:ml-96 md:mt-5 md:text-lg text-white opacity-85">
            <div className=" flex items-center gap-1.5">
              <i className="fa-solid fa-envelope text-yellow-500"></i>
              <a href="">premsiddhu26@gmail.com</a>
            </div>
            <div className=" flex items-center gap-1.5">
              <i className="fa-solid fa-phone-volume fa-beat-fade  text-green-500"></i>
              <a href="">63836 00768</a>
            </div>
            <div className=" flex items-center gap-1.5">
              <i className="fa-solid fa-location-dot text-red-500"></i>
              <a href="">Madurai</a>
            </div>
          </div>

          <hr className=" mt-5 opacity-45" />
          <div className=" flex items-center md:justify-between"> 
            <p className=" mt-3 opacity-65 text-xs text-white md:ml-120 md:text-sm">
              Copyright ©2026 by Prem Kumar | All Rights Reserved.</p>
            <div className="">
              <a href="#Home"><i className="fa-solid fa-arrow-up text-sm mt-4 bg-[#0ef] text-[#323946] 
              rounded-md p-2 px-3 pr-5 hover:shadow-[0_0_1rem_#0ef] transition ease-in hover:scale-105 md:mr-8">
            </i></a>
            </div>
          </div>  
        </div>

      </section>

    </>
  );
}
