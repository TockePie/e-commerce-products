"use client";

import { useRouter } from "next/navigation";
import {
  Box,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Typography,
  tableCellClasses,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Loading from "./loading";
import ImageCarousel from "@/components/ui/ImageCarousel/ImageCarousel";
import Rating from "@/components/ui/Stars/rating";

import useProducts from "@/hooks/use-products";
import calculateDiscountedPrice from "@/utils/calculateDiscountedPrice";
import { ProductType } from "@/types/cardTypes";

import styles from "./page.styles";

const ProductPage = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const { products, loading } = useProducts(params.id);

  const product = products[0];

  return (
    <Box component="main" sx={styles.main}>
      <IconButton onClick={() => router.push("/")} sx={styles.backToHome}>
        <ArrowBackIcon />
      </IconButton>
      {loading ? <Loading /> : <MainSection {...product} />}
    </Box>
  );
};

const MainSection = (data: ProductType) => {
  const productDetails = [
    { key: "Brand", value: data.brand },
    { key: "Category", value: data.category },
    { key: "Shipping", value: data.shippingInformation },
    { key: "Warranty", value: data.warrantyInformation },
    { key: "Return", value: data.returnPolicy },
  ];

  const discount = calculateDiscountedPrice(
    data.price,
    data.discountPercentage
  );

  return (
    <>
      <ImageCarousel images={data.images} />
      <Box sx={styles.contentBox}>
        <Typography variant="h4">{data.title}</Typography>

        <Box sx={styles.ratingBox}>
          <Typography variant="body1">
            {data.rating && `${data.rating}`}
          </Typography>
          <Rating ratingInPercent={data.rating} iconSize="l" showOutOf={true} />
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

        {data.availabilityStatus == "Low Stock" ? (
          <Typography
            variant="body1"
            sx={{ ...styles.stockStatus, ...styles.redText }}
          >
            Hurry up! Only {data.stock} {data.stock === 1 ? "item" : "items"}{" "}
            left
          </Typography>
        ) : (
          <Typography
            variant="body1"
            sx={{ ...styles.stockStatus, ...styles.greenText }}
          >
            In Stock
          </Typography>
        )}

        <Divider />
        <TableContainer>
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
              },
            }}
          >
            <TableBody>
              {productDetails.map(
                ({ key, value }) =>
                  value && (
                    <TableRow key={key}>
                      <TableCell
                        sx={{
                          padding: "0.5rem",
                        }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                          {key}
                        </Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          padding: "0.5rem",
                        }}
                      >
                        {value}
                      </TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Divider />

        <Box sx={styles.description}>
          <Typography variant="h5">Description</Typography>
          <Typography variant="body1">{data.description}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProductPage;
