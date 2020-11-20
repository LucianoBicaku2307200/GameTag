import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../common/Rating";

const MediumCard = ({ data }) => {
  return (
    <div className="p-2">
      <div
        className="inline-flex p-2  bg-center bg-cover"
        style={{
          borderRadius: "27px",
          height: "300px",
        }}
      >
        <div
          className="absolute top-0 transform scale-95 w-full h-full left-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${data.background_image})`,
            filter: "grayscale(85%) blur(3px) brightness(0.1)",
          }}
        ></div>
        <div className="w-7/12 h-full relative -mt-5 ml-2 shadow-lg">
          <img
            style={{ borderRadius: "27px" }}
            className=" object-cover object-center w-full h-full "
            src={data.background_image}
            alt={data.slug}
          />
        </div>

        <div className="w-5/12 z-10 flex items-center">
          <div className="w-10/12 mx-auto grid grid-cols-1 gap-3">
            <h4 className="text-white hover:text-yellow-theme font-medium text-xl">
              <Link to={"/"}>{data.name}</Link>
            </h4>
            <Rating data={data.rating} />
            <div className="flex flex-wrap -mx-2">
              {data.genres.map((el, index) => {
                return (
                  <p
                    key={index}
                    className="px-2 font-light text-sm sm:font-normal"
                  >
                    {el.name}
                  </p>
                );
              })}
            </div>
            <Link to={"/"}>
              <div
                className="bg-yellow-theme border border-yellow-theme py-1 mx-auto
                    transition duration-500 ease-in-out hover:bg-transparent 
                    hover:border-white w-24 text-center"
              >
                Store
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
