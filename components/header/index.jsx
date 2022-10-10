import React from "react";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Store } from "../../utils/Store";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import DropdownLink from "../DropdownLink";
import Cookies from "js-cookie";

const Header = () => {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/auth/login" });
  };
  return (
    <header className="container bg-fundal absolute top-0 px-4 border-roz border-b-8">
      <nav className="flex h-12 items-center px-4 justify-between shadow-md">
        <Link href="/">
          <a className="text-lg text-roz font-bold">RoseDimat</a>
        </Link>
        <div>
          <Link href="/cart">
            <a className="p-2">
              Cart
              {cartItemsCount > 0 && (
                <span className="ml-1 rounded-full bg-red-600 px-2 text-xs font-bold text-white">
                  {cartItemsCount}
                </span>
              )}
            </a>
          </Link>
          <Link href="/produse">
            <a className="p-2 text-roz">Produse</a>
          </Link>

          {status === "loading" ? (
            "Loading"
          ) : session?.user ? (
            <Menu as="div" className="z-40 relative inline-block">
              <Menu.Button className="text-yellow-600">
                {session.user.name}
              </Menu.Button>
              <Menu.Items className="absolute right-0 w-56 bg-white origin-top-right shadow-lg">
                <Menu.Item>
                  <DropdownLink href="/profile" className="dropdown-link">
                    Profile
                  </DropdownLink>
                </Menu.Item>
                <Menu.Item>
                  <DropdownLink href="/dashboard" className="dropdown-link">
                    Dashboard
                  </DropdownLink>
                </Menu.Item>
                <Menu.Item>
                  <DropdownLink href="/profile" className="dropdown-link">
                    Order History
                  </DropdownLink>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="#"
                    className="dropdown-link"
                    onClick={logoutClickHandler}
                  >
                    Logout
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <Link href="/auth/login">
              <a className="p-2">Login</a>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
