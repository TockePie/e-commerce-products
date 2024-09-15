"use client";

import { useState } from "react";

import ProductCard from "@/components/ui/ProductsCard/Card";

import useProducts from "@/hooks/use-products";
import { Grid, Button } from "@mui/material";

const ProductsPage = () => {
  const products = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleNextPage = () => setCurrentPage((prevPage) => prevPage + 1);

  const handlePreviousPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Found {products.length} products</h1>
      {/* {products.length > 0 && <ProductCard product={products[9]} />} */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ alignItems: "center", justifyContent: "space-evenly" }}
      >
        {currentProducts.map((product, index) => (
          <Grid key={index} item xs={2} sm={4} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Button
          variant="contained"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNextPage}
          disabled={endIndex >= products.length}
          style={{ marginLeft: "10px" }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ProductsPage;
