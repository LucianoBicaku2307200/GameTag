import React, { useState, useRef } from "react";
import Arrow from "../../common/Arrow";
import Rating from "../../common/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Stop from "../../common/Stop";

const BigCard = ({ data }) => {
  const [imageSrc, setImageSrc] = useState(data.background_image);
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
    <div style={{ height: "410px", width: "95%" }} className="mx-auto relative">
      <div
        className="absolute h-full w-full md:pl-8 px-4 py-10 flex justify-center md:justify-between flex-col z-10"
        style={{
          background:
            "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.66) 48.51%, rgba(0, 0, 0, 0) 64.12%)",
        }}
      >
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
          <h4 className="font-medium text-xl">{data.name}</h4>
          <Rating data={data.rating} />
          <div className="flex flex-wrap -mx-3 font-light text-sm">
            {data.genres.map((el, index) => {
              return (
                <p key={index} className="px-3">
                  {el.name}
                </p>
              );
            })}
          </div>
          <div className="inline-flex">
            <p className="mr-2">Stores:</p>
            <div className="flex flex-wrap">
              {data.stores.slice(0, 3).map((el, index) => {
                return (
                  <p key={index} className="px-1">
                    {el.store.name}
                  </p>
                );
              })}
            </div>
          </div>
          <Link to="/">
            <div
              className="bg-yellow-theme border border-yellow-theme py-1 rounded-md
                   transition duration-500 ease-in-out hover:bg-transparent text-center
                    hover:border-white w-32"
            >
              More Info
            </div>
          </Link>
        </div>
        <div className="hidden md:block w-8/12">
          <Swiper
            loop
            spaceBetween={5}
            slidesPerView={4}
            scrollbar={{ draggable: true }}
            speed={700}
          >
            {data.short_screenshots.map((el, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="h-full rounded-lg">
                    <img
                      onClick={() => {
                        setImageSrc(el.image);
                        StopVideo();
                      }}
                      alt={el.name}
                      src={el.image}
                      className="object-cover object-center cursor-pointer transform hover:scale-105 
                      overflow-hidden transition-all duration-500 ease-out"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div
        className="relative h-full ml-auto w-full md:w-8/12 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${showVideo ? "" : imageSrc})` }}
      >
        <div
          className={`w-full h-full transition duration-1000 ease-in-out hidden md:block ${
            showVideo ? "opcity-100" : "opacity-0"
          }`}
        >
          <video
            className="w-full h-full"
            ref={(el) => (video = el)}
            src={data.clip.clips.full}
          />
        </div>
        <div
          onClick={() => {
            setShowVideo(!showVideo);
            if (!showVideo) video.play();
            else {
              StopVideo();
            }
          }}
          className="hidden md:block absolute bg-yellow-theme z-10 cursor-pointer w-16 h-16 hover:shadow-2xl 
            hover:scale-110 transform transition-all duration-700 ease-in-out border border-yellow-theme hover:bg-transparent rounded-full"
        >
          {showVideo ? <Stop /> : <Arrow />}
        </div>
      </div>
    </div>
  );
};

export default BigCard;
