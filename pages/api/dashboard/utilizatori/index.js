import User from "./../../../../models/User";
import db from "./../../../../utils/db";

const handler = async (req, res) => {
  db.connect();
  const utilizatori = await User.find();

  db.disconnect();
  res.send(utilizatori);
};

export default handler;
