import React from "react";
import { PiCloudWarning } from "react-icons/pi";

const ErrorCard = () => {
  return (
    <div className="absolute cursor-text flex flex-col gap-3 items-center text-center align-middle justify-center inset-x-0 top-1/3 w-3/4 md:w-2/5 mx-auto -mt-1 text-red-600">
      <PiCloudWarning className="w-24 h-24 self-center" />
      <h2 className="text-lg font-semibold">Error!</h2>
      <p className="cursor-text text-red-500">
        Something went wrong while fetching data!
      </p>
    </div>
  );
};

export default ErrorCard;
