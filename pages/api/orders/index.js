import { getSession } from "next-auth/react";
import db from "../../../utils/db";
import Order from "../../../models/Order";

const handler = async (req, res) => {
	const session = await getSession({ req });

	if (!session) {
		return res.status(401).send("signin required");
	}

	const { user } = session;
	await db.connect();
	const newOrder = new Order({
		...req.body,
		user: user._id,
	});

	const order = await newOrder.save();
	db.disconnect();
	res.status(201).send(order);
};

export default handler;
