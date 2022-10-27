import Product from "../../../models/Product";
import db from "../../../utils/db";

const handler = async (req, res) => {
	const idProdus = req.body.idProdus;
	await db.connect();
	const produs = await Product.findById(idProdus).lean();
	let reviews = new Array();

	for (const [key, value] of Object.entries(produs.review)) {
		reviews[key] = value;
	}

	db.disconnect();
	res.send(reviews);
};
export default handler;
