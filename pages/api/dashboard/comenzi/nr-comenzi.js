/* eslint-disable no-unused-vars */

import db from "../../../../utils/db";
import Order from "./../../../../models/Order";

const handler = async (req, res) => {
	await db.connect();

	Order.count(function (err, numaratoare) {
		if (err) {
			console.log(err);
			res.send("Eroare");
		} else {
			res.send(numaratoare);
		}
	});
	db.disconnect();
};
export default handler;
