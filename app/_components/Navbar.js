"use client";

import animations from "../animations.module.css";
import DataContext from "../_context/DataContext";
import { Logo, Hamburger, CloseButton, LightMode } from "../_components";
import Menu from "./Menu.js";
import { useContext, useCallback } from "react";



//////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Navbar() {

  // CONTEXT: 

  const { showMenu, setShowMenu, leaveAnimation, setLeaveAnimation } = useContext(DataContext);

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


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      {/***********************************NAVBAR WHEN COLLAPSED******************************************/}
      {
        !showMenu && (

          <div
            className={`flex justify-between items-center  paddingXNavbar paddingYNavbar navbar-index ${animations.goDown1} ${leaveAnimation ? animations.leavePage4 : ""}`}
          >
            <div>
              <Logo />
            </div>

            <div className="md:mt-[20px] "
              onClick={handleOpenMenuButton}

            >
              <Hamburger />
            </div>

          </div>)}

      {/***************************************NAVBAR WHEN OPEN ********************************************/}

      {
        showMenu && (

          <div className="menu-expanded">
            ; {/*I have to add this ';' because there seems to be a bug in NEXT and makes it appear in the main page. Therefore, I have to compensate adding it here too*/}

            <div className="container">

              <div
                className={`flex justify-between items-center  paddingXNavbar paddingYNavbar navbar-index ${animations.goDownMenu1} ${leaveAnimation ? animations.leavePage4 : ""}`}
              >
                <div>
                  <Logo />
                </div>

                <div className={`flexCenter `}
                  onClick={handleCloseMenuButton}
                >
                  <CloseButton />
                </div>

              </div>

              {/****************************************************************************************************/}

              <div className="max-w-[900px] min-h-screen mx-auto paddingXBody ">
                <Menu />

                <div className="mt-[50px]">
                  <LightMode />
                </div>

              </div>
            </div>

          </div >


        )
      }



    </>
  )
};
