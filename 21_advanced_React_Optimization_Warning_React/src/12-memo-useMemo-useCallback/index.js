import React, { useState, useEffect, useCallback, memo } from "react";
import { useFetch } from "./2-useFetch";

const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

// useEffect is not necesseray to see the optimization problem
// a console.log() or console.count is enough

const Index = () => {
  const { products } = useFetch(url);

  const [count, setCount] = useState(0);

  const [cart, setCart] = useState(0);

  // const addToCart =  () => {
  //   setCart(cart + 1);
  // };

  // useCallback act on function. If function argument is changed
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>

      <h2 style={{ margin: "2rem" }}>cart: {cart}</h2>

      <hr />

      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

//-------------------------------------------------------------

const BigList = memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("Big List call");
  });

  // console.log("Big List call");
  // console.count("Big List call");

  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            fields={product.fields}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

//--------------------------------------------------------------

// using a React.memo again here is not useful to block re-render
// Note: the re-render 'origin is nto outiside of BigList. It is
// the button trigger located inside SingleProduct; so React.memo
// is not efficient for internal re-render triggering action
// For this kind of situation, using useCall is the solution
// for optimizing the app. See at top

const SingleProduct = ({ fields, addToCart }) => {
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
      <button className="btn" onClick={addToCart}>
        add tocart
      </button>
    </article>
  );
};

export default Index;
