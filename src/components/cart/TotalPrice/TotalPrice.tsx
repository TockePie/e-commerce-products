import { Box, Typography } from "@mui/material";

import calculateDiscountedPrice from "@/utils/calculateDiscountedPrice";
import { ProductType } from "@/types/product";

import styles from "./TotalPrice.styles";

const TotalPrice = ({
  parsedCartItems,
}: {
  parsedCartItems: ProductType[];
}) => {
  return (
    <Box sx={styles.main}>
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
  );
};

export default TotalPrice;
