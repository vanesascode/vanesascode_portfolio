import React from 'react'

import DataContext from "../_context/DataContext";


import { useContext, useState, useEffect } from "react";

export default function LightMode() {
  // CONTEXT: 

  const { showMenu, setShowMenu, setLightMode } = useContext(DataContext);

  // LIGHT MODE CONFIGURATION: 

  const handleChangeLightMode = () => {
    setLightMode(prevTheme => (prevTheme === "light" ? "dark" : "light"))
  };



  return (
    <>
      <button onClick={handleChangeLightMode} > <img src="/sun.svg" alt="logo" className={`h-[40px] `} /></button> {/* I AM TRYING TO HAVE ANIMATION WHEN UNMOUNTING, JUST USING CSS --- ${showMenu ? 'logo-enter' : 'logo-exit'}*/}
    </>
  )
}
