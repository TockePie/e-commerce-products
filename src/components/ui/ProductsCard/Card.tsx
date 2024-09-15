"use client";

import { Suspense } from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

import Rating from "@/components/ui/Stars/rating";

import styles from "./Card.styles";

const ProductCard = ({ product }) => {
  const calculateDiscountedPrice = (
    price: number,
    discountPercentage: number
  ) => {
    const discountedPrice = price - (price * discountPercentage) / 100;
    return parseFloat(discountedPrice.toFixed(2));
  };

  const discount = calculateDiscountedPrice(
    product.price,
    product.discountPercentage
  );

  return (
    <Card sx={styles.card}>
      <CardActionArea sx={styles.actionArea}>
        <Suspense fallback={<div>Loading...</div>}>
          <CardMedia
            component="img"
            sx={styles.media}
            image={product.images[0]}
          />
        </Suspense>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={styles.titleText}
          >
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={styles.brandText}
          >
            {product.brand}
          </Typography>
          <Chip label={product.category} size="small" />
          <Box sx={styles.ratingBox}>
            <Rating
              ratingInPercent={product.rating}
              iconSize="m"
              showOutOf={true}
            />
          </Box>
          <Box sx={styles.priceBox}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={
                product.discountPercentage && { textDecoration: "line-through" }
              }
            >
              {`$${product.price}`}
            </Typography>
            {product.discountPercentage && (
              <Typography variant="body1" color="red">
                {`$${discount}`}
              </Typography>
            )}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
