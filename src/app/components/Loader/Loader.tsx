import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-4 h-4 bg-eterationBlue rounded-full"></div>
        <div className="w-4 h-4 bg-eterationBlue rounded-full"></div>
        <div className="w-4 h-4 bg-eterationBlue rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
