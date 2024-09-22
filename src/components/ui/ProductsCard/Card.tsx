"use client";

import { Suspense, memo, useCallback } from "react";
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
import { titleStyleForCard } from "@/utils/constants";
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

  const getTitleStyle = useCallback((title: string) => {
    return title.length > 20
      ? titleStyleForCard.smallText
      : titleStyleForCard.titleText;
  }, []);

  return (
    <Card sx={styles.card}>
      <CardActionArea
        sx={styles.actionArea}
        onClick={() => router.push(`/${id}`)}
      >
        <Suspense fallback={<Box>Loading...</Box>}>
          <Image
            className={moduleStyles.productImage}
            src={images[0]}
            alt={title}
            width={200}
            height={200}
            loading="lazy"
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
              sx={{
                textDecoration: discountPercentage ? "line-through" : "none",
              }}
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

export default memo(ProductCard, (prevProps, nextProps) => {
  return prevProps.product.id === nextProps.product.id;
});
