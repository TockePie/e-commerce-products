import { Box, Typography } from '@mui/material';

import DrawerBtn from '@/components/mainPage/Drawer/drawer-btn';
import ProductCardList from '@/components/mainPage/ProductCardList';
import { getProducts } from '@/lib/api';

import styles from './page.styles';

interface Props {
  searchParams: Promise<{
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    rating?: string;
    page?: string;
  }>;
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;

  const category = params.category || null;
  const minPrice = Number(params.minPrice || 0);
  const maxPrice = Number(params.maxPrice || 3000);
  const rating = params.rating ? Number(params.rating) : null;
  const currentPage = Number(params.page || 1);
  const itemsPerPage = 10;

  const allProducts = await getProducts();

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = !category || product.category === category;
    const priceMatch = product.price >= minPrice && product.price <= maxPrice;
    const ratingMatch = !rating || product.rating >= rating;

    return categoryMatch && priceMatch && ratingMatch;
  });

  const totalPages = Math.max(
    Math.ceil(filteredProducts.length / itemsPerPage),
    1,
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <Box component="main" sx={styles.main}>
      <Box sx={styles.title}>
        <Typography variant="h4">
          Found {filteredProducts.length} products
        </Typography>

        <DrawerBtn
          initialFilters={{
            category,
            priceRange: [minPrice, maxPrice],
            rating,
          }}
        />
      </Box>

      <ProductCardList
        products={currentItems}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </Box>
  );
}
