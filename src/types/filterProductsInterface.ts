import { ProductType } from '@/types/productTypes';

interface FilterProductsParams {
  products: ProductType[];
  selectedCategory?: string | null;
  priceRange: [number, number];
  rating?: number | null;
}

export default FilterProductsParams;
