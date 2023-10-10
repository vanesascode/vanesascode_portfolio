"use client"

import animations from "../animations.module.css";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

export default function Hamburger() {

  const { lightMode } = useContext(DataContext);

  return (
    <>

      <img
        src={lightMode === "light" ? "/hamburger-white.svg" : "/hamburger-black.svg"}
        alt="logo"
        className={`sm:h-[46px] h-[26px] md:h-[54px] ${animations.rotateWhenHovered} md:mt-[-30px]`}
      />


    </>
  )
}
