"use client"

import DataContext from "../_context/DataContext";
import animations from "../animations.module.css";

import { useContext } from "react";

export default function LightMode() {
  // CONTEXT: 

  const { leaveAnimation, lightMode, setLightMode } = useContext(DataContext);

  // LIGHT MODE CONFIGURATION: 

  const handleChangeLightMode = () => {
    setLightMode(prevTheme => (prevTheme === "light" ? "dark" : "light"))
  };



  return (
    <>
      <div className={` ${animations.goUpMenu}`}>
        <button onClick={handleChangeLightMode} > <img src={lightMode === "light" ? "/sun-white.svg" : "/sun-black.svg"} alt="logo" className={`h-[55px]  cursor-crosshair ${leaveAnimation ? animations.leavePageUp : ""} ${animations.rotateWhenHovered} `} /></button>
      </div>
    </>
  )
}
