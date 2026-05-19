'use client';

import { Typography } from '@mui/material';

import { useCartStore } from '@/hooks/use-cart-store';

export default function CartCount() {
  const cart = useCartStore((state) => state.cart);

  return <Typography variant="h6">{cart.length}</Typography>;
}
