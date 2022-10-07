import React, { useContext } from "react";

import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";
import { Store } from "../../utils/Store";
import db from "../../utils/db";
import Product from "../../models/Product";
import axios from "axios";
import { toast } from "react-toastify";

export default function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();

  if (!product) {
    return <div>Product Not Found</div>;
  }
  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      toast.error("Sorry.Product out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };
  return (
    <div className="flex w-full h-auto min-h-screen p-16 relative justify-center">
      <div className="p-2 absolute top-0 left-0 justify-center">
        <Link href="/produse">Innapoi la Produse</Link>
      </div>
      <div className="grid grid-cols-3 gap-3 items-center">
        <div className="flex w-full h-full max-h-96 align-center justify-center">
          <div className="md:col-span-2 relative w-2/6 h-1/1">
            <Image src={product.image} alt={product.name} layout="fill" />
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-3 p-6 pr-16">
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Categorie : {product.category}</li>
            <li>
              {product.rating} din {product.numReviews} revieuri
            </li>
            <li>
              <h1 className="text-lg">Descriere : {product.description}</h1>
            </li>
          </ul>
        </div>
        <div className="p-16">
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Pret</div>
              <div>{product.price} RON</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Cantitate</div>
              <div>
                {product.category === "produse apicole"
                  ? product.cantitate / 1000
                  : product.cantitate}
                {product.category === "produse apicole" ? " Kg" : " ml"}
              </div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? "In Stock" : "Unavailable"}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Adauga in cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();

  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
