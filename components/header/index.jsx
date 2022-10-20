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
import { AnimatePresence } from "framer-motion";

const Header = () => {
	const [visible, setHidden] = useState(true);
	const [productMenu, setShowProductMenu] = useState(false);
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
				setShowProductMenu(false);
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
			} container  bg-textTrandafiri  top-0 relative  z-40 px-4 border-fundalTrandafiri h-auto border-b-8`}>
			<header className="flex flex-col ">
				<nav className="flex h-12 items-center px-4 justify-between shadow-md z-10">
					<Link href="/">
						<a className="text-lg text-fundalTrandafiri font-bold hover:blur-xs">
							RoseDimat
						</a>
					</Link>
					<div className="flex justify-center items-center">
						<Link href="/cart">
							<a className="p-2 text-fundalTrandafiri ">
								<div className="flex justify-center items-center hover:blur-xs ">
									<TbShoppingCart />

									{cartItemsCount > 0 && (
										<span className="ml-1 rounded-full bg-red-600 px-2 text-xs font-bold text-white">
											{cartItemsCount}
										</span>
									)}
								</div>
							</a>
						</Link>
						<button
							onClick={() => setShowProductMenu(!productMenu)}
							className="p-2 text-roz hover:blur-xs">
							Produse{" "}
						</button>

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
				{productMenu ? (
					<InViewWrapper
						keie="meniuProduse"
						inView={{
							opacity: 1,
							y: 0,
						}}
						notInView={{
							opacity: 0,
							y: -10,
						}}
						tranzitie={{
							duration: 1,
						}}
						clasa={
							"absolute flex bg-fundalTrandafiri py-2 mt-14 top-0 left-0 right-0 px-4  w-full z-0"
						}>
						<ul className="flex px-4 items-center w-full justify-between overflow-x-hidden animate-move-x ">
							<li>Apa de Trandafiri</li>
							<li>Sirop de Trandafiri</li>
							<li>Dulceata de Trandafiri</li>
							<li>Miere de Albine Poliflora </li>
							<li>Miere de Albine Salcam </li>
							<li>Miere de Albine Tei </li>
						</ul>{" "}
					</InViewWrapper>
				) : (
					""
				)}
			</header>
		</InViewWrapper>
	);
};

export default Header;
