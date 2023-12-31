"use client";

import animations from "../animations.module.css";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

import { Gist } from "gist-react";

import { SocialmediaShareIcons } from "../_components";

import Link from "next/link";

export default function BlogPillES({ pill }) {
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

            {/*SOCIAL MEDIA ICONS*/}

            <div
              className={` ${animations.goDown2} ${
                leaveAnimation ? animations.leavePage3 : ""
              } border-b-2 border-secondary dark:border-primary w-full flex justify-between items-center mt-[50px] xl:mt-[70px] `}
            >
              <SocialmediaShareIcons pill={pill} />

              {/*DATE*/}

              <p
                className="text-secondary dark:text-primary date_text 
              px-[5px] 
              max-xs:ml-[30px] 
              xl:tracking-wider"
              >
                {pill.date}
              </p>
            </div>

            {/*INFO*/}

            <div
              className={` paragraph ${animations.goUp4} ${
                leaveAnimation ? animations.leavePageDown1 : ""
              }  mt-[10px] md:mt-[12px] xl:mt-[22px] px-0`}
            >
              <p className="text-secondary dark:text-primary">
                {pill.paragraph1}
              </p>

              {/*IMAGE 1*/}

              <div
                className={`
             mt-[10px] md:mt-[12px] xl:mt-[22px] 2xl:w-[900px] 1xl:w-[800px] xl:w-[650px] 1md:w-[550px] md:w-[500px] w-full mx-auto ${
               animations.goUp4
             } ${leaveAnimation ? animations.leavePageDown1 : ""}`}
              >
                <Gist gistId={pill.gistIdIn} />
              </div>

              {pill.gistIdIn && <br />}

              {/*PARAGRAPH 2*/}
              <p className="text-secondary dark:text-primary">
                {pill.paragraph2}
              </p>

              {/*IMAGE 2*/}
              {pill.gistIdIn2 && (
                <div
                  className={`
              mt-[10px] md:mt-[20px] xl:mt-[40px] 2xl:w-[900px] 1xl:w-[800px] xl:w-[650px] 1md:w-[550px] md:w-[500px] w-full mx-auto ${
                animations.goDown1
              } ${leaveAnimation ? animations.leavePage4 : ""}`}
                >
                  <Gist gistId={pill.gistIdIn2} />
                </div>
              )}
              <br />
              {/*PARAGRAPH 3*/}
              <p className="text-secondary dark:text-primary">
                {pill.paragraph3}
              </p>
              {/*IMAGE 3*/}
              {pill.gistIdIn3 && (
                <div
                  className={`
              mt-[10px] md:mt-[20px] xl:mt-[40px] 2xl:w-[900px] 1xl:w-[800px] xl:w-[650px] 1md:w-[550px] md:w-[500px] w-full mx-auto ${
                animations.goDown1
              } ${leaveAnimation ? animations.leavePage4 : ""}`}
                >
                  <Gist gistId={pill.gistIdIn3} />
                </div>
              )}
              {pill.paragraph4 && <br />}
              {/*PARAGRAPH 4*/}
              {pill.paragraph4 && (
                <>
                  <p className="text-secondary dark:text-primary">
                    {pill.paragraph4}
                  </p>
                  <br />
                </>
              )}
              {/*LINK*/}
              {pill.linkUrl && !pill.paragraph4 && !pill.gistIdIn3 && <br />}
              {pill.linkUrl && (
                <>
                  <a href={pill.linkUrl} target="_blank">
                    <p className="text-secondary dark:text-primary underline">
                      {pill.linkName}
                    </p>
                  </a>
                  <br />
                </>
              )}
              <br />
            </div>

            {/*BACK*/}
            <Link
              href="/blog-es"
              className={`flex items-center mb-[40px] md:mb-[50px] xl:mb-[80px] cursor-pointer ${
                animations.goUp4
              } ${leaveAnimation ? animations.leavePageDown1 : ""}`}
            >
              <img
                src={
                  lightMode === "light"
                    ? "/arrow-left-white.svg"
                    : "/arrow-left-black.svg"
                }
                alt="arrow to go to pills"
                className="h-[14px] w-[16px] 
                md:h-[17px] md:w-[19px] 
                xl:h-[19px] xl:w-[21px]
                md:me-2 me-1"
              />

              <p className="text-secondary dark:text-primary font-source font-semibold md:text-[16px] xl:text-[20px] text-[14px] hover:text-[16px] hover:md:text-[18px] hover:xl:text-[22px]  transition-all hover:mb-[1px]">
                {" "}
                Volver a las píldoras
              </p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
