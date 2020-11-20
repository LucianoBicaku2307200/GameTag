import React from "react";
import { HeroImage, BrowseContainer } from "../components";
import { useGetBrowse } from "../App/useGetBrowse";

const Genres = () => {
  const { game, loading } = useGetBrowse("https://api.rawg.io/api/genres");
  return (
    <div>
      <HeroImage text_content="Genres" image_url="" />
      <BrowseContainer data={game} loading={loading} />
    </div>
  );
};

export default Genres;
