import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { useFetch } from "./2-useFetch";

const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

// useEffect is not necesseray to see the optimization problem
// a console.log() or console.count is enough

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>

      <hr />

      <BigList products={products} />
    </>
  );
};

//-------------------------------------------------------------

const BigList = memo(({ products }) => {
  useEffect(() => {
    console.log("Big List call");
  });

  console.log("Big List call");
  console.count("Big List call");

  return (
    <section className="products">
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>;
      })}
    </section>
  );
});

//--------------------------------------------------------------

const SingleProduct = ({ fields }) => {
  useEffect(() => {
    console.count("product List call");
  });

  // console.log("product List call");
  // console.count("product List call");

  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};
export default Index;
