import User from "../../../../models/User";
import db from "../../../../utils/db";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send("admin required");
  }
  if (session.user.isAdmin === true) {
    const idUser = await req.body.idUtilizator;
    await db.connect();
    const utilizator = await User.findByIdAndDelete(idUser);

    db.disconnect();
    return utilizator;
  }

  res.send("utilizator sters");
};

export default handler;
