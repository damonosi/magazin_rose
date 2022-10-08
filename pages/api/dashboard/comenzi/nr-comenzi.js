import { getSession } from "next-auth/react";
import db from "../../../../utils/db";
import Order from "./../../../../models/Order";

const handler = async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).send("signin required");
  }

  await db.connect();
  const comenzi = await Order.find();

  let nrComenzi = 0;
  for (let proprieties in comenzi) {
    nrComenzi = nrComenzi + 1;
  }
  console.log(nrComenzi);
  db.disconnect();

  res.send(nrComenzi);
};
export default handler;
