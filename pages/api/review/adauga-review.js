import Product from "../../../models/Product";
import db from "../../../utils/db";
import { getSession } from "next-auth/react";

function medieScorReview(arr) {
  const average = arr.reduce((a, b) => a + b, 0) / arr.length;
  const formatAmount = (amount) =>
    amount % 1 === 0 ? amount : amount.toFixed(2);
  return formatAmount(average);
}

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send("signin required");
  }

  let steleOferite = await req.body.activeStar;
  let idProdus = await req.body.idProdus;
  let comentariu = await req.body.comentariu;
  let userId = await session.user._id;

  await db.connect();

  const produsDeUpdatat = await Product.findById(idProdus);

  const numarReview = produsDeUpdatat.numReviews + 1;

  const produsUpdatat = await Product.findOneAndUpdate(
    {
      _id: idProdus,
    },
    {
      $addToSet: {
        review: { rating: steleOferite, comentariu, user: userId },
      },
      $set: {
        numReviews: numarReview,
      },
    },
  );
  let arrayRating = new Array();

  produsUpdatat.review.map(({ rating }) => {
    arrayRating.push(rating);
  });
  arrayRating.push(steleOferite);

  let medieReview = medieScorReview(arrayRating);
  const updateScorReview = await Product.findOneAndUpdate(
    {
      _id: idProdus,
    },
    {
      $set: {
        scorMedieReview: medieReview,
      },
    },
  );

  await db.disconnect();
  res.send(updateScorReview);
};

export default handler;
