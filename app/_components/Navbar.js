"use client";

import Link from "next/link";
import styles from "../styles.module.css";

import { useState } from "react";



export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);


  return (
    <>
      {/*NAVBAR*/}

      <div
        className={`flex justify-between items-center ${styles.goDown1} paddingXNavbar paddingYNavbar navbar-index`}
      >
        {/*Logo*/}

        <Link href="/">
          <div
            className={`flex items-center ${styles.rotateWhenHovered}`}

          >
            <div>
              <img
                src="/bracket-left.svg"
                alt="logo"
                className="md:h-[60px] sm:h-[50px] h-[30px]  "
              />
            </div>
            <span className="logo sm:mb-2 mb-1">v</span>
            <div>
              <img
                src="/bracket-right.svg"
                alt="logo"
                className="md:h-[60px] sm:h-[50px] h-[30px] "
              />
            </div>
          </div>
        </Link>

        {/*Hamburger*/}


        <div className="md:mt-[20px] " onClick={() => setShowMenu(true)}>
          <img
            src="/hamburger.svg"
            alt="logo"
            className={`sm:h-[46px] h-[26px] md:h-[56px] ${styles.rotateWhenHovered}`}

          />
        </div>

      </div>


      {/*************************************************************************************************** */}
      {showMenu && (


        <div className="menu-expanded ">
          ; {/*I have to add this ';' because there seems to be a bug in NEXT and makes it appear in the main page. Therefore, I have to compensate adding it here too*/}

          <div className="container">

            {/*NAVBAR*/}
            <div
              className={`flex justify-between items-center  paddingXNavbar paddingYNavbar navbar-index `}
            >
              {/*Logo*/}

              <Link href="/">
                <div
                  className={`flex items-center ${styles.rotateWhenHovered}`}

                >
                  <div>
                    <img
                      src="/bracket-left.svg"
                      alt="logo"
                      className="md:h-[60px] sm:h-[50px] h-[30px]  "
                    />
                  </div>
                  <span className="logo sm:mb-2 mb-1">v</span>
                  <div>
                    <img
                      src="/bracket-right.svg"
                      alt="logo"
                      className="md:h-[60px] sm:h-[50px] h-[30px] "
                    />
                  </div>
                </div>
              </Link>

              {/*Hamburger*/}


              <div className="md:mt-[20px]" onClick={() => setShowMenu(false)}>
                <img
                  src="/close.svg"
                  alt="logo"
                  className={`sm:h-[46px] h-[26px] md:h-[56px] ${styles.rotateWhenHovered}`}

                />
              </div>

            </div>

            {/*MENU*/}

            <div className="flexCenter flex-col">



              <div className="heading1" onClick={() => setShowMenu(false)}>
                <p className="text-secondary">Home</p>
              </div>


              <Link href="/projects">
                <div className="menu-item">
                  Projects

                </div>
              </Link>

              <Link href="/about">
                <div className="menu-item">
                  About
                </div>

              </Link>


            </div>
          </div>
        </div>

      )}



    </>
  )
}
