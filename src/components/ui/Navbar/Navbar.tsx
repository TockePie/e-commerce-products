import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { navbar } from "@/utils/constants";

import styles from "./Navbar.styles";

const Navbar = () => {
  return (
    <AppBar component="nav">
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.leftBox}>
          <ShoppingBasketIcon sx={styles.shoppingBasket} />
          <Typography variant="h5" sx={styles.typography}>
            {navbar.title}
          </Typography>
        </Box>
        <Box sx={styles.rightBox}>
          <Button variant="contained" sx={styles.searchButton}>
            <SearchIcon />
            {navbar.searchText}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
