"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import ProductsList from "@/components/cart/ProductsList/ProductsList";
import ModalConfirm from "@/components/cart/ModalConfirm/ModalConfirm";
import TotalPrice from "@/components/cart/TotalPrice/TotalPrice";

import styles from "./page.styles";
import constants from "./page.constants";

const Cart = () => {
  const [cartItems, setCartItems] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => setCartItems(localStorage.getItem("cart")), []);

  const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];

  return (
    <>
      <Box component="main" sx={styles.main}>
        <Typography variant="h4">{constants.cart}</Typography>
        <Box sx={styles.cart}>
          {parsedCartItems.length > 0 ? (
            <ProductsList parsedCartItems={parsedCartItems} />
          ) : (
            <Typography variant="h6">{constants.yourCartIsEmpty}</Typography>
          )}
        </Box>
        <TotalPrice parsedCartItems={parsedCartItems} />
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
