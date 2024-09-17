import { useState, useEffect } from "react";

import fetchData from "@/utils/fetchData";

import { ProductType } from "@/types/cardTypes";

const useProducts = (id?: number) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await fetchData(id);
      setProducts(id ? [data] : data);
      setLoading(false);
    };

    fetchProducts();
  }, [id]);

  return { products, loading };
};

export default useProducts;
