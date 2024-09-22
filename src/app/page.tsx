"use client";

import { useMemo, useState } from "react";
import {
  Button,
  ThemeProvider,
  Grid,
  Pagination,
  Box,
  Typography,
} from "@mui/material";

import Loading from "./loading";
import ProductCard from "@/components/ui/ProductsCard/Card";
import DrawerComponent from "@/components/ui/Drawer/Drawer";

import { ProductType } from "@/types/product";
import filterProducts from "@/utils/filterProducts";
import useProducts from "@/hooks/use-products";
import usePages from "@/hooks/use-pages";
import darkTheme from "@/utils/darkTheme";

import styles from "./page.styles";

export default function Home() {
  const { products, loading } = useProducts();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [rating, setRating] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return filterProducts({
      products,
      selectedCategory,
      priceRange,
      rating,
    });
  }, [products, selectedCategory, priceRange, rating]);

  const productCount = useMemo(
    () => filteredProducts.length,
    [filteredProducts]
  );

  return (
    <Box component="main" sx={styles.main}>
      {loading ? (
        <Loading />
      ) : (
        <ThemeProvider theme={darkTheme}>
          <DrawerComponent
            open={open}
            setOpen={setOpen}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            rating={rating}
            setRating={setRating}
          />
          <Box sx={styles.title}>
            <Typography variant="h4">Found {productCount} products</Typography>
            <Button onClick={() => setOpen(true)}>Filter</Button>
          </Box>
          <MainSection data={filteredProducts} />
        </ThemeProvider>
      )}
    </Box>
  );
}

const MainSection = ({ data }: { data: ProductType[] }) => {
  const itemsPerPage = 10;
  const {
    currentPage,
    totalPages,
    currentItems: currentProducts,
    handlePageClick,
  } = usePages(data, itemsPerPage);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 8, lg: 12 }}
        sx={styles.gridContainer}
      >
        {currentProducts.map((product, index) => (
          <Grid key={index} item xs={2} sm={4} md={4} sx={styles.grid}>
            <ProductCard product={product as ProductType} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page: number) => handlePageClick(page)}
      />
    </>
  );
};
