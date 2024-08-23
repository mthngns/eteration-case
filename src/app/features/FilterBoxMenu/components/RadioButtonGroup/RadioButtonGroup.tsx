import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { SortBy, SortMethod } from "@/app/lib/types";
import { IoIosRadioButtonOff } from "react-icons/io";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import IconButton from "@/app/components/IconButton/IconButton";

interface RadioButtonGroupProps {
  title: string;
  options: SortBy;
  selectedValue: SortMethod;
  onChange: (value: SortMethod) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  title,
  options,
  selectedValue,
  onChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleSortByToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col w-full gap-y-2 text-xs">
      <IconButton
        className={`flex items-center w-full justify-between gap-x-1 bg-gray-200 p-2 active:bg-gray-300`}
        iconPosition="right"
        icon={
          <FaAngleDown
            className={`${
              isMenuOpen && "rotate-180"
            } transition duration-300 ease-in-out`}
            size={16}
          />
        }
        title={title}
        onClick={handleSortByToggle}
      />
      {isMenuOpen && (
        <div className="flex flex-col p-2 w-full justify-center space-y-2 overflow-hidden text-xs border bg-white shadow-sm">
          {Object.keys(options).map((label) => {
            const item = options[label as keyof SortBy] as SortMethod;
            return (
              <label
                key={label}
                className="inline-flex items-center w-full cursor-pointer overflow-hidden"
              >
                <input
                  type="radio"
                  id={label + "-radio-button"}
                  name={label + "-label"}
                  value={label}
                  checked={
                    JSON.stringify(selectedValue) === JSON.stringify(item)
                  }
                  onChange={() => onChange(item)}
                  className="appearance-none"
                />
                {JSON.stringify(selectedValue) === JSON.stringify(item) ? (
                  <MdOutlineRadioButtonChecked className="text-eterationBlue w-5 h-5" />
                ) : (
                  <IoIosRadioButtonOff className="text-eterationBlue w-5 h-5" />
                )}
                <span className="ml-1 text-gray-700 text-nowrap w-full">
                  {label}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RadioButtonGroup;
