"use client";

import React, { useMemo } from "react";
import { Box, Divider, ThemeProvider, Typography } from "@mui/material";

import Loading from "./loading";
import Rating from "@/components/ui/Stars/rating";

import useProducts from "@/hooks/use-products";
import calculateDiscountedPrice from "@/utils/calculateDiscountedPrice";
import { ProductType } from "@/types/productTypes";
import darkTheme from "@/components/darkTheme";

import styles from "./page.styles";

const ImageCarousel = React.lazy(
  () => import("@/components/ui/ImageCarousel/ImageCarousel")
);
const ProductsInfo = React.lazy(
  () => import("@/components/ui/ProductsInfo/ProductsInfo")
);
const Reviews = React.lazy(() => import("@/components/ui/Reviews/Reviews"));

const ProductPage = ({ params }: { params: { id: number } }) => {
  const { products, loading, error } = useProducts(params.id);

  if (error) {
    return (
      <Typography variant="body1" color="error">
        Failed to load product details.
      </Typography>
    );
  }

  const product = products.length > 0 ? products[0] : null;

  return <>{loading ? <Loading /> : <MainSection {...product} />}</>;
};

const MainSection = (data: ProductType) => {
  console.log(data);
  const discount = useMemo(
    () => calculateDiscountedPrice(data.price, data.discountPercentage),
    [data.price, data.discountPercentage]
  );

  return (
    <ThemeProvider theme={darkTheme}>
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
    </ThemeProvider>
  );
};

export default ProductPage;
