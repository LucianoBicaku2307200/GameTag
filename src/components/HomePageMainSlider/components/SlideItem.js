import React, { useState, useRef } from "react";
import Button from "../../common/Button";
import Arrow from "../../common/Arrow";
import Stop from "../../common/Stop";

const SlideItem = ({ item, index }) => {
  const [showVideo, setShowVideo] = useState(false);
  let video = useRef(null);

  const StopVideo = () => {
    if (video != null) {
      setShowVideo(false);
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div style={{ height: "634px" }} className="flex">
      {/* background toggle video/img */}
      <div
        className={`w-full h-full transition ease-in-out duration-1000 ${
          showVideo ? "opcity-100" : "opacity-0"
        }`}
      >
        <video
          className="w-full h-full"
          ref={(el) => (video = el)}
          src={item.clip.clips.full}
        />
      </div>
      <div
        className={`w-full h-full absolute top-0 left-0 bg-center bg-no-repeat bg-cover ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${item.background_image})`,
          zIndex: "-1",
        }}
      ></div>

      {/* content*/}
      <div
        className="w-full lg:w-10/12 absolute bottom-0  left-0 font-medium text-white p-5 lg:m-3"
        style={{
          background: "rgba(39, 37, 37, 0.69)",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="relative">
          <div
            className="w-full  justify-between absolute hidden md:flex"
            style={{ transform: "translateY(-135%)" }}
          >
            <div className="mb-2">
              <button
                className="prev mr-3"
                onClick={() => {
                  StopVideo();
                }}
              >
                <Arrow />
              </button>
              <button
                className="next"
                onClick={() => {
                  StopVideo();
                }}
              >
                <Arrow />
              </button>
            </div>
            <div className="flex items-center">
              <Button link_url="/dsf" content="Buy Now" />
              <button
                className="play-btn"
                onClick={() => {
                  setShowVideo(!showVideo);
                  if (!showVideo) video.play();
                  else {
                    StopVideo();
                  }
                }}
              >
                {showVideo ? <Stop /> : <Arrow />}
              </button>
            </div>
          </div>
          <div className="flex mb-2">
            <h3 className="text-xl md:text-3xl">{item.name}</h3>
            <div className="flex items-center justify-center mx-5">
              <span className="bg-yellow-theme p-1 text-sm rounded-sm">
                {item.rating}
              </span>
            </div>
          </div>

          <ul className="flex mt-2 flex-wrap text-sm md:text-base">
            {item.parent_platforms.map((el, index) => {
              return (
                <li className="m-2" key={index}>
                  {el.platform.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="hidden text-right absolute bottom-0 right-0 lg:block lg:w-2/12 text-lg font-medium text-white p-5">
        0{index + 1}/05
      </div>
    </div>
  );
};

export default SlideItem;
