import Header from "./header";
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

      <div className=" flex min-h-screen flex-col justify-between  ">
        <div className="container m-auto mt-0">
          <Header />
        </div>
        <main className="container m-auto overflow-x-hidden">{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
