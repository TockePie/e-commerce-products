import { ProductType } from '@/types/product';

interface FilterProductsParams {
  products: ProductType[];
  selectedCategory?: string | null;
  priceRange: [number, number];
  rating?: number | null;
}

export default FilterProductsParams;
