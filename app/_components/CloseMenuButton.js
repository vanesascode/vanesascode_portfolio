"use client"

import animations from "../animations.module.css";
import { useContext } from "react";

import DataContext from "../_context/DataContext";

export default function CloseMenuButton() {
  const { lightMode } = useContext(DataContext);

  return (
    <>

      <img
        src={lightMode === "light" ? "/closebutton-white.svg" : "/closebutton-black.svg"}
        alt="logo"
        className={`size-close-menu-button  ${animations.rotateWhenHovered} `}
      />

    </>
  )
}
