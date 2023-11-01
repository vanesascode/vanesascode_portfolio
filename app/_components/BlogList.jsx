"use client";
import { useContext, useState } from "react";

import DataContext from "../_context/DataContext";

import Link from "next/link";

import { Gist } from "gist-react";

import animations from "../animations.module.css";

const BlogList = ({ blogPills }) => {
  const { lightMode } = useContext(DataContext);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="flex items-center flex-col w-[150px] xxxxs:w-[10px] xxxs:w-[180px] xxs:w-[220px] xs:w-[240px] 1xs:w-[250px] 2xs:w-[360px] sm:w-[450px] md:w-[490px] 1md:w-[540px] 2md:w-[600px] 3md:w-[650px] lg:w-[650px]  2lg:w-[700px] xl:w-[800px] 1xl:w-[1000px] 2xl:w-[1200px] ">
      <div className="2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 grid gap-10">
        {blogPills.map((bp, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <Link href={`/blog/${bp.url}`} key={bp.url}>
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="p-5 glassmorphism">
                  <p className="text-secondary dark:text-primary font-bold md:text-[25px] text-[18px] text-center p-2 font-source 1xl:line-clamp-1 2xl:line-clamp-none">
                    {bp.title}
                  </p>

                  {/*IMAGE*/}

                  <div className="h-[150px] overflow-hidden  object-none flex justify-center items-center mt-[10px] ">
                    <Gist gistId={bp.gistIdIn || bp.gistIdOut} />;
                  </div>

                  {/*SUBTITLE*/}

                  <p
                    className={`text-secondary dark:text-primary text-[12px] md:text-[19px] md:line-clamp-2 mt-[10px] p-2`}
                  >
                    {bp.subtitle}
                  </p>

                  {/*ARROW*/}

                  <div className="flex justify-between p-2">
                    <img
                      src={
                        lightMode === "light"
                          ? "/arrow-up-white.svg"
                          : "/arrow-up-black.svg"
                      }
                      alt="arrow to go to website"
                      className={`h-[20px] w-[20px] md:h-[30px] md:w-[30px] mb-[-2px] ${
                        isHovered ? "opacity-100" : "opacity-0 "
                      } ${isHovered ? animations.arrowGoUp : ""} `}
                    />

                    {/*DATE*/}

                    <p className="text-secondary dark:text-primary paragraph text-[10px] md:text-[15px] ">
                      {bp.date}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
