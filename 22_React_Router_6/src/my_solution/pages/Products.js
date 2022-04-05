import { Link } from "react-router-dom";
import products from "./../data";

const Products = () => {
  return (
    <section className="section">
      <h2>products</h2>
      {products.map((item) => {
        return (
          <article key={item.id}>
            <h5>{item.name}</h5>
            <Link to={`/products/${item.id}`}>more info</Link>
          </article>
        );
      })}
    </section>
  );
};

export default Products;
