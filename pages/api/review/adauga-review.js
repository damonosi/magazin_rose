import Product from "../../../models/Product";
import db from "../../../utils/db";

const handler = async (req, res) => {
  await db.connect();

  let steleOferite = await req.body.activeStar;
  let nrSteleCorect = steleOferite + 1;
  let idProdus = await req.body.idProdus;

  const produsDeUpdatat = await Product.findById(idProdus);

  const notaReview = (produsDeUpdatat.rating + nrSteleCorect) / 2;
  const numarReview = produsDeUpdatat.numReviews + 1;
  const produsUpdatat = await Product.findOneAndUpdate(
    {
      _id: idProdus,
    },
    {
      $set: {
        rating: notaReview,
        numReviews: numarReview,
      },
    },
  );

  //   const adaugaReview = await Product.findByIdAndUpdate(idProdus, {
  //     rating: ( + steleOferite) / 2,
  //   });

  await db.disconnect();
  res.send(produsUpdatat);
};

export default handler;
