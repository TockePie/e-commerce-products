import { useState, useEffect } from "react";
import fetchData from "@/utils/fetchData";

const useProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => setProducts(await fetchData());

    fetchProducts();
  }, []);

  return products;
};

export default useProducts;
