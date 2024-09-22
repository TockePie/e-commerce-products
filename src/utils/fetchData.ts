import axios from "axios";

const fetchData = async (id?: number) => {
  const url = `https://dummyjson.com/products${id ? `/${id}` : ""}`;

  try {
    const res = await axios.get(url);
    return id ? res.data : res.data.products;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch data from the server."
      );
    } else if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred.");
  }
};

export default fetchData;
