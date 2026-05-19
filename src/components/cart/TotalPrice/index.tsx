import { Box, Typography } from '@mui/material';

import { Product } from '@/types/product';
import calculateDiscountedPrice from '@/utils/calculateDiscountedPrice';

import styles from './styles';

const TotalPrice = ({ cart }: { cart: Product[] }) => {
  return (
    <Box sx={styles.main}>
      <Typography variant="h5" sx={{ fontWeight: 400 }}>
        Total:
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        $
        {cart
          .reduce((acc, product) => {
            const discount = calculateDiscountedPrice(
              product.price,
              product.discountPercentage,
            );
            return acc + discount * product.minimumOrderQuantity;
          }, 0)
          .toFixed(2)}
      </Typography>
    </Box>
  );
};

export default TotalPrice;
