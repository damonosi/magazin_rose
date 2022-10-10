import axios from "axios";
import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

import { ImStarEmpty } from "react-icons/im";

const ReviewComponent = ({ idProdus, rating, nrRevieuri }) => {
  const [activeStar, setActiveStar] = useState(rating);
  const [comentariu, setComentariu] = useState("");
  const totalStars = 5;

  const handleClick = (index) => {
    setActiveStar(index);
  };
  console.log(activeStar);
  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-between  w-full p-6 pl-0 pr-0">
          <div className="flex  items-center justify-between 9/12">
            <div className="flex" id="stele">
              {[...new Array(totalStars)].map((arr, index) => {
                index = index + 1;
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
                        <BsFillStarFill style={{ color: "gold" }} />
                      </div>
                    </div>
                    <div>
                      <ImStarEmpty />
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="flex ml-2">{activeStar}</div>
          </div>
          <div className=" flex 3/12 " id="punctaj">
            <p>
              {rating} din {nrRevieuri} revieuri
            </p>
          </div>
        </div>
        <div className="w-full h-28 pt-2 pb-2">
          <input
            className="w-full h-28"
            onChange={(e) => {
              setComentariu(e.target.value);
            }}
            type="text"
            placeholder="comentariu"
          />
        </div>
      </div>
      <button
        className="bg-roz p-4 rounded"
        onClick={async () =>
          await axios.post("/api/review/adauga-review", {
            comentariu,
            activeStar,
            idProdus,
          })
        }
      >
        adauga review
      </button>
    </div>
  );
};

export default ReviewComponent;
