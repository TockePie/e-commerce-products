"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Modal,
  Typography,
} from "@mui/material";

import calculateDiscountedPrice from "@/utils/calculateDiscountedPrice";
import { ProductType } from "@/types/product";

import styles from "./page.styles";

const Cart = () => {
  const [cartItems, setCartItems] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => setCartItems(localStorage.getItem("cart")), []);

  const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];

  return (
    <>
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
                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >{`x${product.minimumOrderQuantity}`}</Typography>
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
                          {`$${(
                            product.price * product.minimumOrderQuantity
                          ).toFixed(2)}`}
                        </Typography>
                        {product.discountPercentage && (
                          <Typography variant="body1" color="red">
                            {`$${(
                              discount * product.minimumOrderQuantity
                            ).toFixed(2)}`}
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
        <Box
          sx={{ width: "100%", display: "flex", gap: 5, justifyContent: "end" }}
        >
          <Typography variant="h5" fontWeight={400}>
            Total:
          </Typography>
          <Typography variant="h6" fontWeight={700}>
            $
            {parsedCartItems
              .reduce((acc: number, product: ProductType) => {
                const discount = calculateDiscountedPrice(
                  product.price,
                  product.discountPercentage
                );
                return acc + discount * product.minimumOrderQuantity;
              }, 0)
              .toFixed(2)}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
        >
          Order
        </Button>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={styles.modal}>
          <Typography>
            Do you want to order the products in your cart?
          </Typography>
          <Box sx={{
            display: "flex",
            gap: 2,
            justifyContent: "end",
          }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                localStorage.removeItem("cart");
                setCartItems(null);
                setOpen(false);
              }}
            >
              Yes
            </Button>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
