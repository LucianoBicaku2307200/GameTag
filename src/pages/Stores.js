import React from "react";
import { HeroImage, BrowseContainer } from "../components";
import { useGetBrowse } from "../App/useGetBrowse";

const Stores = () => {
  const { game, loading } = useGetBrowse("https://api.rawg.io/api/stores");
  return (
    <div>
      <HeroImage text_content="Stores" image_url="" />
      <BrowseContainer data={game} loading={loading} />
    </div>
  );
};

export default Stores;
