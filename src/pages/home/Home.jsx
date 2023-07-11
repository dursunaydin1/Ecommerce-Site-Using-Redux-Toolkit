import Category from "../../components/category/Category";
import { Order } from "../../components/hero/Order";
import { Slider } from "../../components/hero/Slider";
import { Product } from "../../components/product/Product";

const Home = () => {
  return (
    <>
      <Slider />
      <Order />
      <Category />
      <Product />
    </>
  );
};

export default Home;
