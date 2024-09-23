import axios from "axios";
import { ProductType } from "@/types/product";

const getProduct = async (id: number): Promise<ProductType | null> => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getProduct;
