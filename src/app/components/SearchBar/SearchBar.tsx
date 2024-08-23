import React, { InputHTMLAttributes } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor?: string;
}

const SearchBar:React.FC<SearchBarProps> = ({onClick,...props}) => {
    const defaultClasses = "flex w-full items-center";
    const combinedClasses = `${defaultClasses} ${props.className}`;
  return (
    <div className={combinedClasses}>
      <label htmlFor={props.htmlFor} className="sr-only">
        Search
      </label>
      <div className="relative flex items-center w-full">
        <AiOutlineSearch className="absolute left-2" size={20} />
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          className="flex w-full p-2 pl-10 text-xs rounded-sm border"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;

