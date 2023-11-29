import Link from "next/link";
import DataContext from "../_context/DataContext";
import { useContext, useState } from "react";
import animations from "../animations.module.css";
import { LightMode } from "../_components";
import { LanguageMode } from "../_components";

{
  /*MENU*/
}

export default function MenuElements() {
  const { setShowMenu, lightMode, leaveAnimation, showMenu, language } =
    useContext(DataContext);

  return (
    <>
      {showMenu && (
        <div className="h-screen flexCenter">
          <div className="flex justify-start 2xs:items-start items-center flex-col gap-7 2xs:gap-5 xs:gap-4  w-[250px] 2xs:w-[300px] md:w-[500px] xl:w-[800px] 1xl:w-[1000px]">
            {/*HOME LINK*/}

            <Link href={language === "english" ? "/" : "/es"}>
              <div
                className={`heading1Big ${
                  lightMode === "light"
                    ? "linksUnderlinesMenuWhite"
                    : "linksUnderlinesMenuBlack"
                } relative ${animations.goDown4} cursor-pointer ${
                  leaveAnimation ? animations.leavePage1 : ""
                } flex items-end `}
                onClick={() => {
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 1000);
                }}
              >
                <p className="text-secondary dark:text-black   hover:text-accent dark:hover:text-accent">
                  {language === "english" ? "Home" : "Inicio"}
                </p>
                <img
                  src={
                    lightMode === "light"
                      ? "/arrow-right-white.svg"
                      : "/arrow-right-black.svg"
                  }
                  alt="arrow"
                  className="2xs:opacity-0 2xs:h-[34px]  xs:h-[32px] xxxs:h-[28px]  h-[24px] 
                  mb-[7px] xxxs:mb-[4px] xs:mb-[2px] "
                />
              </div>
            </Link>

            {/*PROJECTS LINK*/}

            <Link href={language === "english" ? "/projects" : "/proyectos"}>
              <div
                className={`heading1Big ${
                  lightMode === "light"
                    ? "linksUnderlinesMenuWhite"
                    : "linksUnderlinesMenuBlack"
                } relative ${animations.goDown3} cursor-pointer ${
                  leaveAnimation ? animations.leavePage2 : ""
                } flex items-end`}
                onClick={() => {
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 500);
                }}
              >
                <p className="text-secondary dark:text-black   hover:text-accent dark:hover:text-accent">
                  {" "}
                  {language === "english" ? "Projects" : "Proyectos"}
                </p>
                <img
                  src={
                    lightMode === "light"
                      ? "/arrow-right-white.svg"
                      : "/arrow-right-black.svg"
                  }
                  alt="arrow"
                  className="2xs:opacity-0 2xs:h-[34px]  xs:h-[32px] xxxs:h-[28px]  h-[24px]
                  mb-[7px] xxxs:mb-[4px] xs:mb-[2px]"
                />
              </div>
            </Link>

            {/*ABOUT LINK*/}

            <Link href={language === "english" ? "/about" : "/about-es"}>
              <div
                className={`heading1Big ${
                  lightMode === "light"
                    ? "linksUnderlinesMenuWhite"
                    : "linksUnderlinesMenuBlack"
                } relative ${animations.goDown2} cursor-pointer ${
                  leaveAnimation ? animations.leavePage3 : ""
                } flex items-end`}
                onClick={() => {
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 1000);
                }}
              >
                <p className="text-secondary dark:text-black   hover:text-accent dark:hover:text-accent">
                  {language === "english" ? "About" : "Sobre mí"}
                </p>
                <img
                  src={
                    lightMode === "light"
                      ? "/arrow-right-white.svg"
                      : "/arrow-right-black.svg"
                  }
                  alt="arrow"
                  className="2xs:opacity-0 2xs:h-[34px]  xs:h-[32px] xxxs:h-[28px]  h-[24px] 
                  mb-[7px] xxxs:mb-[4px] xs:mb-[2px]"
                />
              </div>
            </Link>

            {/*CONTACT LINK*/}

            <Link href="/contact">
              <div
                className={`heading1Big ${
                  lightMode === "light"
                    ? "linksUnderlinesMenuWhite"
                    : "linksUnderlinesMenuBlack"
                } relative ${animations.goDown1} cursor-pointer ${
                  leaveAnimation ? animations.leavePage4 : ""
                }  flex items-end`}
                onClick={() => {
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 1000);
                }}
              >
                <p className="text-secondary dark:text-black    hover:text-accent dark:hover:text-accent">
                  {language === "english" ? "Contact" : "Contacto"}
                </p>
                <img
                  src={
                    lightMode === "light"
                      ? "/arrow-right-white.svg"
                      : "/arrow-right-black.svg"
                  }
                  alt="arrow"
                  className="2xs:opacity-0 2xs:h-[34px]  xs:h-[32px] xxxs:h-[28px]  h-[24px]
                  mb-[7px] xxxs:mb-[4px] xs:mb-[2px] "
                />
              </div>
            </Link>

            {/*BLOG LINK*/}

            <Link href={language === "english" ? "/blog" : "/blog-es"}>
              <div
                className={`heading1Big ${
                  lightMode === "light"
                    ? "linksUnderlinesMenuWhite"
                    : "linksUnderlinesMenuBlack"
                } relative ${animations.goDown1} cursor-pointer ${
                  leaveAnimation ? animations.leavePage4 : ""
                } flex items-end`}
                onClick={() => {
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 1000);
                }}
              >
                <p className="text-secondary dark:text-black  hover:text-accent dark:hover:text-accent">
                  Blog
                </p>
                <img
                  src={
                    lightMode === "light"
                      ? "/arrow-right-white.svg"
                      : "/arrow-right-black.svg"
                  }
                  alt="arrow"
                  className="2xs:opacity-0 2xs:h-[34px]  xs:h-[32px] xxxs:h-[28px]  h-[24px] 
                  mb-[7px] xxxs:mb-[4px] xs:mb-[2px]"
                />
              </div>
            </Link>

            <div className="mt-[50px] flex items-center heading2Menu gap-[30px] ">
              {/*LANGUAGE BUTTON*/}
              <LanguageMode />

              {/*LIGHTMODE BUTTON*/}
              <LightMode />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
