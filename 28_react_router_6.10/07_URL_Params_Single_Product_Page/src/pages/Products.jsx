import { Link, useLoaderData } from "react-router-dom";
import products from "./../data";

export default function Products() {
  const productsList = useLoaderData();
  return (
    <>
      <section className="section">
        <h2>products</h2>
        <div className="products">
          {productsList.map((item) => (
            <article key={item.id}>
              <h5>{item.name}</h5>
              <Link to={item.id}>more info</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

// data loader

export const productsLoader = () => products;
