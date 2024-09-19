import axios from "axios";

const fetchData = async (id?: number) => {
  let url = "https://dummyjson.com/products";
  if (id) {
    url += `/${id}`;
  }

  try {
    const res = await axios.get(url);
    return id ? res.data : res.data.products;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch data from the server."
      );
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export default fetchData;
