import Link from "next/link";
import animations from "../animations.module.css";

import { useContext } from "react";

import DataContext from "../_context/DataContext";

export default function Logo() {
  const { lightMode, setShowMenu } = useContext(DataContext);

  return (
    <>
      <a href="/">
        <div
          className={`flex items-center ${animations.rotateWhenHovered} cursor-pointer`}
          onClick={() => {
            setTimeout(() => {
              setShowMenu(false);
            }, 1000);
          }}
        >
          {/* LEFT BRACKET */}

          {/*Trying to solve the problem that if you refresh the page, the color of the brackets become white even though you are in "dark" mode*/}

          {lightMode === "light" && (
            <img
              src="/bracket-left-white.svg"
              alt="logo"
              className="size-brackets-logo"
            />
          )}

          {lightMode === "dark" && (
            <img
              src="/bracket-left-black.svg"
              alt="logo"
              className="size-brackets-logo"
            />
          )}

          {/* V */}

          <span className="logo ">v</span>

          {/* RIGHT BRACKET */}

          <img
            src={
              lightMode === "light"
                ? "/bracket-right-white.svg"
                : "/bracket-right-black.svg"
            }
            alt="logo"
            className="size-brackets-logo"
          />
        </div>
      </a>
    </>
  );
}
