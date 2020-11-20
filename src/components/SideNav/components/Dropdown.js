import React, { useState, useContext } from "react";
import { DataContext } from "../../datacontext/DataContext";
import { Link } from "react-router-dom";

const Dropdown = ({ title, subLinks }) => {
  const [open, setOpen] = useState(false);
  const { toggleMenu } = useContext(DataContext);
  const [toggle, setToggle] = toggleMenu;

  return (
    <div
      className="relative inline-block text-left w-3/4 mx-auto lg:mx-0 my-3"
      onClick={() => setOpen(!open)}
    >
      <span className="rounded-md shadow-sm">
        <button
          className="inline-flex justify-between w-full font-semibold text-white focus:outline-none  hover:text-gray-500 transition ease-in-out duration-150"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {title}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </span>
      <div className={`${open ? "block" : "hidden"} mt-2 w-full`}>
        <div className="py-1">
          {subLinks.map((el, index) => {
            return (
              <div key={index} onClick={() => setToggle(false)}>
                <Link to={el.link}>
                  <p className="block px-2 py-2 text-sm leading-5 text-white focus:outline-none hover:text-gray-500 transition ease-in-out duration-150">
                    {el.subTitle}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
