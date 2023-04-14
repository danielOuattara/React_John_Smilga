import { Link, useLoaderData } from "react-router-dom";
import products from "./../data";

export default function SingleProduct() {
  const product = useLoaderData();
  return (
    <section className="section product">
      <img src={product.image} alt={product.name} />
      <h5>{product.name}</h5>
      <Link to="/products">Back to product</Link>
    </section>
  );
}

export const singProductLoader = ({ params }) => {
  return products.find((item) => item.id === params.productId);
};
