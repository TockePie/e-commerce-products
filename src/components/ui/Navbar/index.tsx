'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';

import styles from './Navbar.styles';

import SearchBtn from './search-btn';

const CartCount = dynamic(() => import('./cart-count'), {
  ssr: false,
  loading: () => <Typography variant="h6">0</Typography>,
});

export default function Navbar() {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar component="nav">
        <Toolbar sx={styles.toolbar}>
          <Box sx={styles.leftBox}>
            <Link href="/">
              <ShoppingBasketIcon sx={styles.shoppingBasket} />
            </Link>
            <Typography variant="h5" sx={styles.typography}>
              Online Shop
            </Typography>
          </Box>

          <Box sx={styles.rightBox}>
            <SearchBtn />

            <Link href="/cart">
              <IconButton
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <ShoppingCartIcon />
                <CartCount />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
