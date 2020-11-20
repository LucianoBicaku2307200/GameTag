import React, { useEffect, useState } from "react";
import { HeroImage, GalleryContainer } from "../components";

import { getRecentGames } from "../App/GetRecentGames";

const RecentGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      const newGames = await getRecentGames();
      setGames(newGames);
      setLoading(false);
    };

    loadGames();
  }, []);

  return (
    <div>
      <HeroImage text_content="Recent Games" image_url="" />
      <GalleryContainer data={games} loading={loading} />
    </div>
  );
};

export default RecentGames;
