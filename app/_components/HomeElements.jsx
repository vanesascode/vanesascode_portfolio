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
            {/*TEXT*/}

            <div className="flexCenter flex-col paddingXBody ">
              <div className="max-w-5xl text-center heading1 ">
                <div>
                  <div
                    className={`${animations.goDownHome4} ${
                      leaveAnimation ? animations.leavePage1 : ""
                    }`}
                  >
                    {language === "english" ? (
                      <p className="text-secondary dark:text-primary tracking-[-1px] sm:tracking-normal">
                        Hi, I'm <br className="block sm:hidden " /> Vanesa
                        Juarez Paris
                      </p>
                    ) : (
                      <p className="text-secondary dark:text-primary tracking-[-1px] sm:tracking-normal">
                        Hola, soy <br className="block sm:hidden " /> Vanesa
                        Juarez Paris
                      </p>
                    )}
                  </div>
                  <div
                    className={`${animations.goDownHome3} ${
                      leaveAnimation ? animations.leavePage2 : ""
                    }`}
                  >
                    {language === "english" ? (
                      <p>
                        <span className="tracking-[-1px] sm:tracking-normal text-secondary dark:text-primary ">
                          but you can call me{" "}
                        </span>
                        <br className="block sm:hidden" />
                        <span className="text-accent dark:text-accent tracking-[1px] md:tracking-normal">
                          vanesascode
                        </span>
                      </p>
                    ) : (
                      <p>
                        <span className="tracking-[-1px] sm:tracking-normal text-secondary dark:text-primary ">
                          pero puedes llamarme{" "}
                        </span>
                        <br className="block sm:hidden" />
                        <span className="text-accent dark:text-accent tracking-[1px] md:tracking-normal">
                          vanesascode
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className={"max-w-[500px] pt-[20px]"}>
                <div className="heading2 ">
                  <div
                    className={`${animations.goDownHome2} ${
                      leaveAnimation ? animations.leavePage3 : ""
                    }`}
                  >
                    {language === "english" ? (
                      <p className="text-secondary dark:text-primary md:tracking-[-0.5px] tracking-tighter xl:tracking-[-0.95px]">
                        I'm a full stack developer
                      </p>
                    ) : (
                      <p className="text-secondary dark:text-primary md:tracking-[-0.5px] tracking-tighter xl:tracking-[-0.95px]">
                        Soy desarrolladora full stack
                      </p>
                    )}
                  </div>
                  <div
                    className={`${animations.goDownHome1} ${
                      leaveAnimation ? animations.leavePage4 : ""
                    }`}
                  >
                    {language === "english" ? (
                      <p className="text-secondary dark:text-primary md:tracking-[0.8px] tracking-[0.2px] xl:tracking-[1px]">
                        & an addict to learning
                      </p>
                    ) : (
                      <p className="text-secondary dark:text-primary md:tracking-[0.8px] tracking-[0.2px] xl:tracking-[1px]">
                        & adicta a aprender
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/*BOTTONS*/}
            <div>
              <div
                className={`  md:pt-[60px] pt-[50px] ${
                  animations.goUpHome
                } paddingXBody ${
                  leaveAnimation ? animations.leavePageDown1 : ""
                }`}
              >
                {language === "english" ? (
                  <Link href="/projects">
                    <div className="flexCenter">
                      <div
                        className={` relative ${
                          lightMode === "light"
                            ? "linksUnderlinesHomeWhite"
                            : "linksUnderlinesHomeBlack"
                        }  `}
                      >
                        <p className="links text-secondary dark:text-primary hover:text-accent dark:hover:text-accent mb-1">
                          See my projects
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
                ) : (
                  <Link href="/proyectos">
                    <div className="flexCenter">
                      <div
                        className={` relative ${
                          lightMode === "light"
                            ? "linksUnderlinesHomeWhite"
                            : "linksUnderlinesHomeBlack"
                        }  `}
                      >
                        <p className="links text-secondary dark:text-primary hover:text-accent dark:hover:text-accent mb-1">
                          Ver mis proyectos
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
                )}
              </div>
            </div>

            <div className="flexCenter">
              <div
                className={` md:flexCenter max-md:flexCol mt-1  ${
                  animations.goUpHome
                } paddingXBody ${
                  leaveAnimation ? animations.leavePageDown1 : ""
                }`}
              >
                <Link href="/">
                  <div className="flexCenter">
                    <div
                      className={` relative ${
                        lightMode === "light"
                          ? "linksUnderlinesHomeWhite"
                          : "linksUnderlinesHomeBlack"
                      }  max-md:mt-[10px]`}
                    >
                      {language === "english" ? (
                        <p className="links text-secondary dark:text-primary hover:text-accent dark:hover:text-accent mb-1">
                          More about me
                        </p>
                      ) : (
                        <p className="links text-secondary dark:text-primary hover:text-accent dark:hover:text-accent mb-1">
                          Más sobre mi
                        </p>
                      )}
                    </div>
                    <img
                      src={
                        lightMode === "light"
                          ? "/arrow-right-white.svg"
                          : "/arrow-right-black.svg"
                      }
                      alt="logo"
                      className=" xl:h-[45px] md:h-[35px] sm:h-[28px] h-[20px] opacity-1"
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
