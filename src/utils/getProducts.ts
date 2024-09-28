import axios from "axios";
import { ProductType } from "@/types/product";

const getProducts = async (id?: number): Promise<ProductType | ProductType[] | null> => {
  const url = `https://dummyjson.com/products${id ? `/${id}` : ""}`;

  try {
    const res = await axios.get(url);
    return id ? res.data : res.data.products;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getProducts;
