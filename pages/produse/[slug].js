import React, { useContext, useState } from "react";

import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";
import { Store } from "../../utils/Store";
import db from "../../utils/db";
import Product from "../../models/Product";
import axios from "axios";
import { toast } from "react-toastify";
import FullReviewComponent from "../../components/reviews/FullReviewComponent";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  const router = useRouter();

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
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div className="container flex w-full h-auto min-h-screen  relative justify-center items-center ">
      <div className="p-2 absolute top-0 left-0 z-50 justify-center ">
        <Link href="/produse">Innapoi la Produse</Link>
      </div>

      <div className="container grid grid-cols-2 relative  w-full max-w-5xl ">
        <div
          className="flex  w-full flex-col relative bg-roz  justify-between rounded-l-2xl items-center p-6"
          id="produs-descriere"
        >
          <div className="border p-6 pt-2 pb-2">
            <h1>{product.name}</h1>
          </div>

          <div className="relative flex flex-row w-32 h-40">
            <Image src={product.image} alt={product.name} layout="fill" />
          </div>
          <div className="flex mt-6">
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                {[...Array(Math.round(product.scorMedieReview))].map((e, i) => (
                  <BsFillStarFill style={{ color: "gold" }} key={i} />
                ))}
              </div>
            </div>
            din {product.numReviews} revieuri
          </div>
          <FullReviewComponent
            idProdus={product._id}
            nrRevieuri={product.numReviews}
            rating={product.scorMedieReview}
          />
        </div>

        <div className="flex p-16  items-start rounded-r-2xl bg-slate-500">
          <ul className="flex flex-col gap-6 w-full  rounded  ">
            <li className="text-center">
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li className="flex items-center justify-between">
              <div
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                className="flex items-center cursor-pointer "
              >
                <span className="mr-4"> Categorie</span>
                <AiOutlineArrowRight />
              </div>
              <span className={`${hover ? "visible" : "hidden"}`}>
                {product.category}
              </span>
            </li>
            <li className="flex flex-col ">
              <h3 className="text-lg">Descriere</h3>

              <p>{product.description}</p>
            </li>
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
                <div>
                  {product.countInStock > 0 ? "In Stock" : "Unavailable"}
                </div>
              </div>
              <button
                className="primary-button w-full"
                onClick={addToCartHandler}
              >
                Adauga in cart
              </button>
            </div>{" "}
          </ul>
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
