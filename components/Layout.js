import Header from "./header/Header";
import Footer from "./footer/Footer";
import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "- RoseDimat" : "RoseDimat"}</title>
        <meta name="description" content="Ecommerce Website" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <main className="container m-auto mt-4 px-4">{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
