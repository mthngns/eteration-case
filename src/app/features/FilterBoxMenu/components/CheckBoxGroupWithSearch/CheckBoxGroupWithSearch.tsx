import React, { useEffect, useState } from "react";
import { FaAngleDown, FaCheck } from "react-icons/fa";
import SearchBar from "@/app/components/SearchBar/SearchBar";
import IconButton from "@/app/components/IconButton/IconButton";

interface CheckboxGroupProps {
  title: string;
  options: string[];
  selectedValues: string[];
  onChange: (selectedValues: string) => void;
}

const CheckboxGroupWithSearch: React.FC<CheckboxGroupProps> = ({
  title,
  options,
  selectedValues,
  onChange,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMenuToggle = () => {
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
        title={title + ` (${selectedValues.length}/${options.length})`}
        onClick={handleMenuToggle}
      />
      {isMenuOpen && (
        <div className="flex flex-col border shadow-md p-2 space-y-3 bg-white">
          <SearchBar
            htmlFor={"checkbox-group-search-input" + title}
            type="text"
            id={title.toLocaleLowerCase() + "-search-input"}
            placeholder={"Search"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex flex-col space-y-3 h-40 overflow-scroll">
            {filteredOptions.map((option) => (
              <label
                key={option}
                className="inline-flex items-center cursor-pointer "
              >
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedValues.includes(option)}
                  onChange={() => onChange(option)}
                  className="appearance-none"
                />
                <div
                  className={`flex w-4 h-4 border border-eterationBlue items-center justify-center ${
                    selectedValues.includes(option)
                      ? "bg-eterationBlue"
                      : "bg-white"
                  }`}
                >
                  {selectedValues.includes(option) && (
                    <FaCheck className="text-white" size={12} />
                  )}
                </div>
                <span className="ml-2 text-gray-700 truncate">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckboxGroupWithSearch;
