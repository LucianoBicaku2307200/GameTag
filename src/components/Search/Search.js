import React, { useContext } from "react";
import MenuIcon from "../common/MenuIcon";
import SearchIcon from "../common/SearchIcon";
import { DataContext } from "../datacontext/DataContext";

const Search = () => {
  const { toggleMenu } = useContext(DataContext);
  const [toggle, setToggle] = toggleMenu;
  return (
    <div className="w-full py-8 pl-6 sm:pl-16 pr-4 flex flex-row justify-between">
      <form className="flex w-3/4">
        <input
          className="w-full lg:max-w-xs text-sm h-8 p-2 outline-none bg-transparent text-white"
          style={{ border: "0.5px solid #ADA7A7", borderRadius: "9px" }}
          placeholder="Search"
        />
        <button className="focus:outline-none mx-3">
          <SearchIcon />
        </button>
      </form>
      <div className="flex  lg:hidden" onClick={() => setToggle(!toggle)}>
        <button className="focus:outline-none">
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};

export default Search;
