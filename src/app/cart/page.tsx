"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";

import calculateDiscountedPrice from "@/utils/calculateDiscountedPrice";
import { ProductType } from "@/types/product";

import styles from "./page.styles";

const Cart = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<string | null>(null);

  useEffect(() => {
    setCartItems(localStorage.getItem("cart"));
  }, []);

  const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];

  return (
    <Box component="main" sx={styles.main}>
      <Typography variant="h4">Cart</Typography>
      <Box sx={styles.cart}>
        {parsedCartItems.length > 0 ? (
          <List>
            {parsedCartItems.map((product: ProductType) => {
              const discount = calculateDiscountedPrice(
                product.price,
                product.discountPercentage
              );

              return (
                <ListItem key={product.id}>
                  <ListItemButton
                    sx={styles.itemButton}
                    onClick={() => {
                      router.push(`/${product.id}`);
                    }}
                  >
                    <Box sx={styles.product}>
                      {product.images.length > 0 && (
                        <Image
                          src={product.images[0]}
                          alt={product.title}
                          width={50}
                          height={50}
                          style={{ objectFit: "contain" }}
                        />
                      )}
                      <Typography>{product.title}</Typography>
                    </Box>
                    <Box sx={styles.priceBox}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textDecoration: product.discountPercentage
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {`$${product.price}`}
                      </Typography>
                      {product.discountPercentage && (
                        <Typography variant="body1" color="red">
                          {`$${discount}`}
                        </Typography>
                      )}
                    </Box>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <Typography variant="h6">Your cart is empty.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
