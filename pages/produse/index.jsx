import React from "react";
import { useContext } from "react";
import ProductItem from "../../components/ProductItem.js";
import Product from "../../models/Product.js";
import db from "../../utils/db.js";
import { Store } from "../../utils/Store.js";

import axios from "axios";
import { toast } from "react-toastify";

const ToateProdusele = ({ products }) => {
	const { state, dispatch } = useContext(Store);
	const { cart } = state;

	const addToCartHandler = async (product) => {
		const existItem = cart.cartItems.find((x) => x.slug === product.slug);
		const quantity = existItem ? existItem.quantity + 1 : 1;
		const { data } = await axios.get(`/api/products/${product._id}`);
		if (data.countInStock < quantity) {
			return toast.error("Sorry.Product out of stock");
		}
		dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
		toast.success("Product added to cart");
	};

	return (
		<div
			className="grid  grid-cols-3 gap-3  p-12  overflow-hidden"
			id="toate-produsele">
			{products
				.sort((a, b) => (a.category = b.category))
				.map((product) => (
					<ProductItem
						addToCartHandler={addToCartHandler}
						product={product}
						key={product.slug}
					/>
				))}
		</div>
	);
};
export async function getServerSideProps() {
	await db.connect();
	const products = await Product.find().lean();

	return {
		props: {
			products: products.map(db.convertDocToObj),
		},
	};
}
export default ToateProdusele;
