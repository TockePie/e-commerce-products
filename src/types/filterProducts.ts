import { Product } from '@/types/product';

interface FilterProductsParams {
  products: Product[];
  selectedCategory?: string | null;
  priceRange: [number, number];
  rating?: number | null;
}

export default FilterProductsParams;
