import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { getError } from "../utils/error";
import { Store } from "../utils/Store";
import CheckoutWizard from "./../components/CheckoutWizard";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

export default function PlaceOrderScreen() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems, shippingAddress, paymentMethod } = cart;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
  const shippingPrice = itemsPrice > 200 ? 0 : 15;
  const taxPrice = itemsPrice * 0.15;
  console.log(taxPrice);

  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  useEffect(() => {
    if (!paymentMethod) {
      router.push("payment");
    }
  }, [paymentMethod, router]);
  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/orders", {
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
      setLoading(false);
      dispatch({ type: "CART_CLEAR_ITEMS" });
      Cookies.set("cart", JSON.stringify({ ...cart, cartItems: [] }));
      router.push(`/order/${data._id}`);
    } catch (error) {
      setLoading(false);
      toast.error(getError(error));
    }
  };
  return (
    <div>
      <CheckoutWizard activeStep={3} />
      <h1 className="mb-4 text-xl">Place order</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gsp-5">
          <div className="overflow-x-auto md:col-span-3">
            <div className="card p-5">
              <h2 className="mb-2 text-lg">Shipping Address</h2>
              <div>
                {shippingAddress.fullName},{shippingAddress.address},
                {shippingAddress.city},{shippingAddress.postalCode},
                {shippingAddress.country}
              </div>
              <div>
                <Link href="/shipping">Edit</Link>
              </div>
              <div className="card p-5">
                <h2 className="mb-2 textlg">Payment Method</h2>
                <div>{paymentMethod}</div>
                <div>
                  <Link href="/shipping">Edit</Link>
                </div>
              </div>
              <div className="card overflow-x-auto p-5">
                <h2 className="mb-2 text-lg">Order Items</h2>
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="px-5 text-left">Item</th>
                      <th className="p-5 text-right">Quantity</th>
                      <th className="p-5 text-right">Price</th>
                      <th className="p-5">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.key} className="border-b">
                        <td>
                          <Link href={`/product/${item.slug}`}>
                            <a className="flex items-center">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}
                              ></Image>
                              &nbsp;
                              {item.name}
                            </a>
                          </Link>
                        </td>
                        <td className="p-5 text-right">{item.quantity}</td>
                        <td className="p-5 text-right">{item.price} RON </td>
                        <td className="p-5 text-right">
                          {item.quantity * item.price} RON
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div>
                  <Link href={"/cart"}>Edit</Link>
                </div>
              </div>
            </div>
            <div className="card p-5">
              <h2 className="mb-2 text-lg">Order Summary</h2>
              <ul>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Items</div>
                    <div>{itemsPrice} RON</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Tax</div>
                    <div>{taxPrice} RON</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Shipping</div>
                    <div>{shippingPrice} RON</div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between">
                    <div>Total</div>
                    <div>{totalPrice} RON</div>
                  </div>
                </li>
                <li>
                  <button
                    disabled={loading}
                    onClick={placeOrderHandler}
                    className="primary-button w-full"
                  >
                    {loading ? "Loading..." : "Place Order"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

PlaceOrderScreen.Auth = true;
