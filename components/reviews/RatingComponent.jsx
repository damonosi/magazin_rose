import axios from "axios";
import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

import { ImStarEmpty } from "react-icons/im";

const RatingComponent = ({ idProdus, rating, nrRevieuri }) => {
  const [activeStar, setActiveStar] = useState(rating);
  const totalStars = 5;
  const handleClick = (index) => {
    setActiveStar(index);
  };
  return (
    <div>
      <div className="flex justify-between">
        {[...new Array(totalStars)].map((arr, index) => {
          return (
            <button onClick={() => handleClick(index)} key={index}>
              <div className="relative">
                <div
                  className={
                    index <= activeStar
                      ? "w-full absolute overflow-hidden "
                      : "w-0 absolute overflow-hidden"
                  }
                >
                  <BsFillStarFill />
                </div>
              </div>
              <div>
                <ImStarEmpty />
              </div>
            </button>
          );
        })}
        <p>din {nrRevieuri} revieuri</p>
      </div>
      <button
        onClick={async () =>
          await axios.post("/api/review/adauga-review", {
            activeStar,
            idProdus,
          })
        }
      >
        adauga rating
      </button>
    </div>
  );
};

export default RatingComponent;
