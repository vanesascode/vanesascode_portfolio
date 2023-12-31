"use client"
import Image from "next/image";
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
        className={`size-close-menu-button cursor-pointer  ${animations.rotateWhenHovered} `}
      />

    </>
  )
}
