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
                  <Gist gistId={bp.gistIdIn || bp.gistIdIn2} />;
                </div>

                {/*SUBTITLE*/}

                <p
                  className={`text-secondary dark:text-primary text-[12px] md:text-[19px] md:line-clamp-2 mt-[10px] px-2 pt-2`}
                >
                  {bp.subtitle}
                </p>

                {/*ARROW*/}

                <div className="flex justify-between px-2 pb-2 pt-4">
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
  );
};

export default BlogList;
