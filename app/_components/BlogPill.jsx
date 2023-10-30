"use client";

import animations from "../animations.module.css";

import { useContext, useState } from "react";

import DataContext from "../_context/DataContext";

import { blogPills } from "../_constants";

import { Gist } from "gist-react";

export default function BlogPill({ pill }) {
  const { lightMode, showMenu, leaveAnimation } = useContext(DataContext);

  return (
    <>
      {!showMenu && (
        <div className="flexCenter pt-[80px] ">
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
                    {pill.title}
                  </p>
                </div>
              </div>
            </div>

            {/*SUBTITLE*/}

            <div className="heading2 mt-[10px] md:mt-[12px] xl:mt-[22px]">
              <div
                className={`${animations.goDown3} ${
                  leaveAnimation ? animations.leavePage2 : ""
                }`}
              >
                <p className="text-secondary dark:text-primary md:tracking-[-0.5px] tracking-tighter xl:tracking-[-0.95px]">
                  {pill.subtitle}
                </p>
              </div>
            </div>

            {/*IMAGE OUT*/}

            <div
              className={`
              mt-[10px] md:mt-[20px] xl:mt-[40px] xl:w-[650px] 1md:w-[550px] md:w-[500px] w-full ${
                animations.goDown1
              } ${leaveAnimation ? animations.leavePage4 : ""}`}
            >
              <Gist gistId={pill.gistIdOut} />;
            </div>

            {/*SOCIAL MEDIA ICONS*/}

            <div className="border-b-2 border-secondary w-full flex justify-between items-center ">
              <div className="px-[5px] flex items-center gap-[7px]">
                <img
                  src={
                    lightMode === "light"
                      ? "/blog/facebook-white.svg"
                      : "/blog/facebook-black.svg"
                  }
                  alt="facebook share icon"
                  className="h-[5px] md:h-[15px]  lg:h-[20px]  "
                />
                <img
                  src={
                    lightMode === "light"
                      ? "/blog/twitterx-white.svg"
                      : "/blog/twitterx-black.svg"
                  }
                  alt="facebook share icon"
                  className="h-[5px] md:h-[15px]  lg:h-[20px]  "
                />
                <img
                  src={
                    lightMode === "light"
                      ? "/blog/whatsapp-white.svg"
                      : "/blog/whatsapp-black.svg"
                  }
                  alt="facebook share icon"
                  className="h-[5px] md:h-[15px]  lg:h-[20px]  "
                />
                <img
                  src={
                    lightMode === "light"
                      ? "/blog/email-white.svg"
                      : "/blog/email-black.svg"
                  }
                  alt="facebook share icon"
                  className="h-[5px] md:h-[15px]  lg:h-[20px]  "
                />
              </div>
              <p className="text-secondary dark:text-primary paragraph px-[5px]">
                {pill.date}
              </p>
            </div>

            {/*INFO*/}

            <div
              className={` paragraph ${animations.goUp4} ${
                leaveAnimation ? animations.leavePageDown1 : ""
              }  mt-[10px] md:mt-[12px] xl:mt-[22px] px-[5px]`}
            >
              <p className="text-secondary dark:text-primary">
                {pill.paragraph1}
              </p>

              {/*IMAGE IN*/}

              <div
                className={`
              mt-[10px] md:mt-[12px] xl:mt-[22px] xl:w-[650px] 1md:w-[550px] md:w-[500px] w-full mx-auto ${
                animations.goDown1
              } ${leaveAnimation ? animations.leavePage4 : ""}`}
              >
                <Gist gistId={pill.gistIdIn} />;
              </div>

              <p className="text-secondary dark:text-primary">
                {pill.paragraph2}
              </p>
              <br />
              <p className="text-secondary dark:text-primary">
                {pill.paragraph3}
              </p>
              <br />
              <p className="text-secondary dark:text-primary">
                {pill.paragraph4}
              </p>
              <a href={pill.linkUrl}>
                <p className="text-secondary dark:text-primary underline">
                  {pill.linkName}
                </p>
              </a>
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
                Back to pills
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
