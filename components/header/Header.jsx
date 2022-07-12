import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Store } from "./../../utils/Store";

const Header = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <header>
      <nav className="flex h-12 items-center px-4 justify-between shadow-md">
        <Link href="/">
          <a className="text-lg font-bold">RoseDimat</a>
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
          <Link href="/login">
            <a className="p-2">Login</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};
// export const getServerSideProps = async (ctx) => {
//   // Check if the user is authenticated from the server
//   const session = await getSession(ctx);
//   if (!session) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/api/auth/signin",
//       },
//       props: {},
//     };
//   }
//   return {
//     props: {
//       session,
//     },
//   };
// };

export default Header;
