'use client';

import { Box, List, Typography } from '@mui/material';

import CartItem from '@/components/cart/CartItem';
import TotalPrice from '@/components/cart/TotalPrice';
import { useCartStore } from '@/hooks/use-cart-store';
import calculateDiscountedPrice from '@/utils/calculate-discounted-price';

import ConfirmBtn from './confirm-btn';
import styles from './page.styles';

const Cart = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <Box component="main" sx={styles.main}>
      <Typography variant="h4">Cart</Typography>
      <Box sx={styles.cart}>
        {cart.length > 0 ? (
          <List>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                discount={calculateDiscountedPrice(
                  product.price,
                  product.discountPercentage,
                )}
              />
            ))}
          </List>
        ) : (
          <Typography variant="h6">Your cart is empty.</Typography>
        )}
      </Box>

      <TotalPrice cart={cart} />

      <ConfirmBtn />
    </Box>
  );
};

export default Cart;
