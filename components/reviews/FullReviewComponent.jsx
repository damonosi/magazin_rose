import React, { useState } from "react";
import AddReviewComponent from "./AddReviewComponent";
import { BsFillStarFill } from "react-icons/bs";
import axios from "axios";
import Image from "next/image";
import { useSession } from "next-auth/react";

const FullReviewComponent = ({ idProdus, nrRevieuri, rating }) => {
  const [noReview, setSeeReviews] = useState(false);
  const [reviews, setReviews] = useState({});
  const { data: session } = useSession();

  const logedInUserId = session?.user?._id;

  return (
    <div className="flex p-6  h-auto w-full " id="full-review-component">
      <div className=" p-6 ">
        {!noReview ? (
          <button
            className="absolute inset-x-2/4 -translate-x-1/2 p-6 hover:bg-galben rounded"
            onClick={async () => {
              await axios
                .post("/api/review/toate-reviurile", { idProdus })
                .then(
                  (response) => {
                    setReviews(response.data);
                  },
                  (error) => {
                    console.log(error);
                  },
                );
              setSeeReviews(!noReview);
            }}
          >
            comentarii
          </button>
        ) : (
          ""
        )}
        <section
          id="container-toate-revieurile "
          className={
            noReview
              ? "flex flex-col items-center absolute h-auto w-full rounded-l-2xl bg-roz inset-x-0 inset-y-0 p-10  "
              : "hidden"
          }
        >
          {reviews.length > 0 ? (
            <div className="grid grid-cols-3 gap-3  overflow-scroll p-6">
              {reviews.map((review, index) => {
                return (
                  <div
                    className={`grid grid-cols-2 items-center p-6 ${
                      logedInUserId === review.user._id ? "bg-galben" : "bg-roz"
                    } `}
                    id="container-comentariu"
                    key={index}
                  >
                    <div className="relative justify-center items-center text-center">
                      <Image
                        src={review.user.image}
                        alt="imagine-profil"
                        width={50}
                        height={50}
                        layout="responsive"
                      />
                      <p>{review.user.name}</p>
                    </div>

                    <div>
                      <p>{review.comentariu}</p>
                      <div className="flex">
                        {[...Array(review.rating)].map((e, i) => (
                          <BsFillStarFill style={{ color: "gold" }} key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              <button
                onClick={() => {
                  setReviews({});
                  setSeeReviews(!noReview);
                }}
                className="absolute mr-4 mt-1 top-0 right-0 text-red-700"
              >
                X
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="flex w-full items-center justify-center">
            <AddReviewComponent
              idProdus={idProdus}
              nrRevieuri={nrRevieuri}
              rating={rating}
            />
          </div>
          {reviews.length === 0 ? (
            <>
              <AddReviewComponent
                idProdus={idProdus}
                nrRevieuri={nrRevieuri}
                rating={rating}
              />
              <button
                onClick={() => {
                  setReviews({});
                  setSeeReviews(!noReview);
                }}
                className="absolute top-0 right-0 text-red-700"
              >
                X
              </button>
            </>
          ) : (
            ""
          )}
        </section>
      </div>
    </div>
  );
};

export default FullReviewComponent;
