"use client"

import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <DataContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;