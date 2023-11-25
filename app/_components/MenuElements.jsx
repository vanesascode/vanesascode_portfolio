import Link from "next/link";
import DataContext from "../_context/DataContext";
import { useContext, useState } from "react";
import animations from "../animations.module.css";
import { LightMode } from "../_components";

{
  /*MENU*/
}

export default function MenuElements() {
  const {
    setShowMenu,
    lightMode,
    leaveAnimation,
    showMenu,
    language,
    setLanguage,
  } = useContext(DataContext);

  const HandleChangeLanguage = () => {
    if (language === "english") {
      setLanguage("spanish");
    } else {
      setLanguage("english");
    }
  };

  //when navbar was not fixed:mt-[-50px] sm:mt-[-110px] md:mt-[-120px] lg:mt-[-130px] xl:mt-[-140px]

  return (
    <>
      {showMenu && (
        <div className="h-screen flexCenter ">
          <div className="flex justify-start 2xs:items-start items-center flex-col gap-5 w-[200px] 2xs:w-[300px] md:w-[500px] xl:w-[800px] 1xl:w-[1000px]">
            <a href="/">
              <div
                className={`heading1Menu ${
                  lightMode === "light"
                    ? "linksUnderlinesMenuWhite"
                    : "linksUnderlinesMenuBlack"
                } relative ${animations.goDown4} cursor-pointer ${
                  leaveAnimation ? animations.leavePage1 : ""
                }`}
                onClick={() => {
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 1000);
                }}
              >
                <p className="text-secondary dark:text-black pb-3 hover:text-accent dark:hover:text-accent">
                  Home
                </p>
              </div>
            </a>

            <Link href="/projects">
              <div
                className={`heading1Menu ${
                  lightMode === "light"
                    ? "linksUnderlinesMenuWhite"
                    : "linksUnderlinesMenuBlack"
                } relative ${animations.goDown3} cursor-pointer ${
                  leaveAnimation ? animations.leavePage2 : ""
                }`}
                onClick={() => {
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 500);
                }}
              >
                <p className="text-secondary dark:text-black pb-3  hover:text-accent dark:hover:text-accent">
                  {" "}
                  Projects
                </p>
              </div>
            </Link>

            <Link href="/about">
              <div
                className={`heading1Menu ${
                  lightMode === "light"
                    ? "linksUnderlinesMenuWhite"
                    : "linksUnderlinesMenuBlack"
                } relative ${animations.goDown2} cursor-pointer ${
                  leaveAnimation ? animations.leavePage3 : ""
                }`}
                onClick={() => {
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 1000);
                }}
              >
                <p className="text-secondary dark:text-black pb-3  hover:text-accent dark:hover:text-accent">
                  About
                </p>
              </div>
            </Link>

            <Link href="/contact">
              <div
                className={`heading1Menu ${
                  lightMode === "light"
                    ? "linksUnderlinesMenuWhite"
                    : "linksUnderlinesMenuBlack"
                } relative ${animations.goDown1} cursor-pointer ${
                  leaveAnimation ? animations.leavePage4 : ""
                }`}
                onClick={() => {
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 1000);
                }}
              >
                <p className="text-secondary dark:text-black pb-3  hover:text-accent dark:hover:text-accent">
                  Contact
                </p>
              </div>
            </Link>

            <Link href="/blog">
              <div
                className={`heading1Menu ${
                  lightMode === "light"
                    ? "linksUnderlinesMenuWhite"
                    : "linksUnderlinesMenuBlack"
                } relative ${animations.goDown1} cursor-pointer ${
                  leaveAnimation ? animations.leavePage4 : ""
                }`}
                onClick={() => {
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 1000);
                }}
              >
                <p className="text-secondary dark:text-black pb-3  hover:text-accent dark:hover:text-accent">
                  Blog
                </p>
              </div>
            </Link>

            <div className="mt-3 flex items-center heading2Menu gap-5 ">
              <div className={`${animations.goUp1}`}>
                {" "}
                <p
                  className={`text-secondary dark:text-primary cursor-pointer ${
                    animations.rotateWhenHovered
                  } ${leaveAnimation ? animations.leavePageDown1 : ""}`}
                  onClick={HandleChangeLanguage}
                >
                  {language === "english" ? "SP" : "EN"}
                </p>
              </div>

              <LightMode />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
