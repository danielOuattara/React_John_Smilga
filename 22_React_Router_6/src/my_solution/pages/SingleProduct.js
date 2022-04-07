// import { Link, useParams } from "react-router-dom";

// const SingleProduct = () => {
//   const { productId } = useParams();
//   return (
//     <section className="section product">
//       <h2>single product {productId}</h2>
//       <Link to="/products">back To Products</Link>
//     </section>
//   );
// };

// export default SingleProduct;

//------------------------------------------------------------------------

import { Link, useParams } from "react-router-dom";
import products from "./../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);
  const { image, name } = product;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products" className="btn"> back To Products </Link>
    </section>
  );
};

export default SingleProduct;
