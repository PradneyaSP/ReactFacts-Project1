import React from "react";
import logo from "../assets/images/react-icon-small.png"

export default function Navbar({darkMode , toggleMode}) {
  const navColor = darkMode ? "bg-[#21222A]" : "bg-white";
  const headingColor = darkMode ? "text-react-heading-dark" : "text-react-heading-light";
  const sliderColor = darkMode ? "bg-white" : "bg-react-toggle-dark";
  const circleColor = darkMode ? "bg-react-toggle-dark" : "bg-white";
  const toggleLightColor  = darkMode ? "text-gray-500" : "text-react-toggle-dark";
  const toggleDarkColor  = darkMode ? "text-white" : "text-react-toggle-light";
  const circlePosition = darkMode ? "justify-end" : "justify-start";
  return (
    <nav id="nav" className={`${navColor} flex justify-between h-[15vh] w-[100%] px-6 items-center shadow-md`}>
      <div className="react-logo flex justify-around items-center w-52">
        <img src={logo} alt="react-logo" className="h-14"/>
        <h3 className={`text-2xl ${headingColor} font-bold font-inter`}>ReactFacts</h3>
      </div>
      <div id="toggle" className="flex space-x-2 font-poppins ">
        <p className={`${toggleLightColor} font-semibold`}>Light</p> 
        <div id="toggle--slider" className={`${sliderColor} w-12 h-6 rounded-full flex items-center px-0.5 ${circlePosition}`} onClick={toggleMode}>
          <div id="toggle--circle" className={`w-5 h-5 ${circleColor} rounded-full`} ></div>
        </div>
        <p className= {`${toggleDarkColor} font-semibold`}>Dark</p>
      </div>
    </nav>
  );
}
