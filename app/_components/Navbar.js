"use client";

import Link from "next/link";
import styles from "../styles.module.css";
import DataContext from "../_context/DataContext.js";

import { useState, useContext, useEffect } from "react";



export default function Navbar() {
  const { showMenu, setShowMenu } = useContext(DataContext);

  // const [showMenu, setShowMenu] = useState(false);

  //DARK MODE CONFIGURATION: 

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
  };


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


              <Link href="/">
                <div className="heading1" onClick={() => {
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 900);
                }}>
                  <p className="text-secondary dark:text-black">Home</p>
                </div>
              </Link>

              <Link href="/projects">
                <div className="heading1" onClick={() => {
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 900);
                }}>
                  <p className="text-secondary dark:text-black"> Projects</p>

                </div>
              </Link>

              <Link href="/about">
                <div className="menu-item">
                  About
                </div>

              </Link>

              <button onClick={handleChangeTheme}> <img src="/sun.svg" alt="logo" /></button>


            </div>
          </div>
        </div>

      )}



    </>
  )
}
