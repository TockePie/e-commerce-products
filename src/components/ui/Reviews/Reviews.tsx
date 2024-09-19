import { Box, Card, CardContent, Typography } from "@mui/material";

import Rating from "@/components/ui/Stars/rating";

import styles from "./Reviews.styles";
import { ProductType } from "@/types/cardTypes";

const Reviews = (data: ProductType) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          marginTop: 4,
        }}
      >
        Reviews
      </Typography>
      <Box sx={styles.reviews}>
        {data.reviews.map((review, index) => (
          <Card
            key={index}
            sx={{
              gridColumnStart: index + 1,
              gridColumnEnd: index + 2,
              "@media (max-width: 768px)": {
                gridColumnStart: 1,
                gridColumnEnd: 2,
              },
              ...styles.reviewCard,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Typography variant="h6">{review.comment}</Typography>
              <Box>
                <Typography variant="body1">{review.reviewerName}</Typography>
                <Rating
                  ratingInPercent={review.rating}
                  iconSize="m"
                  showOutOf={true}
                />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Reviews;
