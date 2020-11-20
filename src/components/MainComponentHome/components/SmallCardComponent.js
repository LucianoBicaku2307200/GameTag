import React from "react";
import SmallCard from "../../common/Cards/SmallCard";
import { useGetGames } from "../../../App/usegetGames";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "../../loading/Loading";
import { Link } from "react-router-dom";

const SmallCardComponent = ({ title, link_url, link_api, size }) => {
  const { loading, game } = useGetGames(link_api, size);

  return (
    <div className="text-white">
      <h4 className="text-3xl font-medium mb-2">
        <Link to={`${link_url}`}>{title}</Link>
      </h4>
      {loading ? (
        <Loading />
      ) : (
        <Swiper
          spaceBetween={5}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          speed={1000}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
        >
          {game.map((el, index) => {
            return (
              <SwiperSlide key={index}>
                <SmallCard data={el} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default SmallCardComponent;
