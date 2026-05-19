'use client';

import { memo, Suspense } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import Rating from '@/components/ui/Rating';
import { Product } from '@/types/product';
import calculateDiscountedPrice from '@/utils/calculate-discounted-price';

import styles from './Card.styles';

import moduleStyles from './Card.module.scss';

const titleStyleForCard = {
  titleText: {
    fontSize: '1.2rem',
  },
  smallText: {
    fontSize: '1rem',
  },
};

const ProductCard = ({ product }: { product: Product }) => {
  const discount = calculateDiscountedPrice(
    product.price,
    product.discountPercentage,
  );

  return (
    <Card sx={styles.card}>
      <Link href={`/${product.id}`}>
        <CardActionArea sx={styles.actionArea}>
          <Suspense fallback={<Box>Loading...</Box>}>
            <Image
              className={moduleStyles.productImage}
              src={product.images[0]}
              alt={product.title}
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
              sx={
                product.title.length > 20
                  ? titleStyleForCard.smallText
                  : titleStyleForCard.titleText
              }
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
                sx={{
                  textDecoration: product.discountPercentage
                    ? 'line-through'
                    : 'none',
                }}
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
      </Link>
    </Card>
  );
};

export default memo(ProductCard, (prevProps, nextProps) => {
  return prevProps.product.id === nextProps.product.id;
});
