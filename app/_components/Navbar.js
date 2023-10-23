"use client";

import animations from "../animations.module.css";
import DataContext from "../_context/DataContext";
import { Logo, OpenMenuButton, CloseMenuButton } from "../_components";
import { useContext, useState, useEffect } from "react";



export default function Navbar() {


  // CONTEXT: 

  const { showMenu, setShowMenu, leaveAnimation, setLeaveAnimation } = useContext(DataContext);

  // BUTTON FUNCTIONS: 

  const handleOpenMenuButton = () => {
    setLeaveAnimation(true)
    setTimeout(() => {
      setLeaveAnimation(false);
    }, 1500);
    setTimeout(() => {
      setShowMenu(true)
    }, 1500);
  }

  const handleCloseMenuButton = () => {
    setLeaveAnimation(true)
    setTimeout(() => {
      setLeaveAnimation(false);
    }, 1500);
    setTimeout(() => {
      setShowMenu(false)
    }, 1500);

  }



  return (
    <div className="fixed md:top-0 top-5 lg:left-20 lg:right-20 xs2:left-8 xs2:right-8 z-50 left-4 right-4">
      <div
        className={`flex justify-between items-center paddingYNavbar navbar-index ${animations.goDown1} ${leaveAnimation ? animations.leavePage4 : ""}`}
      >
        <div>
          <Logo />
        </div>

        <div>
          {
            !showMenu ? (
              <div className="md:mt-[30px] "
                onClick={handleOpenMenuButton}

              >
                <OpenMenuButton />
              </div>
            ) :

              (
                <div className={`flexCenter `}
                  onClick={handleCloseMenuButton}
                >
                  <CloseMenuButton />
                </div>
              )
          }
        </div>

      </div>
    </div>
  )
};
