"use client";

import { Suspense, memo } from "react";
import { useRouter } from "next/navigation";
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
import getTitleStyle from "@/utils/getTitleStyle";
import ProductProps from "@/types/product";

import styles from "./Card.styles";
import moduleStyles from "./Card.module.scss";

const ProductCard = ({ product }: ProductProps) => {
  const router = useRouter();
  const {
    id,
    price,
    discountPercentage,
    images,
    title,
    brand,
    category,
    rating,
  } = product;

  const discount = calculateDiscountedPrice(price, discountPercentage);

  return (
    <Card sx={styles.card}>
      <CardActionArea
        sx={styles.actionArea}
        onClick={() => router.push(`/${id}`)}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Image
            className={moduleStyles.productImage}
            src={images[0]}
            alt={title}
            width={200}
            height={200}
          />
        </Suspense>

        <CardContent sx={styles.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={getTitleStyle(title)}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={styles.brandText}
          >
            {brand}
          </Typography>

          <Chip label={category} size="small" />

          <Box sx={styles.ratingBox}>
            <Rating ratingInPercent={rating} iconSize="m" showOutOf={true} />
          </Box>

          <Box sx={styles.priceBox}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={
                discountPercentage
                  ? { textDecoration: "line-through" }
                  : undefined
              }
            >
              {`$${price}`}
            </Typography>
            {discountPercentage && (
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

export default memo(ProductCard);
