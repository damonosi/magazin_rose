import Product from "../../../../models/Product";
import db from "../../../../utils/db";

const handler = async (req, res) => {
	db.connect();
	const toateProdusele = await Product.find().lean();
	db.disconnect();
	res.send(toateProdusele);
};

export default handler;
