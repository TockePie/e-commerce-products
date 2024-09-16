import { useState, useEffect } from "react";
import fetchData from "@/utils/fetchData";

const useProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await fetchData();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return { products, loading };
};

export default useProducts;
