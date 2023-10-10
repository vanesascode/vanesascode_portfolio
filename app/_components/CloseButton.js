"use client"

import animations from "../animations.module.css";
import { useContext } from "react";

import DataContext from "../_context/DataContext";

export default function CloseButton() {
  const { lightMode } = useContext(DataContext);

  return (
    <>

      <img
        src={lightMode === "light" ? "/closebutton-white.svg" : "/closebutton-black.svg"}
        alt="logo"
        className={`sm:h-[46px] h-[26px] md:h-[56px] ${animations.rotateWhenHovered} mt-[-8px]`}
      />

    </>
  )
}
