/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <div className=" p-16 flex flex-col justify-center items-center">
      <div className="container flex justify-center items-center  w-full max-w-xs p-16  h-32 relative">
        <Link href={`/produse/${product.slug}`}>
          <a>
            <div className="block w-24 h-36 relative ">
              <Image
                src={product.image}
                alt={product.name}
                className="rounded shadow"
                layout="fill"
              />
            </div>
          </a>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/produse/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p>{product.price} RON</p>
        <button
          onClick={() => addToCartHandler(product)}
          className="primary-button"
          type="button"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
