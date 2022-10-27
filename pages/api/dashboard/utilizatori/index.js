import User from "./../../../../models/User";
import db from "./../../../../utils/db";

const handler = async (req, res) => {
	await db.connect();
	const utilizatori = await User.find().lean();

	db.disconnect();
	res.send(utilizatori);
};

export default handler;
