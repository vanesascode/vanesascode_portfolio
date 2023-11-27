"use client";
import { useContext, useState } from "react";
import { proyectos } from "../_constantsProjectsES";
import DataContext from "../_context/DataContext";
import Link from "next/link";

import animations from "../animations.module.css";

const ProjectsListES = () => {
  const { lightMode } = useContext(DataContext);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className="2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 grid gap-10">
        {proyectos.map((proyecto, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <Link
              href={`/proyectos/${proyecto.url}`}
              key={proyecto.desc}
              className="flex justify-center items-center"
              suppressHydrationWarning
            >
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/*IMAGE*/}

                <div className="relative md:h-[318px] md:w-[429px] xs:h-[190px] xs:w-[260px] h-[145px]  w-[190px] ">
                  <img
                    src="/projects/thinkpadframepreview.png"
                    className="absolute top-0 left-0 md:h-[317px] md:w-[427px] xs:h-[190px] xs:w-[277px] z-20 h-[145px] w-[190px]"
                  />
                  {/* 1280px x 800px*/}
                  <img
                    src={proyecto.img}
                    className=" absolute md:top-[33px] md:left-[15px] md:h-[261px] md:w-[395px] 
                xs:left-[9px] xs:top-[18px] xs:h-[157px] xs:w-[240px] object-cover top-[14px] left-[6px] h-[120px] w-[180px]"
                  />
                  <img
                    src={proyecto.video}
                    className="hover:opacity-100 opacity-0 z-40 absolute md:top-[33px] md:left-[15px] md:h-[261px] md:w-[394.5px] 
                xs:left-[9px] xs:top-[18px] xs:h-[157px] xs:w-[240px] object-cover transition-all duration-500 top-[14px] left-[6px] h-[120px] w-[176.5px]"
                  />
                </div>

                <div className="flex 2xs:justify-between justify-center items-center">
                  <div className="flex flex-col max-2xs:items-center">
                    {/*TITLE*/}
                    <div className="flex items-center md:mt-5 mt-2">
                      <p className="text-secondary dark:text-primary  font-bold md:text-[25px] text-[18px]">
                        {proyecto.title}
                      </p>
                    </div>

                    {/*DESCRIPTION*/}

                    <p className="text-secondary dark:text-primary  text-[10px] xs:text-[12px] 2xs:text-[15px] md:text-[20px]">
                      {proyecto.desc}
                    </p>
                  </div>
                  {/*ARROW*/}
                  <div>
                    <img
                      src={
                        lightMode === "light"
                          ? "/arrow-up-white.svg"
                          : "/arrow-up-black.svg"
                      }
                      alt="arrow to go to website"
                      className={`h-[20px] w-[20px] md:h-[30px] md:w-[30px] max-2xs:hidden mb-[-2px] ${
                        isHovered ? "opacity-100" : "opacity-0"
                      } ${isHovered ? animations.arrowGoUp : ""}`}
                    />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsListES;
