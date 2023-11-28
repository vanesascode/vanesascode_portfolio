import React from "react";
import { useContext } from "react";

import { useMediaQuery } from "react-responsive";

import DataContext from "../_context/DataContext";

import { technologiesPics } from "../_constantsAbout";
import { skills } from "../_constantsAbout";
import Link from "next/link";

const AboutElements = () => {
  const { lightMode, showMenu, leaveAnimation, language } =
    useContext(DataContext);

  //Technologies pics:

  const isMin980 = useMediaQuery({ query: "(min-width: 980px)" });
  const isMax374 = useMediaQuery({ query: "(max-width: 374px)" });

  const isMax767 = useMediaQuery({ query: "(max-width: 767px)" });
  const isMin1025 = useMediaQuery({ query: "(min-width: 1025px)" });

  return (
    <>
      {!showMenu && (
        <div className="flex xl:flex-row flex-col xl:items-end items-center max-xl:pt-[80px] max-xxxxs:w-[130px] max-xxxs:w-[160px] max-xxs:w-[180px] max-xs:w-[200px] max-1xs:w-[240px] max-2xs:w-[260px] max-sm:w-[350px] max-md:w-[400px] max-2md:w-[500px] max-lg:w-[600px] max-xl:w-[700px] mx-auto">
          {/*LEFT SIDE*/}

          <div className="xl:w-2/5 xl:pe-10">
            {/*TITLE*/}
            <div className="text-secondary dark:text-primary heading1 text-center">
              About me
            </div>
            {/*DESCRIPTION*/}
            <div className=" mt-5 text-secondary dark:text-primary font-semibold md:text-[16px] lg:text-[18px] 1xl:text-[20px] text-[14px]">
              I am a full stack developer based in the Spanish Pyrenees. When
              I'm not coding or exploring new technologies, you can often find
              me taking a walk in the mountains with my dog.
              <br />
              <br />
              In addition to my programming skills, I have a background in
              teaching, music technology, and communication. I bring a unique
              blend of technology and creativity to my coding projects. I am
              self-taught and independent, but I also excel at communication and
              collaboration within productive teams. I have valuable experience
              working remotely.
            </div>
            {/*CV PDF*/}

            <a href="/about/vanesa-juarez-cv-nov-2023.pdf" download>
              <div className="flexCenter pt-10">
                <div
                  className="text-secondary dark:text-primary  hover:text-accent dark:hover:text-accent font-source font-semibold 
                xl:text-[29px] md:text-[22px]  text-[16px] mb-[1px]
                 
                hover:scale-105
                
                transition-all xl:hover:mb-[2px]  cursor-pointer"
                >
                  My CV
                </div>
                <img
                  src={
                    lightMode === "light"
                      ? "/arrow-right-white.svg"
                      : "/arrow-right-black.svg"
                  }
                  alt="arrow"
                  className=" xl:h-[35px] md:h-[25px]  h-[20px] "
                />
              </div>
            </a>

            {/*PROJECTS*/}

            <Link href={language === "english" ? "/projects" : "/proyectos"}>
              <div className="flexCenter mt-4">
                <div
                  className="text-secondary dark:text-primary  hover:text-accent dark:hover:text-accent font-source font-semibold 
                xl:text-[29px] md:text-[22px]  text-[16px] mb-[1px]
                hover:scale-105
                transition-all xl:hover:mb-[6px] max-xl:hover:mb-[1px] cursor-pointer"
                >
                  My Projects
                </div>
                <img
                  src={
                    lightMode === "light"
                      ? "/arrow-right-white.svg"
                      : "/arrow-right-black.svg"
                  }
                  alt="arrow"
                  className=" xl:h-[35px] md:h-[25px]  h-[20px] "
                />
              </div>
            </Link>

            {/*BLOG*/}

            <Link href={language === "english" ? "/blog" : "/blog-es"}>
              <div className="flexCenter mt-4 xl:mb-[40px]">
                <div
                  className="text-secondary dark:text-primary  hover:text-accent dark:hover:text-accent font-source font-semibold 
                xl:text-[29px] md:text-[22px]  text-[16px] mb-[1px]
                hover:scale-105
                transition-all xl:hover:mb-[8px] md:hover:mb-[1px] hover:mb-[1.5px]  cursor-pointer"
                >
                  My Blog
                </div>
                <img
                  src={
                    lightMode === "light"
                      ? "/arrow-right-white.svg"
                      : "/arrow-right-black.svg"
                  }
                  alt="arrow"
                  className=" xl:h-[35px] md:h-[25px]  h-[20px] "
                />
              </div>
            </Link>
          </div>

          {/*CENTER************************************************************************/}

          <div className="xl:w-1/5 flexCenter">
            <div className="xl:hidden">
              {/*MY PICTURE*/}

              <img
                src="/about/vanesa-walter-horizontal.jpg"
                alt="bracket"
                className=" my-[40px] object-contain"
              />
            </div>
            <div className="max-xl:hidden">
              {/*MY PICTURE*/}

              <img
                src="/about/vanesa-walter-vertical.jpg"
                alt="bracket"
                className="py-[40px] object-contain h-screen"
              />
            </div>
          </div>

          {/*RIGHT SIDE*/}
          {/*ICONS*/}
          <div className="xl:w-2/5 flexCenter w-full mt-3">
            <div className="flex flex-col w-full">
              {/*Technologies*/}

              <div className="text-secondary dark:text-primary heading1 text-center xl:ps-10 tracking-tight">
                Technologies
              </div>

              <div
                className="xl:ps-10 text-center
              grid xxxxs:grid-cols-3  xs:grid-cols-4 1md:grid-cols-4 2md:grid-cols-5 3md:grid-cols-6 lg:grid-cols-7 mt-6
              
               xxxxs:gap-3  lg:gap-4 "
              >
                {isMax374 || isMin980
                  ? technologiesPics.map((pic) => (
                      <div key={pic.lightPic} className="flexCenter">
                        <img
                          src={
                            lightMode === "light"
                              ? `/about/${pic.lightPic}`
                              : `/about/${pic.darkPic}`
                          }
                          alt="arrow"
                          className="xxxxs:h-5 xxxs:h-6 2xs:h-8 lg:h-10 
                          object-contain justify-self-center max-w-[70px]"
                        />
                      </div>
                    ))
                  : technologiesPics.slice(0, -1).map((pic) => (
                      <div key={pic.lightPic} className="flexCenter">
                        <img
                          src={
                            lightMode === "light"
                              ? `/about/${pic.lightPic}`
                              : `/about/${pic.darkPic}`
                          }
                          alt="arrow"
                          className="xxxxs:h-5 xxxs:h-6 2xs:h-8 lg:h-10 object-contain justify-self-center max-w-[70px]"
                        />
                      </div>
                    ))}
              </div>

              {/*skills*/}

              <div className="text-secondary dark:text-primary heading1 text-center mt-10 1xl:mt-[100px] 2xl:mt-[150px] ">
                Skills
              </div>
              <div className="xl:ps-10 grid md:grid-cols-2 lg:grid-cols-3 text-center gap-2 md:gap-3 lg:gap-4 mt-6 mb-[40px]">
                {isMax767 || isMin1025
                  ? skills.map((skill) => (
                      <div
                        key={skill.skill}
                        className="bg-secondary dark:bg-primary  text-primary dark:text-secondary font-semibold text-[14px] md:text-[16px]  1xl:text-[18px]  md:p-2 p-1 rounded flexCenter"
                      >
                        {skill.skill}
                      </div>
                    ))
                  : skills.slice(0, -1).map((skill) => (
                      <div
                        key={skill.skill}
                        className="bg-secondary dark:bg-primary  text-primary dark:text-secondary font-semibold text-[14px] md:text-[16px]  1xl:text-[18px]  md:p-2 p-1 rounded flexCenter"
                      >
                        {skill.skill}
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutElements;
