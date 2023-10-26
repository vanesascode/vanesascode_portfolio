import Link from "next/link";
import DataContext from "../_context/DataContext";
import { useContext } from "react";
import animations from "../animations.module.css";
import { LightMode } from "../_components";


{/*MENU*/ }

export default function MenuElements() {

  const { setShowMenu, lightMode, leaveAnimation, showMenu } = useContext(DataContext);

  //when navbar was not fixed:mt-[-50px] sm:mt-[-110px] md:mt-[-120px] lg:mt-[-130px] xl:mt-[-140px]

  return (
    <>

      {showMenu && (


        <div className='h-screen flexCenter '>


          <div className="flex justify-start items-start flex-col gap-5 w-[200px] md:w-[500px] xl:w-[1000px]">

            <a href="/" >
              <div className={`heading1 ${lightMode === "light" ? "linksUnderlinesMenuWhite" : "linksUnderlinesMenuBlack"} relative ${animations.goDown4} cursor-crosshair ${leaveAnimation ? animations.leavePage1 : ""}`} onClick={() => {
                setTimeout(() => {

                  setShowMenu(false);

                }, 1000);

              }}>
                <p className="text-secondary dark:text-black pb-3">Home</p>
              </div>
            </a>

            <Link href="/projects">
              <div className={`heading1 ${lightMode === "light" ? "linksUnderlinesMenuWhite" : "linksUnderlinesMenuBlack"} relative ${animations.goDown3} cursor-crosshair ${leaveAnimation ? animations.leavePage2 : ""}`} onClick={() => {
                setTimeout(() => {
                  setShowMenu(false);
                }, 500);
              }}>

                <p className="text-secondary dark:text-black pb-3"> Projects</p>

              </div>
            </Link>


            <Link href="/about">
              <div className={`heading1 ${lightMode === "light" ? "linksUnderlinesMenuWhite" : "linksUnderlinesMenuBlack"} relative ${animations.goDown2} cursor-crosshair ${leaveAnimation ? animations.leavePage3 : ""}`} onClick={() => {
                setTimeout(() => {
                  setShowMenu(false);

                }, 1000);
              }}>
                <p className="text-secondary dark:text-black pb-3">About</p>
              </div>

            </Link>


            <Link href="/contact">
              <div className={`heading1 ${lightMode === "light" ? "linksUnderlinesMenuWhite" : "linksUnderlinesMenuBlack"} relative ${animations.goDown1} cursor-crosshair ${leaveAnimation ? animations.leavePage4 : ""}`} onClick={() => {
                setTimeout(() => {
                  setShowMenu(false);

                }, 1000);
              }}>
                <p className="text-secondary dark:text-black pb-3">Contact</p>
              </div>

            </Link>

            <Link href="/blog">
              <div className={`heading1 ${lightMode === "light" ? "linksUnderlinesMenuWhite" : "linksUnderlinesMenuBlack"} relative ${animations.goDown1} cursor-crosshair ${leaveAnimation ? animations.leavePage4 : ""}`} onClick={() => {
                setTimeout(() => {
                  setShowMenu(false);

                }, 1000);
              }}>
                <p className="text-secondary dark:text-black pb-3">Blog</p>
              </div>

            </Link>

            <div className="mt-3 flex items-center heading2 gap-4 ">
              <div className={`${animations.goUp1}`}> <p className={`text-secondary dark:text-primary ${animations.rotateWhenHovered} ${leaveAnimation ? animations.leavePageDown1 : ""}`}>SP</p></div>
              <div className={`${animations.goUp1}`}> <p className={`text-secondary dark:text-primary ${animations.rotateWhenHovered} ${leaveAnimation ? animations.leavePageDown1 : ""}`}>FR</p></div>
              <LightMode />
            </div>
          </div>

        </div>

      )}
    </>
  )
}

