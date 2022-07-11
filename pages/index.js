import data from "../utils/data";
import ProductItem from "../components/ProductItem.js";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {data.products.map((product) => (
        <ProductItem product={product} key={product.slug}></ProductItem>
      ))}
    </div>
  );
};
export default Home;
