import { useState, useEffect, useCallback } from "react";

import fetchData from "@/utils/fetchData";
import { ProductType } from "@/types/product";

const useProducts = (id?: number) => {
  const [state, setState] = useState<{
    products: ProductType[];
    loading: boolean;
    error: string | null;
  }>({
    products: [],
    loading: true,
    error: null,
  });

  const fetchProducts = useCallback(async () => {
    try {
      setState(prevState => ({ ...prevState, loading: true, error: null }));
      const data = await fetchData(id);
      setState({ products: id ? [data] : data, loading: false, error: null });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setState({ products: [], loading: false, error: errorMessage });
    }
  }, [id]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { ...state, refetch: fetchProducts };
};

export default useProducts;
