import React, { useContext } from "react";

import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";
import { Store } from "../../utils/Store";
import db from "../../utils/db";
import Product from "../../models/Product";
import axios from "axios";
import { toast } from "react-toastify";
import RatingComponent from "./../../components/reviews/RatingComponent";

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
    <div className="flex w-full h-auto min-h-screen pt-6 relative justify-center ">
      <div className="p-2 absolute top-0 left-0 justify-center">
        <Link href="/produse">Innapoi la Produse</Link>
      </div>

      <div className="container grid grid-cols-2 p-16 gap-6 max-w-4xl  items-center bg-slate-500">
        <div className="flex h-full w-full flex-col justify-center items-end ">
          <div className="flex relative w-80  h-96">
            <Image src={product.image} alt={product.name} layout="fill" />
          </div>
          <div className="flex w-full items-start">
            <RatingComponent
              idProdus={product._id}
              nrRevieuri={product.numReviews}
              rating={product.rating}
            />
          </div>
        </div>
        <div className="grid grid-cols-1  max-w-sm gap-6">
          <div className="flex  h-full items-start">
            <ul className="flex flex-col  gap-16  rounded pr-16  ">
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
