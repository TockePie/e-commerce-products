'use client';

import { Button } from '@mui/material';

import { useCartStore } from '@/hooks/use-cart-store';
import { Product } from '@/types/product';

export default function AddToCart({ data }: { data: Product }) {
  const cart = useCartStore((state) => state.cart);
  const toggleCartItem = useCartStore((state) => state.toggleCartItem);

  const isItemInCart = cart.find((item) => item.id === data.id);

  return (
    <Button
      variant={isItemInCart ? 'outlined' : 'contained'}
      color="primary"
      onClick={() => toggleCartItem(data)}
      disabled={!data || !data.id}
    >
      {isItemInCart ? 'Remove from cart' : 'Add to cart'}
    </Button>
  );
}
