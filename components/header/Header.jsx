import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";

import Link from "next/link";

const Header = () => {
  // console.log(process.env.EMAIL_SERVER_PASSWORD);
  // const { data: session } = useSession();
  // const { push, asPath } = useRouter();
  // const handleSignOut = async () => {
  //   const data = await signOut({ redirect: false, callbackUrl: "/some" });
  //   push(data.url);
  // };
  // const handleSignIn = () => {
  //   push(`/auth/signin?callbackUrl=${asPath}`);
  // };
  return (
    <header>
      <nav className="flex h-12 items-center px-4 justify-between shadow-md">
        <Link href="/">
          <a className="text-lg font-bold">RoseDimat</a>
        </Link>
        <div>
          <Link href="/cart">
            <a className="p-2">Cart</a>
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
