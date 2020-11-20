import React, { useContext } from "react";
import { Nav, DropDown, LogoSection } from "./components";
import { DataContext } from "../datacontext/DataContext";
import CloseIcon from "../common/CloseIcon";

const Sidenav = () => {
  const dropdowns = [
    {
      title: "Browse",
      subLinks: [
        {
          subTitle: "Stores",
          link: "/stores",
        },
        {
          subTitle: "Genres",
          link: "/genres",
        },
        {
          subTitle: "Tags",
          link: "/tags",
        },
      ],
    },
    {
      title: "Platforms",
      subLinks: [
        {
          subTitle: "Pc",
          link: "/pc",
        },
        {
          subTitle: "Play Station",
          link: "/playstation",
        },
        {
          subTitle: "Xbox",
          link: "/xbox",
        },
        {
          subTitle: "Mobile",
          link: "/mobile",
        },
      ],
    },
    {
      title: "Settings",
      subLinks: [],
    },
  ];
  const { toggleMenu } = useContext(DataContext);
  const [toggle, setToggle] = toggleMenu;
  return (
    <div
      className={`${
        toggle ? "" : "hidden"
      } fixed h-screen bg-sideNav text-white flex-col w-full lg:w-1/4 lg:flex items-center justify-center md:justify-start z-20`}
    >
      {toggle ? (
        <div
          className="absolute cursor-pointer"
          style={{ top: "30px", right: "20px" }}
          onClick={() => setToggle(!toggle)}
        >
          <CloseIcon />
        </div>
      ) : (
        <></>
      )}

      <LogoSection />
      <Nav />
      <div className="flex flex-col w-full lg:w-3/4">
        {dropdowns.map((el, index) => {
          return (
            <DropDown key={index} title={el.title} subLinks={el.subLinks} />
          );
        })}
      </div>
      <div className="w-3/4 mx-auto lg:mx-0">
        <ul>
          <li className="my-3">
            <a
              className="w-full lg:w-3/4 my-3 font-semibold text-white focus:outline-none  
        hover:text-gray-500 transition ease-in-out duration-150"
              href="https://rawg.io/apidocs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs API
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
