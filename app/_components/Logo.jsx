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

          <img
            src={
              lightMode === "light"
                ? "/bracket-left-white.svg"
                : "/bracket-left-black.svg"
            }
            alt="logo"
            className="size-brackets-logo"
          />

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
