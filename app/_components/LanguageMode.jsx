import React from "react";
import DataContext from "../_context/DataContext";
import { useContext } from "react";
import animations from "../animations.module.css";
import { useRouter } from "next/navigation";

const LanguageMode = () => {
  const { leaveAnimation, language, setLanguage, setShowMenu } =
    useContext(DataContext);

  const router = useRouter();

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
    <div className={`${animations.goUp1}`}>
      {" "}
      <p
        className={`text-secondary dark:text-primary cursor-pointer ${
          animations.rotateWhenHovered
        } ${leaveAnimation ? animations.leavePageDown1 : ""}`}
        onClick={HandleChangeLanguage}
      >
        {language === "english" ? "ES" : "EN"}
      </p>
    </div>
  );
};

export default LanguageMode;
