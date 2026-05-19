'use client';

import { Grid, Pagination } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

import ProductCard from '@/components/mainPage/ProductsCard';
import { Product } from '@/types/product';

import styles from './styles';

interface Props {
  products: Product[];
  totalPages: number;
  currentPage: number;
}

export default function ProductCardList({
  products,
  totalPages,
  currentPage,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 8, lg: 12 }}
        sx={styles.gridContainer}
      >
        {products.map((product) => (
          <Grid
            key={product.id}
            size={{ xs: 2, sm: 4, md: 4 }}
            sx={styles.grid}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => handlePageChange(page)}
      />
    </>
  );
}
