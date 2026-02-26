import React, { useEffect, useRef, useState } from "react";
import './Navigation.css'
import bird from '../assets/Image/gull-bird-flying-shape.png'

export default function Navigation () {
  const [open, setOpen] = useState(false);

  // navbar ref (outside click detect panna)
  const navBox = useRef(null);

  // Outside click close
  useEffect (() => {
    function closeMenu(e) {
      // menu open illa na return
      if(!open) return;

      // navbar ku veliya click panna close
      if(navBox.current && !navBox.current.contains(e.target)){
        setOpen(false);
      }
    }

    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [open]);

  // Link click close
  const handleLinkClick =() => {
    setOpen(false);
  };
  
  
  return (
    <>
    <div ref={navBox} className=" sticky top-0 z-50">
      <div className=" py-5 md:flex justify-between items-center bg-[#1f242d]">
        
        {/* LOGO + TOGGLE */}
        <div className=" flex justify-between">
          <div className=" flex items-center">
            <img src={bird} alt="" className=" w-8 md:w-12 md:mb-2.5" />
            <h1 className=" px-1 mt-3 text-3xl text-white">
              PORT<span className=" text-[#0ef]">FOLIO</span>
            </h1>
          </div>

          {/* TOGGLE BUTTON */}
          <button
          onClick={() => setOpen(!open)}
          className=" md:hidden flex items-center mt-2 mr-5 text-xl text-[#0ef] border-2 border-[#0ef] rounded-lg px-1 py-1
           cursor-pointer hover:bg-[#0ef] hover:text-[#323946] hover:scale-105 duration-300 transition-all"
          >
            {open ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars" ></i>
            )}
          </button>
        </div>
      
        {/* DESKTOP MENU */}
        <nav className=" hidden md:flex gap-8 text-xl text-white mr-8">
          <a href="#Home" className=" bg-[#0ef] text-[#1F232D] px-3.5 py-1 rounded-full">
            Home
          </a>
          <a href="#About" className=" px-3.5 py-1 rounded-full hover:bg-[#0ef] hover:text-[#1F232D] duration-300">
            About
          </a>
          <a href="#Skills" className=" px-3.5 py-1 rounded-full hover:bg-[#0ef] hover:text-[#1F232D] duration-300">
            Skills
          </a>
          <a href="#Projects" className=" px-3.5 py-1 rounded-full hover:bg-[#0ef] hover:text-[#1F232D] duration-300">
            Projects
          </a>
          <a href="#Contact" className=" px-3.5 py-1 rounded-full hover:bg-[#0ef] hover:text-[#1F232D] duration-300">
            Contact
          </a>
        </nav>

      </div>
      {/* MOBILE MENU */}
      { open && (
        <div>
          <nav className=" md:hidden flex flex-col items-center gap-4 py-4 shadow-xl/20
           bg-[#323946] text-[white]">
            <a href="#Home" onClick={handleLinkClick} className=" text-[#0ef]">Home</a>
            <a href="#About" onClick={handleLinkClick} className=" hover:text-[#0ef]">About</a>
            <a href="#Skills" onClick={handleLinkClick} className=" hover:text-[#0ef]">Skills</a>
            <a href="#Projects" onClick={handleLinkClick} className=" hover:text-[#0ef]">Projects</a>
            <a href="#Contact" onClick={handleLinkClick} className=" hover:text-[#0ef]">Contact</a>
          </nav>
        </div>
      )}

    </div>
    </>
  )
}

