/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <div className="card">
      <Link href={`/produse/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
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
