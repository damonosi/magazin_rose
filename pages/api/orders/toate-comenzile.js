import { getSession } from "next-auth/react";
import Order from "./../../../models/Order";
import db from "./../../../utils/db";

const handler = async (req, res) => {
	const session = await getSession({ req });

	if (!session) {
		return res.status(401).send("signin required");
	}

	await db.connect();
	const comenzi = await Order.find().lean();
	db.disconnect();

	res.send(comenzi);
};
export default handler;
