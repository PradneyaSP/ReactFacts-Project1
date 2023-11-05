import React from "react";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="container">
      <Navbar darkMode = {darkMode} toggleMode = {() => {setDarkMode(prevMode => !prevMode)}}/>
      <MainContent darkMode = {darkMode}/>
    </div>
  );
}
