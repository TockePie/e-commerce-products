"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import { navbar } from "@/utils/constants";

import styles from "./Navbar.styles";
import SearchModal from "../SearchModal/SearchModal";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [cartLength, setCartLength] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateCartLength = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartLength(cart.length);
    };

    updateCartLength();

    window.addEventListener("storage", updateCartLength);

    return () => window.removeEventListener("storage", updateCartLength);
  }, []);

  return (
    <AppBar
      component="nav"
      sx={{ top: isVisible ? 0 : "-64px", transition: "top 0.3s" }}
    >
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.leftBox}>
          <ShoppingBasketIcon
            sx={styles.shoppingBasket}
            onClick={() => router.replace("./")}
          />
          <Typography variant="h5" sx={styles.typography}>
            {navbar.title}
          </Typography>
        </Box>
        <Box sx={styles.rightBox}>
          <Button
            variant="contained"
            sx={styles.searchButton}
            onClick={() => setOpen(true)}
          >
            <SearchIcon />
            {navbar.searchText}
          </Button>
          <SearchModal open={open} setOpen={setOpen} />
          <IconButton
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={() => router.push("/cart")}
          >
            <ShoppingCartIcon />
            <Typography variant="h6">{cartLength}</Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
