import React from "react";
import { HeroImage, BrowseContainer } from "../components";
import { useGetBrowse } from "../App/useGetBrowse";

const Tags = () => {
  const { game, loading } = useGetBrowse("https://api.rawg.io/api/tags");
  return (
    <div>
      <HeroImage text_content="Tags" image_url="" />
      <BrowseContainer data={game} loading={loading} />
    </div>
  );
};

export default Tags;
