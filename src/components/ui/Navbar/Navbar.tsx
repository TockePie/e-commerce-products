"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { navbar } from "@/utils/constants";

import styles from "./Navbar.styles";
import SearchModal from "../SearchModal/SearchModal";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <AppBar component="nav">
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
