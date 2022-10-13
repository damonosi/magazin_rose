import Product from "../../../../models/Product";
import db from "../../../../utils/db";
import { getSession } from "next-auth/react";
const handler = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).send("signin required");
  }
  const userId = session.user._id;
  const userName = session.user.name;

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
    numReviews: +1,
    review: { user: { _id: userId, name: userName } },
  });

  const produs = await produsNou.save();
  db.disconnect();
  res.send(produs);
};

export default handler;
