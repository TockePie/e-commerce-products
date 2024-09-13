"use client";

import ProductCard from "@/components/ui/ProductsCard/Card";

import useProducts from "@/hooks/use-products";

const ProductsPage = () => {
  const products = useProducts();

  return (
    <div>
      <h1>Found {products.length} products</h1>
      {products.length > 0 && <ProductCard product={products[9]} />}
    </div>
  );
};

export default ProductsPage;
