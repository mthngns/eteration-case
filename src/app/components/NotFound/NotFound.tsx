import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 text-center p-4">
      <MdOutlineErrorOutline className="text-6xl text-red-500 mb-4" />
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Product Not Found
      </h1>
      <p className="text-lg text-gray-700">
        The product you are looking for does not exist or has been removed.
      </p>
    </div>
  );
};

export default NotFound;
