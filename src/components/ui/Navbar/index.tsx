import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

import CartCount from './cart-count';
import SearchBtn from './search-btn';
import styles from './styles';

export default function Navbar() {
  return (
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
  );
}
