import React from "react";
import { HeroImage, GalleryContainer } from "../components";

import { useGetGames } from "../App/usegetGames";

const TopGames = () => {
  const { game, loading } = useGetGames(
    "https://api.rawg.io/api/games?ordering=-added&page_size=",
    15
  );
  return (
    <div>
      <div>
        <HeroImage text_content="Top Games" image_url="" />
        <GalleryContainer data={game} loading={loading} />
      </div>
    </div>
  );
};

export default TopGames;
