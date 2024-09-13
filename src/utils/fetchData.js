import axios from "axios";

const fetchData = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  const products = res.data.products;

  return products;
};

export default fetchData;
