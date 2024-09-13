"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

import Rating from "@/components/ui/Stars/rating";

const ProductCard = ({ product }) => {
  console.log(product);

  const calculateDiscountedPrice = (
    price: number,
    discountPercentage: number
  ) => {
    const discountedPrice = price - (price * discountPercentage) / 100;
    return parseFloat(discountedPrice.toFixed(2));
  };

  const discount = calculateDiscountedPrice(
    product.price,
    product.discountPercentage
  );

  return (
    <Card
      sx={{
        maxWidth: 500,
      }}
    >
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={product.images[0]}
        />
        {/* <Box>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </Box> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "flex" }}
          >
            {product.brand}
          </Typography>
          <Chip label={product.category} size="small" />
          <Rating
            ratingInPercent={product.rating}
            iconSize="m"
            showOutOf={true}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={
                product.discountPercentage && { textDecoration: "line-through" }
              }
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
    </Card>
  );
};

export default ProductCard;
