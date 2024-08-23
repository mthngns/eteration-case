"use client";

import Header from "@/app/features/Header/Header";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={"w-screen flex flex-col h-full min-h-screen bg-eterationSmoke"}
    >
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
