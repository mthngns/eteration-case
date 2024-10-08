"use client";

import React from "react";
import Link from "next/link";
import { PiBag } from "react-icons/pi";
import { TbUser } from "react-icons/tb";
import SearchBar from "../../components/SearchBar/SearchBar";
import IconButton from "../../components/IconButton/IconButton";
import { useSelector } from "react-redux";
import { getBasket } from "@/redux/features/basket/store/basket";
import {
  getFilters,
  setSearchTerm,
} from "@/redux/features/filters/store/filters";
import { useAppDispatch } from "@/redux/store";

const Header = () => {
  const dispatch = useAppDispatch();
  const basket = useSelector(getBasket);
  const filters = useSelector(getFilters);
  const basketAmount = basket.basketAmount;
  const searchTerm = filters.searchTerm;

  return (
    <header className="flex w-full justify-center sticky min-h-32 sm:min-h-fit top-0 z-20 bg-eterationBlue ">
      <div className="flex w-11/12 flex-wrap py-2 gap-y-2 sm:h-full  ">
        <div className="flex md:w-2/12 w-1/3 justify-start items-center md:order-1 order-1">
          <Link
            className="font-extrabold text-2xl text-white cursor-pointer"
            href={"/"}
          >
            <h1>Eteration</h1>
          </Link>
        </div>
        <div className="flex w-full md:w-7/12 md:order-2 order-3">
          <SearchBar
            htmlFor={"header-search-input"}
            className="lg:w-1/2 items-center "
            type="text"
            id={"header-search-input"}
            placeholder={"Search"}
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </div>
        <div className="flex w-2/3 text-sm justify-end items-center md:w-3/12 md:gap-x-4 order-2 md:order-3 text-white">
          <IconButton
            className="flex flex-wrap w-fit justify-center items-center space-x-1 active:bg-eterationBlueActive"
            icon={<PiBag size={24} />}
            title={basketAmount + "₺"}
          />
          <IconButton
            className="flex flex-wrap w-fit justify-center items-center space-x-1 active:bg-eterationBlueActive"
            icon={<TbUser size={24} />}
            title="Metehan"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
