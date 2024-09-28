import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";

import calculateDiscountedPrice from "@/utils/calculateDiscountedPrice";
import { ProductType } from "@/types/product";

import styles from "./ProductsList.styles";
import ThemeWrapper from "@/components/ThemeWrapper";

const ProductsList = ({
  parsedCartItems,
}: {
  parsedCartItems: ProductType[];
}) => {
  const router = useRouter();

  return (
    <ThemeWrapper>
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
                    {`$${(product.price * product.minimumOrderQuantity).toFixed(
                      2
                    )}`}
                  </Typography>
                  {product.discountPercentage && (
                    <Typography variant="body1" color="red">
                      {`$${(discount * product.minimumOrderQuantity).toFixed(
                        2
                      )}`}
                    </Typography>
                  )}
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </ThemeWrapper>
  );
};

export default ProductsList;
