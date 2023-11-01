"use client";

import animations from "../animations.module.css";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

export default function ProjectInfo({ project }) {
  const { lightMode, showMenu, leaveAnimation } = useContext(DataContext);

  return (
    <>
      {!showMenu && (
        <div className="flexCenter pt-[80px] ">
          <div className="flex items-center flex-col w-[220px] xs:w-[250px] md:w-[500px] xl:w-[1000px] 2xl:w-[1200px] ">
            {/*TITLE*/}

            <div className=" heading1 text-center">
              <div>
                <div
                  className={`${animations.goDown4} ${
                    leaveAnimation ? animations.leavePage1 : ""
                  }`}
                >
                  <p className="text-secondary dark:text-primary tracking-[-1px] sm:tracking-normal pb-3">
                    {project.title}
                  </p>
                </div>
              </div>
            </div>

            {/*SUBTITLE*/}

            <div className="heading2 ">
              <div
                className={`${animations.goDown3} ${
                  leaveAnimation ? animations.leavePage2 : ""
                }`}
              >
                <p className="text-secondary dark:text-primary md:tracking-[-0.5px] tracking-tighter xl:tracking-[-0.95px]">
                  {project.desc}
                </p>
              </div>
            </div>

            {/*LINKS */}

            <div
              className={`flex gap-10 mt-[20px] md:mt-[30px] xl:mt-[40px] ${
                animations.goDown2
              } ${leaveAnimation ? animations.leavePage3 : ""}`}
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <div className="flex gap-2 items-center flex-col">
                  <img
                    src={
                      lightMode === "light"
                        ? "/projects/internet-white.svg"
                        : "/projects/internet-black.svg"
                    }
                    alt="web icon"
                    className={`h-[35px] md:h-[45px] ${animations.rotateWhenHovered}`}
                  />
                  <p className="text-secondary dark:text-primary">Web</p>
                </div>
              </a>

              <a href={project.code} target="_blank" rel="noreferrer">
                <div className="flex gap-2 items-center flex-col">
                  <img
                    src={
                      lightMode === "light"
                        ? "/projects/github-white.svg"
                        : "/projects/github-black.svg"
                    }
                    alt="code icon"
                    className={`h-[35px] md:h-[45px] ${animations.rotateWhenHovered}`}
                  />
                  <p className="text-secondary dark:text-primary">Code</p>
                </div>
              </a>
            </div>

            {/*VIDEO*/}

            <div
              className={`
            mt-[20px] md:mt-[30px] xl:mt-[40px]
            
            relative xl:h-[580px] xl:w-[650px] 
            md:h-[490px] md:w-[550px] 
            xs:h-[240px] xs:w-[260px] 
            h-[202px]  w-[225px]  ${animations.goDown1} ${
                leaveAnimation ? animations.leavePage4 : ""
              }`}
            >
              <img
                src="/projects/thinkpad.png"
                className="absolute top-0 left-0 xl:h-[580px] xl:w-[650px] 
                md:h-[490px] md:w-[550px] xs:h-[240px] xs:w-[277px] 
                z-20 h-[202px] w-[225px]"
              />
              <img
                src={project.video}
                className=" absolute xl:top-[45px] xl:left-[75px] xl:h-[341px] xl:w-[500px] 

                md:top-[43px] md:left-[55px] md:h-[280px] md:w-[430px] 

                xs:left-[30px] xs:top-[20px] xs:h-[140px] xs:w-[200px] object-cover  
                
                top-[18px] left-[22px] h-[115px] w-[175px]"
              />
            </div>

            {/*TITLE ICONS*/}

            <div className=" heading3 mt-[40px] md:mt-[50px] xl:mt-[80px] ">
              <div>
                <div
                  className={`${animations.goUp1} ${
                    leaveAnimation ? animations.leavePageDown4 : ""
                  }`}
                >
                  <p className="text-secondary dark:text-primary tracking-[-1px] sm:tracking-normal pb-3">
                    Technologies used:
                  </p>
                </div>
              </div>
            </div>

            {/*ICONS */}

            <div
              className={` flex justify-between items-center mt-[10px]  md:mt-[20px] xl:mt-[40px]   ${
                animations.goUp2
              } ${leaveAnimation ? animations.leavePageDown3 : ""} `}
            >
              <div>
                <img
                  src={
                    lightMode === "light"
                      ? project.iconsDark
                      : project.iconsLight
                  }
                  alt="programming icon"
                  className={`w-[480px]`}
                />
              </div>
            </div>

            {/*TITLE INFO*/}

            <div className=" heading3 mt-[40px] md:mt-[50px] xl:mt-[80px] ">
              <div>
                <div
                  className={`${animations.goUp3} ${
                    leaveAnimation ? animations.leavePageDown2 : ""
                  }`}
                >
                  <p className="text-secondary dark:text-primary tracking-[-1px] sm:tracking-normal pb-3">
                    Description:
                  </p>
                </div>
              </div>
            </div>

            {/*INFO*/}

            <div
              className={`md:mt-3 mt-2  paragraph ${animations.goUp4} ${
                leaveAnimation ? animations.leavePageDown1 : ""
              }  mt-[10px]  md:mt-[20px] xl:mt-[40px]`}
            >
              <p className="text-secondary dark:text-primary">
                {project.paragraph1}
              </p>

              <br />

              <p className="text-secondary dark:text-primary">
                {project.paragraph2}
              </p>

              <br />

              <p className="text-secondary dark:text-primary">
                {project.paragraph3}
              </p>

              <br />

              <p className="text-secondary dark:text-primary">
                {project.paragraph4}
              </p>

              <br />
            </div>

            {/*BACK*/}
            <div
              className={`flex items-center mb-[40px] md:mb-[50px] xl:mb-[80px] ${
                animations.goUp4
              } ${leaveAnimation ? animations.leavePageDown1 : ""}`}
              onClick={() => history.back()}
            >
              <img
                src={
                  lightMode === "light"
                    ? "/arrow-left-white.svg"
                    : "/arrow-left-black.svg"
                }
                alt="arrow to go to projects"
                className={`h-[20px] w-[20px] md:h-[30px] md:w-[30px] `}
              />

              <p className="text-secondary dark:text-primary  font-source font-bold md:text-[20px] text-[14px]">
                {" "}
                Back to projects
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
