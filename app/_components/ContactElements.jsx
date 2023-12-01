"use client";

import animations from "../animations.module.css";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

export default function ContactElements() {
  const { lightMode, showMenu, leaveAnimation, language } =
    useContext(DataContext);

  return (
    <>
      {!showMenu && (
        <div className="h-screen flexCenter">
          <div className="flex items-center flex-col w-[150px] xxxxs:w-[10px] xxxs:w-[180px] xxs:w-[220px] xs:w-[240px] 1xs:w-[250px] 2xs:w-[360px] sm:w-[450px] md:w-[490px] 1md:w-[540px] 2md:w-[600px] 3md:w-[650px] lg:w-[650px]  2lg:w-[700px] xl:w-[800px] 1xl:w-[1000px] 2xl:w-[1200px] ">
            {/*TITLE*/}

            <div className=" heading1 text-center">
              <div>
                <div
                  className={`${animations.goDown4} ${
                    leaveAnimation ? animations.leavePage1 : ""
                  }`}
                >
                  <p className="text-secondary dark:text-primary tracking-[-1px] sm:tracking-normal pb-3">
                    {language === "english" ? "Contact" : "Contacto"}
                  </p>
                </div>
              </div>
            </div>

            {/*SUBTITLE*/}

            <div className=" xl:text-[30px] sm:text-[19px] text-[16px] text-center xl:leading-[35px] sm:leading-[25px] leading-[20px] font-normal">
              <div
                className={`${animations.goDown3} ${
                  leaveAnimation ? animations.leavePage2 : ""
                }`}
              >
                <a href="mailto:vanesascode@gmail.com?subject=&body=">
                  <p className="text-secondary dark:text-primary md:tracking-[-0.5px] tracking-tighter xl:tracking-[-0.95px]">
                    vanesascode@gmail.com
                  </p>
                </a>
              </div>
            </div>

            {/*LINKS */}

            <div
              className={`flex gap-10 mt-[20px] md:mt-[30px] xl:mt-[40px] ${
                animations.goDown2
              } ${leaveAnimation ? animations.leavePage3 : ""}`}
            >
              <a
                href="https://www.linkedin.com/in/vanesajuarezparis"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex gap-1 md:gap-2  items-center flex-col">
                  <img
                    src={
                      lightMode === "light"
                        ? "/projects/linkedin-white.svg"
                        : "/projects/linkedin-black.svg"
                    }
                    alt="web icon"
                    className={`h-[30px] 1xs:h-[35px] md:h-[40px] xl:h-[45px] ${animations.rotateWhenHovered}`}
                  />
                  <p className="text-secondary dark:text-primary projectsIcons">
                    Linkedin
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/vanesascode"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex gap-1 md:gap-2  items-center flex-col">
                  <img
                    src={
                      lightMode === "light"
                        ? "/projects/github-white.svg"
                        : "/projects/github-black.svg"
                    }
                    alt="code icon"
                    className={`h-[31px] 1xs:h-[36px] md:h-[41px] xl:h-[46px]  ${animations.rotateWhenHovered}`}
                  />
                  <p className="text-secondary dark:text-primary projectsIcons mt-[-0.8px]">
                    Github
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
