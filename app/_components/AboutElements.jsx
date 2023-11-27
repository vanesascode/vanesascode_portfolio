import React from "react";
import { useContext } from "react";

import DataContext from "../_context/DataContext";

const AboutElements = () => {
  const { lightMode, showMenu, leaveAnimation, language } =
    useContext(DataContext);

  return (
    <>
      {!showMenu && (
        <div className="flex md:flex-row flex-col items-center">
          {/*LEFT SIDE*/}

          {/*TITLE*/}
          <div className="md:w-1/3 ">
            <p className="text-secondary dark:text-primary heading1 text-center">
              About me
            </p>
            {/*DESCRIPTION*/}
            <p className=" mt-5 text-secondary dark:text-primary font-semibold md:text-[16px] xl:text-[20px] text-[14px]">
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
            </p>
            {/*CV PDF*/}

            <a href="/about/vanesa-juarez-cv-nov-2023.pdf" download>
              <div className="flexCenter mt-10">
                <p
                  className="text-secondary dark:text-primary  hover:text-accent dark:hover:text-accent font-source font-semibold 
                xl:text-[29px] md:text-[22px]  text-[14px] hover:text-[16px] 
                hover:xl:text-[32px]  hover:md:text-[25px]  transition-all hover:mb-[1px] cursor-pointer"
                >
                  My CV
                </p>
                <img
                  src={
                    lightMode === "light"
                      ? "/arrow-right-white.svg"
                      : "/arrow-right-black.svg"
                  }
                  alt="arrow"
                  className=" xl:h-[35px] md:h-[25px] sm:h-[28px] h-[20px] "
                />
              </div>
            </a>
          </div>

          {/*CENTER*/}

          <div className="md:w-1/3 flexCenter">
            <div className="">
              {/*MY PICTURE*/}

              <img
                src="/about/vane-walti.jpg"
                alt="bracket"
                className="h-screen py-10"
              />
            </div>
          </div>

          {/*RIGHT SIDE*/}
          {/*ICONS*/}
          <div className="md:w-1/3 flexCenter">
            <img
              src={
                lightMode === "light"
                  ? "/projects/icons-promptgenius-light.png"
                  : "/projects/icons-promptgenius-light.png"
              }
              alt="arrow"
              className="w-10"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AboutElements;
