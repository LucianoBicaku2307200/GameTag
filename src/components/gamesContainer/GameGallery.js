import React from "react";
import Loading from "../loading/Loading";
import DefaultCard from "../common/Cards/DefaultCard";

const GameGallery = ({ data, loading }) => {
  return (
    <div>
      <div className="flex flex-wrap m-2">
        {data &&
          data.map((game, index) => <DefaultCard key={index} data={game} />)}
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default GameGallery;
