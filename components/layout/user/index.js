import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./../../header/index";
import Footer from "./../../footer/Footer";

const UserLayout = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title ? title + "- RoseDimat" : "RoseDimat"}</title>
				<meta
					name="description"
					content="Ecommerce Website"
				/>
			</Head>
			<ToastContainer
				position="bottom-center"
				limit={1}
			/>

			<div className=" flex min-h-screen justify-center  items-center flex-col  ">
				<Header />

				<main className="container  overflow-x-hidden scroll-smooth min-h-screen">
					{children}
				</main>

				<Footer />
			</div>
		</>
	);
};

export default UserLayout;
