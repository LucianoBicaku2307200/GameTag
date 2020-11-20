import React from "react";
import { HeroImage, GalleryContainer } from "../components";
import { useGetGames } from "../App/usegetGames";

const Mobile = () => {
  const { game, loading } = useGetGames(
    "https://api.rawg.io/api/games?platforms=21,3&page_size=",
    15
  );
  return (
    <div>
      <HeroImage text_content="Mobile Games" image_url="" />
      <GalleryContainer data={game} loading={loading} />
    </div>
  );
};

export default Mobile;
