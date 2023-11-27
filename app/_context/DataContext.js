"use client"

import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

  // LANGUAGE CONFIGURATION:

  const [language, setLanguage] = useState(() => {
    let initialLanguageMode = "english";
    if (typeof localStorage !== "undefined") { // because some environments other than the browser, such as React Native, don't have local storage
      initialLanguageMode = localStorage.getItem("languageMode") || "english";
    }
    return initialLanguageMode;
  });

  useEffect(() => {
    if (language === "english") {
      document.querySelector("html").classList.add("english");
    } else {
      document.querySelector("html").classList.remove("english");
    }

    // Save the current language value to local storage
    localStorage.setItem("languageMode", language);
  }, [language]);


  // STATE FOR MENU:

  const [showMenu, setShowMenu] = useState(false);

  // ANIMATIONS STATE (for elements that leave the page):

  const [leaveAnimation, setLeaveAnimation] = useState(false);


  // LIGHT MODE CONFIGURATION: 

  const [lightMode, setLightMode] = useState(() => {
    let initialLightMode = "light";
    if (typeof localStorage !== "undefined") { // because some environments other than the browser, such as React Native, don't have local storage
      initialLightMode = localStorage.getItem("lightMode") || "light";
    }
    return initialLightMode;
  });

  useEffect(() => {
    if (lightMode === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }

    // Save the current lightMode value to local storage
    localStorage.setItem("lightMode", lightMode);
  }, [lightMode]);


  return (
    <DataContext.Provider value={{ showMenu, setShowMenu, lightMode, setLightMode, leaveAnimation, setLeaveAnimation, language, setLanguage }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;