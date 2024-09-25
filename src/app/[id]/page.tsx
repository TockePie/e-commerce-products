"use server";

import React from "react";
import { Box, Divider, Typography } from "@mui/material";

import Rating from "@/components/ui/Stars/rating";
import ThemeWrapper from "@/components/ThemeWrapper";
import AddToCart from "@/components/ui/AddToCart/AddToCard";

import getProducts from "@/utils/getProducts";
import calculateDiscountedPrice from "@/utils/calculateDiscountedPrice";
import { ProductType } from "@/types/product";

import styles from "./page.styles";

const ImageCarousel = React.lazy(
  () => import("@/components/ui/ImageCarousel/ImageCarousel")
);
const ProductsInfo = React.lazy(
  () => import("@/components/ui/ProductsDetails/ProductsDetails")
);
const Reviews = React.lazy(() => import("@/components/ui/Reviews/Reviews"));

const ProductPage = async ({ params }: { params: { id: number } }) => {
  const product = await getProducts(params.id);

  if (!product || Array.isArray(product)) {
    return (
      <Box component="main" sx={styles.main}>
        <Typography variant="body1" color="error">
          Failed to load product details.
        </Typography>
      </Box>
    );
  }

  const discountPrice = product.discountPercentage
    ? calculateDiscountedPrice(product.price, product.discountPercentage)
    : undefined;

  return (
    <ThemeWrapper>
      <MainSection {...product} discountPrice={discountPrice} />
    </ThemeWrapper>
  );
};

const MainSection = ({
  discountPrice,
  ...data
}: ProductType & { discountPrice?: number }) => {
  return (
    <>
      <Box component="main" sx={styles.main}>
        <Box sx={styles.imageBox}>
          {data.images.length === 1 ? (
            <Box
              component="img"
              src={data.images[0]}
              alt={"Image"}
              loading="lazy"
              sx={styles.image}
            />
          ) : (
            <ImageCarousel images={data.images} />
          )}
        </Box>

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

          <Box sx={styles.priceAndCartBox}>
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
                  {`$${discountPrice}`}
                </Typography>
              )}
            </Box>
            <AddToCart data={data} />
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
    </>
  );
};

export default ProductPage;
