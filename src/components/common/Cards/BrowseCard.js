import React, { useState } from "react";

const BrowseCard = ({ data }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="flex justify-center items-center w-full  relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${data.image_background})`,
          height: "300px",
        }}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full ${
            hover ? "opacity-75" : "opacity-50"
          } bg-gray-900  transition-all duration-500 ease-in-out`}
        ></div>
        <div className="text-center z-10">
          <h4 className="text-xl font-medium">{data.name}</h4>
          <p>{data.games_count} games</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
