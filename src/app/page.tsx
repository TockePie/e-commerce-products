'use client';

import { useMemo, useReducer, useState } from 'react';
import { Box, Button, Grid, Pagination, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import DrawerComponent from '@/components/mainPage/Drawer/Drawer';
import ProductCard from '@/components/mainPage/ProductsCard/Card';
import usePages from '@/hooks/use-pages';
import { getProducts } from '@/lib/api';
import { Product } from '@/types/product';

import Loading from './loading';
import { initialState, reducer } from './page.reducer';
import styles from './page.styles';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const { selectedCategory, priceRange, rating } = state;

  const { data = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });

  const filteredProducts = useMemo(() => {
    return data.filter((product) => {
      const categoryMatch = selectedCategory
        ? product.category === selectedCategory
        : true;
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const ratingMatch = rating ? product.rating >= rating : true;

      return categoryMatch && priceMatch && ratingMatch;
    });
  }, [data, selectedCategory, priceRange, rating]);

  return (
    <Box component="main" sx={styles.main}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DrawerComponent
            open={open}
            setOpen={setOpen}
            dispatch={dispatch}
            selectedCategory={selectedCategory}
            priceRange={priceRange}
            rating={rating}
          />
          <Box sx={styles.title}>
            <Typography variant="h4">
              Found {filteredProducts.length} products
            </Typography>
            <Button onClick={() => setOpen(true)}>Filter</Button>
          </Box>

          <MainSection data={filteredProducts} />
        </>
      )}
    </Box>
  );
}

const MainSection = ({ data }: { data: Product[] }) => {
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
          <Grid key={index} xs={2} sm={4} md={4} sx={styles.grid}>
            <ProductCard product={product as Product} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page: number) => dispatch({ type: 'SET', payload: page })}
      />
    </>
  );
};
