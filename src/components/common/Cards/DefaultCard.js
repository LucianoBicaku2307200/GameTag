import React, { useState, useRef } from "react";
import Rating from "../Rating";
import Stop from "../Stop";
import { Link } from "react-router-dom";
import Arrow from "../Arrow";
import { Pc, Android, Ios, Nintendo, PlayStation, Xbox } from "../platforms";

const DefaultCard = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  let video = useRef(null);

  function platform(id) {
    if (id === 1)
      return (
        <Link to={`/platform/${id}`}>
          <Xbox />
        </Link>
      );
    else if (id === 2)
      return (
        <Link to={`/platform/${id}`}>
          {" "}
          <PlayStation />
        </Link>
      );
    else if (id === 3)
      return (
        <Link to={`/platform/${id}`}>
          {" "}
          <Ios />
        </Link>
      );
    else if (id === 4)
      return (
        <Link to={`/platform/${id}`}>
          {" "}
          <Pc />
        </Link>
      );
    else if (id === 7)
      return (
        <Link to={`/platform/${id}`}>
          {" "}
          <Nintendo />
        </Link>
      );
    else if (id === 21)
      return (
        <Link to={`/platform/${id}`}>
          {" "}
          <Android />
        </Link>
      );
  }
  const StopVideo = () => {
    if (video != null) {
      setShowVideo(false);
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="w-full relative sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col p-2 rounded-md">
      <div className="bg-black">
        <div className="relative w-full h-40">
          <img
            src={data.background_image}
            alt={data.name}
            className={`w-full h-full object-cover object-center transition-all duration-300 ease-linear ${
              showVideo ? "opacity-0" : "opacity-100"
            }`}
          />
          {data.clip ? (
            <video
              className={`w-full h-full transition-all duration-500 ease-linear absolute top-0 left-0  ${
                showVideo ? "opacity-100" : "opacity-0"
              }`}
              ref={(el) => (video = el)}
              src={data.clip.clips.full}
            />
          ) : (
            <></>
          )}

          {data.clip ? (
            <div className="relative">
              <div
                onClick={() => {
                  setShowVideo(!showVideo);
                  if (!showVideo) video.play();
                  else {
                    StopVideo();
                  }
                }}
                className="hidden md:block absolute bg-yellow-theme z-10 cursor-pointer w-8 h-8 hover:shadow-2xl 
            hover:scale-110 transform transition-all duration-700 ease-in-out border bottom-0 border-yellow-theme hover:bg-transparent rounded-full"
                style={{ right: "20px", transform: "translateY(50%)" }}
              >
                {showVideo ? <Stop /> : <Arrow />}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div
          className="absolute bg-black px-3 py-1 rounded-md"
          style={{ top: "11px", left: "14px" }}
        >
          <Rating data={data.rating} />
        </div>
        <div className="p-3 grid grid-cols-1 gap-3">
          <p className="font-light text-xs">{data.released}</p>
          <h3 className="font-bold text-lg">{data.name}</h3>
          <div className="text-xs font-light flex flex-wrap">
            <span className="font-bold">Genres :</span>
            {data.genres.map((el, index) => {
              return (
                <p className="flex items-center px-1" key={index}>
                  {el.name}
                </p>
              );
            })}
          </div>
          <div className="flex">
            <Link to={`/game/${data.id}`}>
              <div className="bg-yellow-theme border border-yellow-theme text-center font-light text-sm rounded-sm px-2 py-1 hover:bg-transparent transition-all duration-500 ease-in-out">
                More Info
              </div>
            </Link>
          </div>

          <div className="border-t border-gray-600 pt- flex flex-wrap">
            {data.parent_platforms.map((el, index) => (
              <div key={index} className="p-1 mt-1">
                {platform(el.platform.id)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultCard;
