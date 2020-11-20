import React from "react";
import { HeroImage, GalleryContainer } from "../components";
import { useGetGames } from "../App/usegetGames";

const Games = () => {
  const { game, loading } = useGetGames(
    "https://api.rawg.io/api/games?&page_size=",
    15
  );
  return (
    <div>
      <div>
        <HeroImage text_content="All Games" image_url="" />
        <GalleryContainer data={game} loading={loading} />
      </div>
    </div>
  );
};

export default Games;
