"use client";

import "../globals.css";
import animations from "../animations.module.css";
import { useEffect, useState } from "react";

const Intro = () => {
  const [intro, setIntro] = useState(true);

  // Important:
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIntro(false);
    }, 700); // this controls the time it takes for the home text to appear

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {intro && (
        <div
          className={`flexCenter h-screen ${animations.fadeOut} bg-primary `}
        >
          <div>
            {/*TOP LINE*/}

            <div
              className={`${animations.lineRight}   bg-secondary w-full lg:h-[9.5px] sm:h-[8px] h-[6px] sm:me-[10px] mb-[-14px]`}
            ></div>

            {/*LEFT BRACKET*/}

            <div className="flex items-center">
              <div>
                <img
                  src="/bracket-left-white.svg"
                  alt="logo"
                  className="lg:h-[80px] sm:h-[68px] h-[48px]   "
                />
              </div>

              {/*INTRO TEXT*/}

              <div className="intro lg:py-[14.5px] md:pt-[17px] md:pb-[18px] sm:py-[25px] pt-[17px] pb-[18px] text-secondary">
                <span className="text-white">vanesascode</span> portfolio
              </div>

              {/*RIGHT BRACKET*/}

              <div>
                <img
                  src="/bracket-right-white.svg"
                  alt="logo"
                  className="lg:h-[80px] sm:h-[68px]  h-[48px] "
                />
              </div>
            </div>

            {/*BOTTOM LINE*/}

            <div
              className={`${animations.lineLeft}  bg-secondary  w-full lg:h-[9.5px] sm:h-[8px] h-[6px] sm:mt-[-14px] mt-[-14.5px]`}
            ></div>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default Intro;
