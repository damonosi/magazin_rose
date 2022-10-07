import Product from "../../../../models/Product";
import db from "../../../../utils/db";

const handler = async (req, res) => {
  const {
    name,
    slug,
    category,
    image,
    price,
    cantitate,
    countInStock,
    description,
  } = req.body;
  db.connect();
  const produsNou = new Product({
    name,
    slug,
    category,
    image,
    price,
    cantitate,

    countInStock,
    description,
  });
  const produs = await produsNou.save();
  db.disconnect();
  res.send(produs);
};

export default handler;
