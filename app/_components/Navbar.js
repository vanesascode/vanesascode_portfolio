"use client";

import animations from "../animations.module.css";
import DataContext from "../_context/DataContext";
import { Logo, Hamburger, CloseButton, LightMode } from "../_components";
import Menu from "./Menu.js";
import { useContext, useCallback } from "react";

//////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Navbar() {

  // CONTEXT: 

  const { showMenu, setShowMenu } = useContext(DataContext);

  // USING CALLBACK TO AVOID RE-RENDERING THE COMPONENT WHEN THE STATE CHANGES ???

  // const handleShowMenu = useCallback(() => {
  //   setShowMenu(true);
  // }, [setShowMenu]);

  // const handleHideMenu = useCallback(() => {
  //   setShowMenu(false);
  // }, [setShowMenu]);


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      {/***********************************NAVBAR WHEN COLLAPSED******************************************/}

      <div
        className={`flex justify-between items-center  paddingXNavbar paddingYNavbar navbar-index ${animations.goDown1}`}
      >
        <div>
          <Logo />
        </div>

        <div className="md:mt-[20px] "
          onClick={() => setShowMenu(true)}
        // onClick={handleShowMenu}
        >
          <Hamburger />
        </div>

      </div>

      {/***************************************NAVBAR WHEN OPEN ********************************************/}

      {
        showMenu && (

          <div className="menu-expanded bg-primary dark:bg-secondary">
            ; {/*I have to add this ';' because there seems to be a bug in NEXT and makes it appear in the main page. Therefore, I have to compensate adding it here too*/}

            <div className="container">

              <div
                className={`flex justify-between items-center  paddingXNavbar paddingYNavbar navbar-index `}
              >
                <div>
                  <Logo />
                </div>

                <div className=" flexCenter"
                  onClick={() => setShowMenu(false)}
                // onClick={handleHideMenu}
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
