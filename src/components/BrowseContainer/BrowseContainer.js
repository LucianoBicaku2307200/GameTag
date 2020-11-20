import React from "react";
import BrowseCard from "../common/Cards/BrowseCard";
import Loading from "../loading/Loading";
const BrowseContainer = ({ data, loading }) => {
  return (
    <div>
      <div>
        <div className="flex flex-wrap m-2">
          {data &&
            data.map((game, index) => <BrowseCard key={index} data={game} />)}
        </div>

        {loading && <Loading />}
      </div>
    </div>
  );
};

export default BrowseContainer;
