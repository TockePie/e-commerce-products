"use client";

import { Suspense } from "react";
import Image from "next/image";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

import Rating from "@/components/ui/Stars/rating";
import calculateDiscountedPrice from "@/utils/calculateDiscountedPrice";
import ProductCardProps from "@/types/cardTypes";

import styles from "./Card.styles";
import moduleStyles from "./Card.module.scss";

const titleStyle = {
  titleText: {
    fontSize: "1.2rem",
  },
  smallText: {
    fontSize: "1rem",
  },
};

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = calculateDiscountedPrice(
    product.price,
    product.discountPercentage
  );

  const getTitleStyle = (title: string) => {
    return title.length > 20 ? titleStyle.smallText : titleStyle.titleText;
  };

  return (
    <Card sx={styles.card}>
      <CardActionArea sx={styles.actionArea}>
        <Suspense fallback={<div>Loading...</div>}>
          <Image
            className={moduleStyles.productImage}
            src={product.images[0]}
            alt={product.title}
            width={200}
            height={200}
          />
        </Suspense>
        <CardContent sx={styles.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={getTitleStyle(product.title)}
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
                product.discountPercentage
                  ? { textDecoration: "line-through" }
                  : undefined
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
