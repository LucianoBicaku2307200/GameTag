import React from "react";
import { useGetGames } from "../../../App/usegetGames";
import Loading from "../../loading/Loading";
import Slider from "./Slider";

const HomePageMainSlider = () => {
  const { loading, game } = useGetGames(
    "https://rawg.io/api/games?page=1&page_size=",
    5
  );
  return (
    <div className="relative">
      {loading ? <Loading /> : <Slider items={game} />}
    </div>
  );
};

export default HomePageMainSlider;
