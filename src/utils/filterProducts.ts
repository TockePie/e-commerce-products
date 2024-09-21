import FilterProductsParams from "@/types/filterProductsInterface";
import { ProductType } from "@/types/productTypes";

const filterProducts = ({
  products,
  selectedCategory,
  priceRange,
  rating,
}: FilterProductsParams): ProductType[] => {
  return products.filter((product) => {
    const categoryMatch = selectedCategory
      ? product.category === selectedCategory
      : true;
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const ratingMatch = rating ? product.rating >= rating : true;

    return categoryMatch && priceMatch && ratingMatch;
  });
};

export default filterProducts;
