import React from "react";
import { HeroImage, GalleryContainer } from "../components";
import { useGetGames } from "../App/usegetGames";

const XboxGames = () => {
  const { game, loading } = useGetGames(
    "https://api.rawg.io/api/games?platforms=187&page_size=",
    15
  );
  return (
    <div>
      <div>
        <HeroImage text_content="Xbox Games" image_url="" />
        <GalleryContainer data={game} loading={loading} />
      </div>
    </div>
  );
};

export default XboxGames;
