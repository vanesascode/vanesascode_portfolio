"use client";

import Link from "next/link";
import animations from "../animations.module.css";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

export default function HomeElements() {
  const { lightMode, showMenu, leaveAnimation, language } =
    useContext(DataContext);

  return (
    <>
      {!showMenu && (
        <div className="h-screen flexCenter ">
          <div>
            <div className="flexCenter flex-col ">
              {/*TITLE*/}
              <div className="max-w-5xl text-center heading1Big">
                <div>
                  <div
                    className={`${animations.goDownHome4} ${
                      leaveAnimation ? animations.leavePage1 : ""
                    }`}
                  >
                    <p className="text-secondary dark:text-primary tracking-[-1px] sm:tracking-tight">
                      {language === "english" ? "Hi, I'm" : "Hola, soy"}
                      <br className="block sm:hidden " /> Vanesa Juarez
                      <span className="lg:hidden">,</span>
                      <span className="max-lg:hidden text-secondary dark:text-primary">
                        {" "}
                        Paris,
                      </span>
                    </p>
                  </div>
                  <div
                    className={`${animations.goDownHome3} ${
                      leaveAnimation ? animations.leavePage2 : ""
                    }`}
                  >
                    <p>
                      <span className="tracking-[-1px] sm:tracking-normal text-secondary dark:text-primary ">
                        alias{" "}
                      </span>
                      <br className="block sm:hidden" />
                      <span className="text-accent dark:text-accent tracking-[1px] md:tracking-normal">
                        vanesascode
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/*SUBTITLE*/}
              <div className={"max-w-[550px] pt-[20px]"}>
                <div className="heading2 ">
                  <div
                    className={`${animations.goDownHome2} ${
                      leaveAnimation ? animations.leavePage3 : ""
                    }`}
                  >
                    <p className="text-secondary dark:text-primary md:tracking-[-0.5px] tracking-tighter xl:tracking-[-0.95px]">
                      {language === "english"
                        ? "I'm a full stack developer"
                        : "Soy desarrolladora full stack"}
                    </p>
                  </div>
                  <div
                    className={`${animations.goDownHome1} ${
                      leaveAnimation ? animations.leavePage4 : ""
                    }`}
                  >
                    <p className="text-secondary dark:text-primary md:tracking-[0.8px] tracking-[0.2px] xl:tracking-[1px]">
                      {language === "english"
                        ? "& a passionate learner"
                        : "& una apasionada del aprendizaje"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*BOTTONS*/}

            {/*BOTTON 1*/}

            <div className="flexCenter">
              <div
                className={` pt-[80px] ${animations.goUpHome} paddingXBody ${
                  leaveAnimation ? animations.leavePageDown1 : ""
                }`}
              >
                <Link
                  href={language === "english" ? "/projects" : "/proyectos"}
                >
                  <div className="flexCenter">
                    <div
                      className={` relative ${
                        lightMode === "light"
                          ? "linksUnderlinesHomeWhite"
                          : "linksUnderlinesHomeBlack"
                      }  `}
                    >
                      <p
                        className="links
                      mb-[5px]

                      text-secondary dark:text-primary hover:text-accent dark:hover:text-accent  tracking-tighter"
                      >
                        {language === "english"
                          ? "See my projects"
                          : "Visita mis proyectos"}
                      </p>
                    </div>
                    <img
                      src={
                        lightMode === "light"
                          ? "/arrow-right-white.svg"
                          : "/arrow-right-black.svg"
                      }
                      alt="logo"
                      className=" xl:h-[45px] md:h-[35px] sm:h-[28px] h-[20px] "
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/*BOTTON 2*/}

            <div className="flexCenter">
              <div
                className={`pt-4  ${animations.goUpHome}  ${
                  leaveAnimation ? animations.leavePageDown1 : ""
                }`}
              >
                <Link href={language === "english" ? "/about" : "/about-es"}>
                  <div className="flexCenter ">
                    <div
                      className={` relative ${
                        lightMode === "light"
                          ? "linksUnderlinesHomeWhite"
                          : "linksUnderlinesHomeBlack"
                      } `}
                    >
                      <p className="links text-secondary dark:text-primary hover:text-accent dark:hover:text-accent mb-1 tracking-tighter">
                        {language === "english"
                          ? "More about me"
                          : "Más sobre mí"}
                      </p>
                    </div>
                    <img
                      src={
                        lightMode === "light"
                          ? "/arrow-right-white.svg"
                          : "/arrow-right-black.svg"
                      }
                      alt="arrow"
                      className=" xl:h-[45px] md:h-[35px] sm:h-[28px] h-[20px] "
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
