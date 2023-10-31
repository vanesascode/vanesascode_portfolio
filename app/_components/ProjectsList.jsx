"use client";
import { useContext, useState } from "react";
import { projectsPreviews } from "../_constants";
import DataContext from "../_context/DataContext";
import Link from "next/link";

const ProjectsList = () => {
  const { lightMode } = useContext(DataContext);

  return (
    <>
      <div className="2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 grid gap-10">
        {projectsPreviews.map((pp) => {
          const [isHovered, setIsHovered] = useState(false);

          const handleMouseEnter = () => {
            setIsHovered(true);
          };

          const handleMouseLeave = () => {
            setIsHovered(false);
          };

          return (
            <Link href={`/projects/${pp.url}`} key={pp.url}>
              <div
                onMouseEnter={handleMouseEnter}
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
                    src={pp.img}
                    className=" absolute md:top-[33px] md:left-[15px] md:h-[261px] md:w-[395px] 
                xs:left-[9px] xs:top-[18px] xs:h-[157px] xs:w-[240px] object-cover top-[14px] left-[6px] h-[120px] w-[180px]"
                  />
                  <img
                    src={pp.video}
                    className="hover:opacity-100 opacity-0 z-40 absolute md:top-[33px] md:left-[15px] md:h-[261px] md:w-[394.5px] 
                xs:left-[9px] xs:top-[18px] xs:h-[157px] xs:w-[240px] object-cover transition-all duration-500 top-[14px] left-[6px] h-[120px] w-[176.5px]"
                  />
                </div>

                {/*TITLE*/}

                <div className="flex items-center md:mt-5 mt-2">
                  <p className="text-secondary dark:text-primary  font-bold md:text-[25px] text-[18px]">
                    {pp.title}
                  </p>
                  <img
                    src={
                      lightMode === "light"
                        ? "/arrow-up-white.svg"
                        : "/arrow-up-black.svg"
                    }
                    alt="arrow to go to website"
                    className={`h-[20px] w-[20px] md:h-[30px] md:w-[30px] ml-3 mb-[-2px] ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/*DESCRIPTION*/}

                <p className="text-secondary dark:text-primary  text-[15px] md:text-[20px]">
                  {pp.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsList;
