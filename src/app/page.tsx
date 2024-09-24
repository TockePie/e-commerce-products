"use client";

import { useMemo, useState, useReducer, useEffect } from "react";
import { Button, Grid, Pagination, Box, Typography } from "@mui/material";

import Loading from "./loading";
import ProductCard from "@/components/ui/ProductsCard/Card";
import DrawerComponent from "@/components/ui/Drawer/Drawer";
import ThemeWrapper from "@/components/ThemeWrapper";

import { ProductType } from "@/types/product";
import { FilterAction } from "@/types/drawer";
import filterProducts from "@/utils/filterProducts";
import usePages from "@/hooks/use-pages";

import styles from "./page.styles";
import getProducts from "@/utils/getProducts";

const initialState = {
  selectedCategory: null as string | null,
  priceRange: [0, 3000] as [number, number],
  rating: null as number | null,
};

type State = typeof initialState;

const reducer = (state: State, action: FilterAction): State => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [open, setOpen] = useState(false);

  const { selectedCategory, priceRange, rating } = state;

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getProducts();

      setProducts(Array.isArray(result) ? result : result ? [result] : []);
      setLoading(false);
    };

    fetchProducts();
  }, []);

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
        <ThemeWrapper>
          <DrawerComponent
            open={open}
            setOpen={setOpen}
            dispatch={dispatch}
            selectedCategory={selectedCategory}
            priceRange={priceRange}
            rating={rating}
          />
          <Box sx={styles.title}>
            <Typography variant="h4">Found {productCount} products</Typography>
            <Button onClick={() => setOpen(true)}>Filter</Button>
          </Box>
          <MainSection data={filteredProducts} />
        </ThemeWrapper>
      )}
    </Box>
  );
}

const MainSection = ({ data }: { data: ProductType[] }) => {
  const itemsPerPage = 10;
  const {
    state: currentPage,
    dispatch,
    totalPages,
    currentItems: currentProducts,
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
        onChange={(_, page: number) => dispatch({ type: "SET", payload: page })}
      />
    </>
  );
};
