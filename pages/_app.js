import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Layout>
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
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
    return <div>Loading...</div>;
  }
  return children;
}
export default MyApp;
