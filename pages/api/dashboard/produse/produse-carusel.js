import Product from "../../../../models/Product";
import db from "../../../../utils/db";

const addItemsToCarusel = async (toateProdusele) => {
	let produseCarusel = [];
	await toateProdusele.map((produsM) => {
		const produsNou = {
			name: produsM.name,
			category: produsM.category,
			image: produsM.image,
			price: produsM.price,
			slug: produsM.slug,
			cantitate: produsM.cantitate,
		};

		produseCarusel.push(produsNou);
	});

	return produseCarusel;
};

const handler = async (req, res) => {
	db.connect();
	const toateProdusele = await Product.find().lean();
	const produseCarusel = await addItemsToCarusel(toateProdusele);

	db.disconnect();
	res.send(produseCarusel);
};

export default handler;
