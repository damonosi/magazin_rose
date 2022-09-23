import Header from "./header/Header";
import Footer from "./footer/Footer";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "- RoseDimat" : "RoseDimat"}</title>
        <meta name="description" content="Ecommerce Website" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <main className="container m-auto ">{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
