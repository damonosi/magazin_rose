import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";
import Spinner from "./../components/spinner/Spinner";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import AdminLayout from "../components/layout/dashboard";
import UserLayout from "../components/layout/user";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <PayPalScriptProvider deferLoading={true}>
          {Component.Auth ? (
            <Auth>
              {Component.Admin ? (
                <Admin>
                  <AdminLayout>
                    <Component {...pageProps} />
                  </AdminLayout>
                </Admin>
              ) : (
                <UserLayout>
                  <Component {...pageProps} />
                </UserLayout>
              )}
            </Auth>
          ) : (
            <UserLayout>
              <Component {...pageProps} />
            </UserLayout>
          )}
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

  if (status === "loading") {
    return <Spinner />;
  }
  return children;
}

function Admin({ children }) {
  const { status, data: session } = useSession();

  if (session?.user?.isAdmin)
    if (status === "loading") {
      return <Spinner />;
    }
  if (session?.user?.isAdmin === true) {
    return children;
  } else {
    console.log("trebuie sa fii admin!");
  }
}

export default MyApp;
