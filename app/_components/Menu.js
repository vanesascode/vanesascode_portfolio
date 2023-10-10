import Link from "next/link";
import DataContext from "../_context/DataContext";
import { useContext } from "react";
import animations from "../animations.module.css";

{/*MENU*/ }

import React from 'react'

export default function Menu() {

  const { showMenu, setShowMenu, lightMode } = useContext(DataContext);

  return (

    <div className="flex justify-start items-start flex-col gap-10 ">


      <Link href="/">

        <div className={`heading1 ${lightMode === "light" ? "linksUnderlinesMenuWhite" : "linksUnderlinesMenuBlack"} relative ${animations.goDownMenu4} cursor-crosshair`} onClick={() => {
          setTimeout(() => {
            setShowMenu(false);

          }, 900);
        }}>
          <p className="text-secondary dark:text-black pb-3">Home</p>
        </div>

      </Link>


      <Link href="/projects">
        <div className={`heading1 ${lightMode === "light" ? "linksUnderlinesMenuWhite" : "linksUnderlinesMenuBlack"} relative ${animations.goDownMenu3} cursor-crosshair`} onClick={() => {
          setTimeout(() => {
            setShowMenu(false);

          }, 900);
        }}>

          <p className="text-secondary dark:text-black pb-3"> Projects</p>

        </div>
      </Link>


      <Link href="/about">
        <div className={`heading1 ${lightMode === "light" ? "linksUnderlinesMenuWhite" : "linksUnderlinesMenuBlack"} relative ${animations.goDownMenu2} cursor-crosshair`} onClick={() => {
          setTimeout(() => {
            setShowMenu(false);

          }, 900);
        }}>
          <p className="text-secondary dark:text-black pb-3">About</p>
        </div>

      </Link>


      <Link href="/contact">
        <div className={`heading1 ${lightMode === "light" ? "linksUnderlinesMenuWhite" : "linksUnderlinesMenuBlack"} relative ${animations.goDownMenu1} cursor-crosshair`} onClick={() => {
          setTimeout(() => {
            setShowMenu(false);

          }, 900);
        }}>
          <p className="text-secondary dark:text-black pb-3">Contact</p>
        </div>

      </Link>

      <Link href="/blog">
        <div className={`heading1 ${lightMode === "light" ? "linksUnderlinesMenuWhite" : "linksUnderlinesMenuBlack"} relative ${animations.goDownMenu1} cursor-crosshair`} onClick={() => {
          setTimeout(() => {
            setShowMenu(false);

          }, 900);
        }}>
          <p className="text-secondary dark:text-black pb-3">Blog</p>
        </div>

      </Link>
    </div>

  )
}


