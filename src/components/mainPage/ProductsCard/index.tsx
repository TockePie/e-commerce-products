import { memo } from 'react';
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

import styles from './styles';

const ProductCard = ({ product }: { product: Product }) => {
  const discount = calculateDiscountedPrice(
    product.price,
    product.discountPercentage,
  );

  return (
    <Card sx={styles.card}>
      <Link href={`/${product.id}`}>
        <CardActionArea sx={styles.actionArea}>
          <Box sx={styles.imgBox}>
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
              style={{ objectFit: 'contain' }}
              priority={false}
            />
          </Box>

          <CardContent sx={styles.content}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={
                product.title.length > 20
                  ? styles.title.small
                  : styles.title.default
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
                <Typography variant="body1" color="error">
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

export default memo(ProductCard);
