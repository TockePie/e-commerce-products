"use client";

import { useEffect, useState } from "react";
import { Button } from "@mui/material";

import { ProductType } from "@/types/product";

const AddToCart = ({ data }: { data: ProductType }) => {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && data && data.id) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const isProductInCart = cart.some(
        (item: ProductType) => item.id === data.id
      );
      if (isProductInCart) {
        setIsInCart(true);
      }
    }
  }, [data]);

  const handleAdd = () => {
    if (typeof window !== "undefined" && data && data.id) {
      let cart = JSON.parse(localStorage.getItem("cart") || "[]");

      const isProductInCart = cart.some(
        (item: ProductType) => item.id === data.id
      );

      if (isProductInCart) {
        cart = cart.filter((item: ProductType) => item.id !== data.id);
        setIsInCart(false);
      } else {
        cart.push(data);
        setIsInCart(true);
      }

      console.log(cart);

      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <Button
      variant={isInCart ? "outlined" : "contained"}
      color="primary"
      onClick={handleAdd}
      disabled={!data || !data.id}
    >
      {isInCart ? "Remove from cart" : "Add to cart"}
    </Button>
  );
};

export default AddToCart;
