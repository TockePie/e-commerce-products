'use client';

import { Button } from '@mui/material';

import { useCartStore } from '@/hooks/use-cart-store';
import { Product } from '@/types/product';

export default function AddToCart({ product }: { product: Product }) {
  const cart = useCartStore((state) => state.cart);
  const toggleCartItem = useCartStore((state) => state.toggleCartItem);

  const isItemInCart = cart.find((item) => item.id === product.id);

  return (
    <Button
      variant={isItemInCart ? 'outlined' : 'contained'}
      color="primary"
      onClick={() => toggleCartItem(product)}
      disabled={!product || !product.id}
    >
      {isItemInCart ? 'Remove from cart' : 'Add to cart'}
    </Button>
  );
}
