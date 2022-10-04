import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";
import Spinner from "./../components/spinner/Spinner";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <PayPalScriptProvider deferLoading={true}>
          <Layout>
            {Component.Auth ? (
              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
          </Layout>
        </PayPalScriptProvider>
      </StoreProvider>
    </SessionProvider>
  );
}
function Auth({ children }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/unauthorized?message=login required");
      console.log("Nu Esti logat");
    },
  });
  console.log(status);
  if (status === "loading") {
    return <Spinner />;
  }
  return children;
}
export default MyApp;
