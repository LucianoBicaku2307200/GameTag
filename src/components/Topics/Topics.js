import React from "react";
import { Link } from "react-router-dom";
const Topics = () => {
  const topics = [
    { content: "Cyber_Punk77", link_url: "/" },
    { content: "Witcher 3", link_url: "/" },
    { content: "League Of Leagends", link_url: "/" },
    { content: "Dota", link_url: "/" },
    { content: "Multiplayer", link_url: "/" },
  ];

  return (
    <div>
      <ul className="hidden sm:flex py-4 px-6 text-white text-xs md:text-lg flex-wrap border-b border-white">
        {topics.map((el, index) => {
          return (
            <Link key={index} to={el.link_url}>
              <li className="py-2 px-4 border border-white rounded m-3">
                {el.content}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Topics;
