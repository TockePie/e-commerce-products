"use client";

import { Box, Divider, Typography } from "@mui/material";

import Loading from "./loading";
import ImageCarousel from "@/components/ui/ImageCarousel/ImageCarousel";
import Rating from "@/components/ui/Stars/rating";

import useProducts from "@/hooks/use-products";
import calculateDiscountedPrice from "@/utils/calculateDiscountedPrice";
import { ProductType } from "@/types/cardTypes";

import styles from "./page.styles";
import ProductsInfo from "@/components/ui/ProductsInfo/ProductsInfo";
import Reviews from "@/components/ui/Reviews/Reviews";

const ProductPage = ({ params }: { params: { id: number } }) => {
  const { products, loading } = useProducts(params.id);

  const product = products[0];

  return <>{loading ? <Loading /> : <MainSection {...product} />}</>;
};

const MainSection = (data: ProductType) => {
  const discount = calculateDiscountedPrice(
    data.price,
    data.discountPercentage
  );

  return (
    <Box>
      <Box component="main" sx={styles.main}>
        <ImageCarousel images={data.images} />
        <Box sx={styles.contentBox}>
          <Typography variant="h4">{data.title}</Typography>

          <Box sx={styles.ratingBox}>
            <Typography variant="body1">
              {data.rating && `${data.rating}`}
            </Typography>
            <Rating
              ratingInPercent={data.rating}
              iconSize="l"
              showOutOf={true}
            />
            <Typography variant="body1">{`(${data.reviews.length} reviews)`}</Typography>
          </Box>

          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={
                data.discountPercentage
                  ? { textDecoration: "line-through" }
                  : undefined
              }
            >
              {`$${data.price}`}
            </Typography>
            {data.discountPercentage && (
              <Typography variant="h5" color="red">
                {`$${discount}`}
              </Typography>
            )}
          </Box>

          <Typography
            variant="body1"
            sx={{
              ...styles.stockStatus,
              ...(data.availabilityStatus === "Low Stock"
                ? styles.redText
                : styles.greenText),
            }}
          >
            {data.availabilityStatus === "Low Stock"
              ? `Hurry up! Only ${data.stock} ${
                  data.stock === 1 ? "item" : "items"
                } left`
              : "In Stock"}
          </Typography>

          <Divider />
          <ProductsInfo {...data} />
          <Divider />

          <Box sx={styles.description}>
            <Typography variant="h5">Description</Typography>
            <Typography variant="body1">{data.description}</Typography>
          </Box>
        </Box>
      </Box>

      <Reviews {...data} />
    </Box>
  );
};

export default ProductPage;
