import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // -----------------------------------------------

  // const getProducts = async () => {
  //   const response = await fetch(url);
  //   const products = await response.json();
  //   setProducts(products);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   return getProducts()
  // }, [url])

  // -----------------------------------------------

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(url);
  //     const products = await response.json();
  //     setProducts(products);
  //     setLoading(false);
  //   })();
  // }, [url]);

  //-------------------------------------------------

  // using useCallback
  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    return getProducts();
  }, [url, getProducts]);

  return { loading, products };
};
