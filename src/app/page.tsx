"use client";

import { useMemo } from "react";
import { Grid, Pagination, Box } from "@mui/material";

import Loading from "./loading";
import ProductCard from "@/components/ui/ProductsCard/Card";

import ProductProps from "@/types/productTypes";
import useProducts from "@/hooks/use-products";
import usePages from "@/hooks/use-pages";

import styles from "./page.styles";

export default function Home() {
  const { products, loading } = useProducts();

  return (
    <Box component="main" sx={styles.main}>
      {loading ? <Loading /> : <MainSection data={products} />}
    </Box>
  );
}

const MainSection = ({ data }: { data: ProductProps[] }) => {
  const itemsPerPage = 10;
  const {
    currentPage,
    totalPages,
    currentItems: currentProducts,
    handlePageClick,
  } = usePages(data, itemsPerPage);

  const productCount = useMemo(() => data.length, [data]);

  return (
    <>
      <h1>Found {productCount} products</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 8, lg: 12 }}
        sx={styles.gridContainer}
      >
        {currentProducts.map((product, index) => (
          <Grid key={index} item xs={2} sm={4} md={4} sx={styles.grid}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => handlePageClick(page)}
      />
    </>
  );
};
