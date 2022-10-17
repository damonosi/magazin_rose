import Product from "../../../models/Product";
import db from "../../../utils/db";
import { getSession } from "next-auth/react";
const handler = async (req, res) => {
	const session = await getSession({ req });
	if (!session) {
		return res.status(401).send("signin required");
	}
	const idProdus = req.body.idProdus;
	db.connect();
	const produs = await Product.findById(idProdus).lean();
	let reviews = new Array();

	for (const [key, value] of Object.entries(produs.review)) {
		reviews[key] = value;
	}

	db.disconnect();
	res.send(reviews);
};
export default handler;
