import React from "react";

export default function Projects() {
  const project = [
    {
      title: "E-Commerce Website",
      desc: "A responsive e-commerce UI built using React with product listing and category filtering.",
      tech: "React, JavaScript, Tailwind CSS",
      live: "https://you-me-shopping-online.netlify.app/",
      Github: "https://github.com/premkumar9803/You-Me-Shopping-Online",
    },
    {
      title: "Taxi Booking Website",
      desc: "A taxi booking landing page built with clean UI and responsive design.",
      tech: "HTML, CSS, JavaScript",
      live: "https://you-me-taxi-booking-online.netlify.app/",
      Github: "https://github.com/premkumar9803/You_Me_Taxi_Cab_Booking_Online",
    },
    {
      title: "Online-Food Website",
      desc: "A responsive Food Online Website frontend project built using HTML, CSS, JavaScript, Tailwind CSS, and basic React concepts.",
      tech: "React, Tailwind CSS",
      live: "https://you-me-online-food.netlify.app/",
      Github: "https://github.com/premkumar9803/You_Me_Food_Online"
    },
  ];

  return (

    <section id="Projects">

      <div className=" px-6 py-10 bg-[#1F232D] md:py-14 ">

        <h2 className=" text-4xl text-white font-medium text-center md:pl-96">
          Our <span className=" text-[#0ef]">Projects</span>
        </h2>

        <div className=" grid gap-6 mt-7 md:grid-cols-3 ">
          {project.map ((project, index) => (
            <div
            key={index}
            className=" rounded-2xl bg-[#313743] p-6 border-2 border-transparent hover:border-[#0ef] 
             hover:shadow-[0_0_1rem_#0ef] transition hover:scale-105 duration-300 ease-in cursor-pointer
             shadow-[0_8px_25px_rgba(0,0,0,0.45)]"
            >
              {/* TITLE */}
              <h4 className=" text-2xl font-bold text-white">
                {project.title}
              </h4>
              {/* DESC */}
              <p className=" mt-2 opacity-70 text-white">
                {project.desc}
              </p>
              {/* TECH */}
              <p className=" mt-1.5 text-sm  text-white"> 
                Tech : {project.tech}
              </p>
              {/* BUTTONS */}
              <div className=" mt-4 flex items-center gap-5">
                <a href={project.live}
                target="_blank"
                className=" bg-[#0ef] px-4 py-1.5 rounded-full hover:shadow-[0_0_1rem_#0ef]
                 hover:text-[#323946] transition hover:duration-300 ease-in"
                >
                  Live
                </a>
                <div>
                  <a href={project.Github}
                  className=" bg-slate-700 px-4 py-2 rounded-full text-white hover:bg-slate-800"
                  >
                    Github
                  </a>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>

    </section>
      
      


  );
}
