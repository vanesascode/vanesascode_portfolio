"use client"

import animations from "../animations.module.css";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

export default function OpenMenuButton() {

  const { lightMode, leaveAnimation } = useContext(DataContext);

  return (
    <>

      <img
        src={lightMode === "light" ? "/hamburger-white.svg" : "/hamburger-black.svg"}
        alt="logo"
        className={` size-open-menu-button  ${animations.rotateWhenHovered}  ${leaveAnimation ? animations.leavePage4 : ""}`}
      />


    </>
  )
}
