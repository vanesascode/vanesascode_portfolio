"use client"

import DataContext from "../_context/DataContext";
import animations from "../animations.module.css";

import { useContext, useState, useEffect } from "react";

export default function LightMode() {
  // CONTEXT: 

  const { showMenu, setShowMenu, lightMode, setLightMode } = useContext(DataContext);

  // LIGHT MODE CONFIGURATION: 

  const handleChangeLightMode = () => {
    setLightMode(prevTheme => (prevTheme === "light" ? "dark" : "light"))
  };



  return (
    <>
      <button onClick={handleChangeLightMode} > <img src={lightMode === "light" ? "/sun-white.svg" : "/sun-black.svg"} alt="logo" className={`h-[50px] ${animations.rotateWhenHovered} cursor-crosshair `} /></button> {/* I AM TRYING TO HAVE ANIMATION WHEN UNMOUNTING, JUST USING CSS --- ${showMenu ? 'logo-enter' : 'logo-exit'}*/}
    </>
  )
}
