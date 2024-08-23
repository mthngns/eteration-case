"use client";

import { useTheme } from "@/context/ThemeContext";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme + "w-screen flex flex-col h-full min-h-screen bg-eterationSmoke"
      }
    >
      {children}
    </div>
  );
};

export default MainLayout;
