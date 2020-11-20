import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../../common/Rating";

const SmallCard = ({ data }) => {
  const [showRatings, setShowRatings] = useState(false);

  return (
    <div style={{ height: "350px" }}>
      <div
        className="h-full p-2"
        onMouseEnter={() => setShowRatings(true)}
        onMouseLeave={() => setShowRatings(false)}
      >
        <div
          className="h-full bg-center bg-cover overflow-hidden transition duration-500 ease-in-out"
          style={{
            backgroundImage: `url(${data.background_image})`,
          }}
        >
          <div
            className=" h-full  bg-gradient-to-t
           from-black flex justify-center items-center"
          >
            <div className="text-center">
              <div
                className={`mb-10 ${
                  showRatings ? "opacity-100" : "opacity-0"
                }  transition duration-500 ease-in-out`}
              >
                <div
                  className="w-32 h-32 mx-auto bg-transparent border border-yellow-theme flex justify-center items-center"
                  style={{ borderRadius: "50%", borderWidth: "3px" }}
                >
                  <Rating data={data.rating} />
                </div>
              </div>

              <h6 className="font-medium text-lg w-full mb-3">{data.name}</h6>
              <Link to="/">
                <div
                  className="bg-yellow-theme border border-yellow-theme py-1 mx-auto
                   transition duration-500 ease-in-out hover:bg-transparent 
                    hover:border-white w-24"
                >
                  Stores
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
