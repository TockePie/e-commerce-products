"use client";

import { Grid, Pagination } from "@mui/material";

import Loading from "./loading";
import ProductCard from "@/components/ui/ProductsCard/Card";

import useProducts from "@/hooks/use-products";
import usePages from "@/hooks/use-pages";

import styles from "./page.module.scss";

export default function Home() {
  const { products, loading } = useProducts();
  const itemsPerPage = 10;

  const {
    currentPage,
    totalPages,
    currentItems: currentProducts,
    handlePageClick,
  } = usePages(products, itemsPerPage);

  return (
    <main className={styles.main}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Found {products.length} products</h1>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 8, lg: 12 }}
            sx={{ alignItems: "center" }}
          >
            {currentProducts.map((product, index) => (
              <Grid
                key={index}
                item
                xs={2}
                sm={4}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
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
      )}
    </main>
  );
}
