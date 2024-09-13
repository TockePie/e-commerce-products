import { useEffect, useState } from "react";
import fetchData from "@/utils/fetchData";

const ListOfProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchData();
      setProducts(data.products);
    };

    getProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <h1>List of Products</h1>
      <ul>xc</ul>
    </div>
  );
};

export default ListOfProductsPage;
