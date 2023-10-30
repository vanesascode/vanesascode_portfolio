"use client";
import { useContext, useState } from "react";
import { blogPills } from "../_constants";
import DataContext from "../_context/DataContext";

import Link from "next/link";

import { Gist } from "gist-react";

const BlogList = () => {
  const { lightMode } = useContext(DataContext);

  return (
    <>
      <div className="2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 grid gap-10">
        {blogPills.map((bp) => {
          const [isHovered, setIsHovered] = useState(false);

          const handleMouseEnter = () => {
            setIsHovered(true);
          };

          const handleMouseLeave = () => {
            setIsHovered(false);
          };

          return (
            <Link href={`/blog/${bp.url}`} key={bp.url}>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative md:h-[318px] md:w-[429px] xs:h-[190px] xs:w-[260px] h-[145px]  w-[190px] ">
                  <p className="text-secondary dark:text-primary  font-bold md:text-[25px] text-[18px]">
                    {bp.title}
                  </p>
                </div>
                <p className="text-secondary dark:text-primary  text-[15px] md:text-[20px]">
                  {bp.subtitle}
                </p>
                {/*IMAGE*/}
                <Gist gistId={bp.gistId} />;
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BlogList;
