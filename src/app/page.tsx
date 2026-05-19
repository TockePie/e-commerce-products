'use client';

import { useEffect, useMemo, useState } from 'react';
import { Box, Button, Grid, Pagination, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import DrawerComponent from '@/components/mainPage/Drawer/Drawer';
import ProductCard from '@/components/mainPage/ProductsCard/Card';
import { getProducts } from '@/lib/api';
import { Product } from '@/types/product';

import Loading from './loading';
import styles from './page.styles';

const initialFilters = {
  category: null as string | null,
  priceRange: [0, 3000] as [number, number],
  rating: null as number | null,
};

export type FilterState = typeof initialFilters;

export default function Home() {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const { data = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });

  const filteredProducts = useMemo(() => {
    return data.filter((product) => {
      const categoryMatch =
        !filters.category || product.category === filters.category;
      const priceMatch =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];
      const ratingMatch = !filters.rating || product.rating >= filters.rating;

      return categoryMatch && priceMatch && ratingMatch;
    });
  }, [data, filters]);

  return (
    <Box component="main" sx={styles.main}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DrawerComponent
            open={open}
            onClose={() => setOpen(false)}
            filters={filters}
            setFilters={setFilters}
            onReset={() => setFilters(initialFilters)}
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = useMemo(
    () => Math.max(Math.ceil(data.length / itemsPerPage), 1),
    [data.length, itemsPerPage],
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [data.length, totalPages, currentPage]);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, itemsPerPage, currentPage]);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 8, lg: 12 }}
        sx={styles.gridContainer}
      >
        {currentItems.map((product) => (
          <Grid key={product.id} xs={2} sm={4} md={4} sx={styles.grid}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => setCurrentPage(page)}
      />
    </>
  );
};
