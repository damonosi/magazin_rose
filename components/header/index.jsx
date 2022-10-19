import React, { useCallback } from "react";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Store } from "../../utils/Store";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import DropdownLink from "../DropdownLink";
import Cookies from "js-cookie";
import { TbShoppingCart } from "react-icons/tb";
import InViewWrapper from "./../componente-animate/InViewWrapper.tsx";

const Header = () => {
	const [visible, setHidden] = useState(true);
	const [y, setY] = useState(0);
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
	const handleNavigation = useCallback(
		(e) => {
			const window = e.currentTarget;
			if (y > window.scrollY) {
				setHidden(true);
			} else if (y < window.scrollY) {
				setHidden(false);
			}
			setY(window.scrollY);
		},
		[y],
	);
	useEffect(() => {
		setY(window.scrollY);
		window.addEventListener("scroll", handleNavigation);

		return () => {
			window.removeEventListener("scroll", handleNavigation);
		};
	}, [handleNavigation]);

	return (
		<InViewWrapper
			inView={{
				opacity: 1,
			}}
			notInView={{
				opacity: 0,
			}}
			tranzitie={{
				duration: 1,
			}}
			clasa={`${
				visible ? "sticky" : "hidden"
			} container  bg-textTrandafiri  top-0  z-40 px-4 border-fundalTrandafiri h-14 border-b-8`}>
			<header>
				<nav className="flex h-12 items-center px-4 justify-between shadow-md">
					<Link href="/">
						<a className="text-lg text-fundalTrandafiri font-bold hover:blur-xs">
							RoseDimat
						</a>
					</Link>
					<div className="flex justify-center items-center">
						<Link href="/cart">
							<a className="p-2 text-fundalTrandafiri ">
								<div className="flex justify-center items-center hover:blur-xs ">
									<span>Cart</span>
									<TbShoppingCart className="ml-1" />

									{cartItemsCount > 0 && (
										<span className="ml-1 rounded-full bg-red-600 px-2 text-xs font-bold text-white">
											{cartItemsCount}
										</span>
									)}
								</div>
							</a>
						</Link>
						<Link href="/produse">
							<a className="p-2 text-roz hover:blur-xs">Produse</a>
						</Link>

						{status === "loading" ? (
							"Loading"
						) : session?.user ? (
							<Menu
								as="div"
								className="z-40 relative inline-block">
								<Menu.Button className="text-yellow-600 hover:blur-xs">
									{session.user.name}
								</Menu.Button>
								<Menu.Items className="absolute right-0 w-56 bg-white origin-top-right shadow-lg">
									<Menu.Item>
										<DropdownLink
											href="/profile"
											className="dropdown-link">
											Profile
										</DropdownLink>
									</Menu.Item>
									<Menu.Item>
										<DropdownLink
											href="/dashboard"
											className="dropdown-link">
											Dashboard
										</DropdownLink>
									</Menu.Item>
									<Menu.Item>
										<DropdownLink
											href="/profile"
											className="dropdown-link">
											Order History
										</DropdownLink>
									</Menu.Item>
									<Menu.Item>
										<a
											href="#"
											className="dropdown-link"
											onClick={logoutClickHandler}>
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
		</InViewWrapper>
	);
};

export default Header;
