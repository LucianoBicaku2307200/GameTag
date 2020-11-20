import React from "react";
import { HeroImage, GalleryContainer } from "../components";
import { useGetGames } from "../App/usegetGames";

const PsGames = () => {
  const { game, loading } = useGetGames(
    "https://api.rawg.io/api/games?platforms=187&page_size=",
    15
  );
  return (
    <div>
      <HeroImage text_content="Pc Games" image_url="" />
      <GalleryContainer data={game} loading={loading} />
    </div>
  );
};

export default PsGames;
