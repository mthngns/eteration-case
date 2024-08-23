"use client";

import React, { ReactNode } from "react";
import Header from "@/app/features/Header/Header";

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
