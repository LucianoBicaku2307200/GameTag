import React from "react";
import {
  MediumCardContainer,
  SmallCardContainer,
  BigCardContainer,
} from "./components";

const Container = () => {
  return (
    <div className="text-white py-3 pl-3 md:py-5 md:pl-6">
      <SmallCardContainer
        title="Recent"
        link_api="https://api.rawg.io/api/games?dates=2020-10-01,2020-11-01&page_size="
        link_url="recent"
        size={10}
      />
      <MediumCardContainer
        title="Top Ranking"
        link_api="https://api.rawg.io/api/games?dates=2019-01-01,2020-12-31&ordering=-rating&page_size="
        link_url="/"
        size={10}
      />
      <SmallCardContainer
        title="Play Station"
        link_api="https://api.rawg.io/api/games?platfomrs=2&ordering=-added&page_size="
        link_url="playstation"
        size={10}
      />
      <BigCardContainer
        title="Pc Games"
        link_api="https://api.rawg.io/api/games?games?released=2019-10-01,2020-10-01&parent_platforms=4&page_size="
        link_url="/pc"
        size={5}
      />
      <SmallCardContainer
        title="Mobile Games"
        link_api="https://api.rawg.io/api/games?dates=2019-11-01,2020-11-30&platforms=3,21&ordering=-added&page_size="
        link_url="mobile"
        size={10}
      />
      <MediumCardContainer
        title="XboxGames"
        link_api="https://api.rawg.io/api/games?dates=2019-11-01,2020-11-30&platforms=1,186,14,80&ordering=-added&page_size="
        link_url="/xbox"
        size={10}
      />
    </div>
  );
};

export default Container;
