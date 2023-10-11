"use client"

import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  // LIGHT MODE CONFIGURATION: 

  const [lightMode, setLightMode] = useState("light");
  const [leaveAnimation, setLeaveAnimation] = useState(false);

  useEffect(() => {
    if (lightMode === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [lightMode]);


  return (
    <DataContext.Provider value={{ showMenu, setShowMenu, lightMode, setLightMode, leaveAnimation, setLeaveAnimation }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;