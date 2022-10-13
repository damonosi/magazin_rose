import axios from "axios";
import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";

import { ImStarEmpty } from "react-icons/im";
import { toast } from "react-toastify";

const AddReviewComponent = ({ idProdus, rating, nrRevieuri }) => {
  const [activeStar, setActiveStar] = useState(rating);
  const [comentariu, setComentariu] = useState("");
  const [disabled, setDisabled] = useState(false);
  const totalStars = 5;

  const handleClick = (index) => {
    setActiveStar(index);
  };

  return (
    <div className="flex  flex-col h-auto  items-center max-w-3xl">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-between  w-full p-6 pl-0 pr-0">
          <div className="flex  items-center justify-between">
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
        <div className="w-full h-28  ">
          <textarea
            style={{ resize: "none" }}
            className="w-full h-24 text-"
            onChange={(e) => {
              setComentariu(e.target.value);
            }}
            required
            type="text"
            placeholder="comentariu"
          />
        </div>
      </div>
      <button
        className={`bg-roz p-4 rounded  ${
          disabled ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
        disabled={disabled}
        onClick={async () => {
          if (comentariu === "") {
            toast.error("Adaugati un comentariu scurt");
          } else {
            setDisabled(true);
            await axios.post("/api/review/adauga-review", {
              comentariu,
              activeStar,
              idProdus,
            });
            toast.success("Multumim pentru feedback");
          }
        }}
      >
        adauga review
      </button>
    </div>
  );
};

export default AddReviewComponent;
