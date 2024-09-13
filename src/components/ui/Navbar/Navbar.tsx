import React from "react";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import styles from "./Navbar.styles";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.leftBox}>
          <ShoppingBasketIcon sx={{ fontSize: 30 }} />
          <Typography variant="h5" sx={styles.typography}>
            Online Shop
          </Typography>
        </Box>
        <Box sx={styles.rightBox}>
          <Button variant="contained" sx={styles.searchButton}>
            <SearchIcon />
            Search
          </Button>
          <IconButton aria-label="shopping-cart">
            <ShoppingCartIcon sx={{ fontSize: 30, color: "white" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
