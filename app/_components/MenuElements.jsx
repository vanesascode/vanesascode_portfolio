import Link from "next/link";
import DataContext from "../_context/DataContext";
import { useContext, useState } from "react";
import animations from "../animations.module.css";
import { LightMode } from "../_components";
import { useRouter } from "next/navigation";

{
  /*MENU*/
}

export default function MenuElements() {
  const router = useRouter();

  const {
    setShowMenu,
    lightMode,
    leaveAnimation,
    showMenu,
    language,
    setLanguage,
  } = useContext(DataContext);

  const HandleChangeLanguage = () => {
    if (language === "english") {
      setLanguage("spanish");
      router.push("/es");
      setShowMenu(false);
    } else {
      setLanguage("english");
      router.push("/");
      setShowMenu(false);
    }
  };

  return (
    <>
      {showMenu && (
        <div className="h-screen flexCenter ">
          <div className="flex justify-start 2xs:items-start items-center flex-col gap-5 w-[200px] 2xs:w-[300px] md:w-[500px] xl:w-[800px] 1xl:w-[1000px]">
            {/*HOME LINK*/}

            {language === "english" ? (
              <Link href="/">
                <div
                  className={`heading1Menu ${
                    lightMode === "light"
                      ? "linksUnderlinesMenuWhite"
                      : "linksUnderlinesMenuBlack"
                  } relative ${animations.goDown4} cursor-pointer ${
                    leaveAnimation ? animations.leavePage1 : ""
                  }`}
                  onClick={() => {
                    setTimeout(() => {
                      setShowMenu(false);
                    }, 1000);
                  }}
                >
                  <p className="text-secondary dark:text-black pb-3 hover:text-accent dark:hover:text-accent">
                    Home
                  </p>
                </div>
              </Link>
            ) : (
              <Link href="/es">
                <div
                  className={`heading1Menu ${
                    lightMode === "light"
                      ? "linksUnderlinesMenuWhite"
                      : "linksUnderlinesMenuBlack"
                  } relative ${animations.goDown4} cursor-pointer ${
                    leaveAnimation ? animations.leavePage1 : ""
                  }`}
                  onClick={() => {
                    setTimeout(() => {
                      setShowMenu(false);
                    }, 1000);
                  }}
                >
                  <p className="text-secondary dark:text-black pb-3 hover:text-accent dark:hover:text-accent">
                    Inicio
                  </p>
                </div>
              </Link>
            )}

            {/*PROJECTS LINK*/}

            {language === "english" ? (
              <Link href="/projects">
                <div
                  className={`heading1Menu ${
                    lightMode === "light"
                      ? "linksUnderlinesMenuWhite"
                      : "linksUnderlinesMenuBlack"
                  } relative ${animations.goDown3} cursor-pointer ${
                    leaveAnimation ? animations.leavePage2 : ""
                  }`}
                  onClick={() => {
                    setTimeout(() => {
                      setShowMenu(false);
                    }, 500);
                  }}
                >
                  <p className="text-secondary dark:text-black pb-3  hover:text-accent dark:hover:text-accent">
                    {" "}
                    Projects
                  </p>
                </div>
              </Link>
            ) : (
              <Link href="/proyectos">
                <div
                  className={`heading1Menu ${
                    lightMode === "light"
                      ? "linksUnderlinesMenuWhite"
                      : "linksUnderlinesMenuBlack"
                  } relative ${animations.goDown3} cursor-pointer ${
                    leaveAnimation ? animations.leavePage2 : ""
                  }`}
                  onClick={() => {
                    setTimeout(() => {
                      setShowMenu(false);
                    }, 500);
                  }}
                >
                  <p className="text-secondary dark:text-black pb-3  hover:text-accent dark:hover:text-accent">
                    {" "}
                    Proyectos
                  </p>
                </div>
              </Link>
            )}

            {/*ABOUT LINK*/}

            {language === "english" ? (
              <Link href="/about">
                <div
                  className={`heading1Menu ${
                    lightMode === "light"
                      ? "linksUnderlinesMenuWhite"
                      : "linksUnderlinesMenuBlack"
                  } relative ${animations.goDown2} cursor-pointer ${
                    leaveAnimation ? animations.leavePage3 : ""
                  }`}
                  onClick={() => {
                    setTimeout(() => {
                      setShowMenu(false);
                    }, 1000);
                  }}
                >
                  <p className="text-secondary dark:text-black pb-3  hover:text-accent dark:hover:text-accent">
                    About
                  </p>
                </div>
              </Link>
            ) : (
              <Link href="/sobre-mi">
                <div
                  className={`heading1Menu ${
                    lightMode === "light"
                      ? "linksUnderlinesMenuWhite"
                      : "linksUnderlinesMenuBlack"
                  } relative ${animations.goDown2} cursor-pointer ${
                    leaveAnimation ? animations.leavePage3 : ""
                  }`}
                  onClick={() => {
                    setTimeout(() => {
                      setShowMenu(false);
                    }, 1000);
                  }}
                >
                  <p className="text-secondary dark:text-black pb-3  hover:text-accent dark:hover:text-accent">
                    Sobre mí
                  </p>
                </div>
              </Link>
            )}

            {/*CONTACT LINK*/}

            {language === "english" ? (
              <Link href="/contact">
                <div
                  className={`heading1Menu ${
                    lightMode === "light"
                      ? "linksUnderlinesMenuWhite"
                      : "linksUnderlinesMenuBlack"
                  } relative ${animations.goDown1} cursor-pointer ${
                    leaveAnimation ? animations.leavePage4 : ""
                  }`}
                  onClick={() => {
                    setTimeout(() => {
                      setShowMenu(false);
                    }, 1000);
                  }}
                >
                  <p className="text-secondary dark:text-black pb-3  hover:text-accent dark:hover:text-accent">
                    Contact
                  </p>
                </div>
              </Link>
            ) : (
              <Link href="/contacto">
                <div
                  className={`heading1Menu ${
                    lightMode === "light"
                      ? "linksUnderlinesMenuWhite"
                      : "linksUnderlinesMenuBlack"
                  } relative ${animations.goDown1} cursor-pointer ${
                    leaveAnimation ? animations.leavePage4 : ""
                  }`}
                  onClick={() => {
                    setTimeout(() => {
                      setShowMenu(false);
                    }, 1000);
                  }}
                >
                  <p className="text-secondary dark:text-black pb-3  hover:text-accent dark:hover:text-accent">
                    Contacto
                  </p>
                </div>
              </Link>
            )}

            {/*BLOG LINK*/}

            {language === "english" ? (
              <Link href="/blog">
                <div
                  className={`heading1Menu ${
                    lightMode === "light"
                      ? "linksUnderlinesMenuWhite"
                      : "linksUnderlinesMenuBlack"
                  } relative ${animations.goDown1} cursor-pointer ${
                    leaveAnimation ? animations.leavePage4 : ""
                  }`}
                  onClick={() => {
                    setTimeout(() => {
                      setShowMenu(false);
                    }, 1000);
                  }}
                >
                  <p className="text-secondary dark:text-black pb-3  hover:text-accent dark:hover:text-accent">
                    Blog
                  </p>
                </div>
              </Link>
            ) : (
              <Link href="/blog-es">
                <div
                  className={`heading1Menu ${
                    lightMode === "light"
                      ? "linksUnderlinesMenuWhite"
                      : "linksUnderlinesMenuBlack"
                  } relative ${animations.goDown1} cursor-pointer ${
                    leaveAnimation ? animations.leavePage4 : ""
                  }`}
                  onClick={() => {
                    setTimeout(() => {
                      setShowMenu(false);
                    }, 1000);
                  }}
                >
                  <p className="text-secondary dark:text-black pb-3  hover:text-accent dark:hover:text-accent">
                    Blog
                  </p>
                </div>
              </Link>
            )}

            <div className="mt-3 flex items-center heading2Menu gap-5 ">
              <div className={`${animations.goUp1}`}>
                {" "}
                <p
                  className={`text-secondary dark:text-primary cursor-pointer ${
                    animations.rotateWhenHovered
                  } ${leaveAnimation ? animations.leavePageDown1 : ""}`}
                  onClick={HandleChangeLanguage}
                >
                  {language === "english" ? "SP" : "EN"}
                </p>
              </div>

              <LightMode />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
