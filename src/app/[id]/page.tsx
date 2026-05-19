import { Box, Divider, Typography } from '@mui/material';

import AddToCart from '@/components/id/AddToCart';
import ImageCarousel from '@/components/id/ImageCarousel';
import ProductInfo from '@/components/id/ProductsInfo';
import ReviewCard from '@/components/id/ReviewCard';
import Rating from '@/components/ui/Rating';
import { getProductById } from '@/lib/api';
import calculateDiscountedPrice from '@/utils/calculate-discounted-price';

import styles from './page.styles';

export default async function ProductPage({
  params,
}: {
  params: { id: number };
}) {
  const { id } = await params;

  const product = await getProductById(id);
  if (!product) {
    return (
      <Box component="main" sx={styles.main}>
        <Typography variant="h5" color="error">
          Failed to load product details.
        </Typography>
      </Box>
    );
  }

  const discountPrice = product.discountPercentage
    ? calculateDiscountedPrice(product.price, product.discountPercentage)
    : null;

  return (
    <>
      <Box component="main" sx={styles.main}>
        <ImageCarousel images={product.images} />

        <Box sx={styles.content}>
          <Typography variant="h4">{product.title}</Typography>

          <Box sx={styles.ratingBox}>
            <Typography variant="body1">
              {product.rating && `${product.rating}`}
            </Typography>
            <Rating
              ratingInPercent={product.rating}
              iconSize="l"
              showOutOf={true}
            />
            <Typography variant="body1">{`(${product.reviews.length} reviews)`}</Typography>
          </Box>

          <Box sx={styles.priceAndCartBox}>
            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={
                  product.discountPercentage
                    ? { textDecoration: 'line-through' }
                    : undefined
                }
              >
                {`$${product.price}`}
              </Typography>
              {product.discountPercentage && (
                <Typography variant="h5" color="red">
                  {`$${discountPrice}`}
                </Typography>
              )}
            </Box>
            <AddToCart product={product} />
          </Box>

          <Typography
            variant="body1"
            sx={{
              ...styles.stockStatus,
              ...(product.availabilityStatus === 'Low Stock'
                ? styles.redText
                : styles.greenText),
            }}
          >
            {product.availabilityStatus === 'Low Stock'
              ? `Hurry up! Only ${product.stock} ${
                  product.stock === 1 ? 'item' : 'items'
                } left`
              : 'In Stock'}
          </Typography>

          <Divider />
          <ProductInfo product={{ ...product }} />
          <Divider />

          <Box sx={styles.description}>
            <Typography variant="h5">Description</Typography>
            <Typography variant="body1">{product.description}</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.reviews.box}>
        <Typography variant="h5" sx={styles.reviews.title}>
          Reviews
        </Typography>

        <Box sx={styles.reviews.container}>
          {product.reviews.map((review, index) => (
            <ReviewCard key={review.comment} review={review} index={index} />
          ))}
        </Box>
      </Box>
    </>
  );
}
