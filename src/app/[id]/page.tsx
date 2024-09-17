"use client";

import { useRouter } from "next/navigation";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Loading from "./loading";
import ImageCarousel from "@/components/ui/ImageCarousel/ImageCarousel";
import Rating from "@/components/ui/Stars/rating";

import useProducts from "@/hooks/use-products";

import styles from "./page.styles";

const ProductPage = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const { products, loading } = useProducts(params.id);

  const product = products[0];

  return (
    <Box component="main" sx={styles.main}>
      <IconButton
        onClick={() => router.push("/")}
        sx={{
          position: "absolute",
          top: 100,
          left: 20,
          zIndex: 1,
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ImageCarousel images={product.images} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 2,
            }}
          >
            <Typography variant="h4">{product.title}</Typography>
            <Box
              sx={{
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                ratingInPercent={product.rating}
                iconSize="l"
                showOutOf={true}
              />
              <Typography sx={{ marginLeft: 1 }} variant="body1">
                {product.rating && `${product.rating}/5`}
              </Typography>
            </Box>
            <Typography variant="body1">
              {product.brand && `Brand: ${product.brand}`}
            </Typography>
            {product.availabilityStatus == "Low Stock" ? (
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Hurry up! Only {product.stock} items left
              </Typography>
            ) : (
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                In Stock
              </Typography>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default ProductPage;
