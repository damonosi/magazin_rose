import Product from "../../../../models/Product";
import db from "../../../../utils/db";

const handler = async (req, res) => {
  db.connect();
  const toateProdusele = await Product.find();
  db.disconnect();
  res.send(toateProdusele);
};

export default handler;
