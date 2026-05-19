'use client';

import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

import ModalConfirm from '@/components/cart/ModalConfirm/ModalConfirm';
import ProductsList from '@/components/cart/ProductsList/ProductsList';
import TotalPrice from '@/components/cart/TotalPrice/TotalPrice';
import { useCartStore } from '@/hooks/use-cart-store';

import constants from './page.constants';
import styles from './page.styles';

const Cart = () => {
  const [open, setOpen] = useState(false);

  const cart = useCartStore((state) => state.cart);

  return (
    <>
      <Box component="main" sx={styles.main}>
        <Typography variant="h4">{constants.cart}</Typography>
        <Box sx={styles.cart}>
          {cart.length > 0 ? (
            <ProductsList parsedCartItems={cart} />
          ) : (
            <Typography variant="h6">{constants.yourCartIsEmpty}</Typography>
          )}
        </Box>
        <TotalPrice parsedCartItems={cart} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
        >
          {constants.order}
        </Button>
        <ModalConfirm
          open={open}
          setOpen={setOpen}
          setCartItems={setCartItems}
        />
      </Box>
    </>
  );
};

export default Cart;
