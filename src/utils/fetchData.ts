import axios from "axios";

const fetchData = async (id?: number) => {
  let url = "https://dummyjson.com/products";
  if (id) {
    url += `/${id}`;
  }

  const res = await axios.get(url);

  return id ? res.data : res.data.products;
};

export default fetchData;
