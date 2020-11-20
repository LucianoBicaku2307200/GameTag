import React from "react";
import MediumCard from "../../common/Cards/MediumCard";
import { useGetGames } from "../../../App/usegetGames";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "../../loading/Loading";
import { Link } from "react-router-dom";

const MediumCardComponent = ({ title, link_url, link_api, size }) => {
  const { loading, game } = useGetGames(link_api, size);

  return (
    <div className="text-white  mb-3">
      <h4 className="text-3xl font-medium mb-2">
        <Link to={`${link_url}`}>{title}</Link>
      </h4>
      {loading ? (
        <Loading />
      ) : (
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          speed={1000}
          breakpoints={{
            1044: {
              slidesPerView: 2,
            },
          }}
        >
          {game.map((el, index) => {
            return (
              <SwiperSlide key={index}>
                <MediumCard data={el} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default MediumCardComponent;
