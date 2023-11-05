import React from "react";
import dark from '../assets/images/react-icon-dark.png'
import light from '../assets/images/react-icon-light.png'

export default function MainContent({ darkMode }) {
  const textColor = darkMode ? "text-white" : "text-react-toggle-dark";
  const bgColor = darkMode ? "bg-[#282D35]" : "bg-white";
  const theme = darkMode ? "dark" : "light";
  const bgImage = {
    backgroundImage: `url(${darkMode ? dark : light})`
  }
  return (
    <>
      <main
        className={` w-[100%] h-[85vh] p-16 ${textColor} font-inter ${bgColor} bg-no-repeat bg-right bg-contain ${theme}`}
        style={bgImage}
      >
        <h1 className=" text-5xl font-inter font-extrabold mb-4">
          Fun facts about React
        </h1>
        <ul className="ml-14 leading-[3rem] marker:text-sky-400 list-disc pl-5 space-y-3 text-xl">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </>
  );
}
