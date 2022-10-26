import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";


import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";
import Spinner from "./../components/spinner/Spinner";
import { SWRConfig } from "swr";
import "nprogress/nprogress.css";

import AdminLayout from "../components/layout/dashboard";
import UserLayout from "../components/layout/user";
import NextNProgress from "nextjs-progressbar";
import { fetcher as myFetcher } from "../utils/myFetcher";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<StoreProvider>
				<NextNProgress />
				<PayPalScriptProvider deferLoading={true}>
					<SWRConfig
						value={{
							refreshInterval: 10000,
							fetcher: myFetcher,
							refreshWhenHidden: false,
							revalidateOnFocus: false,
						}}>
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
					</SWRConfig>
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
	}
}

export default MyApp;

























