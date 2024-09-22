import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

import Rating from "@/components/ui/Stars/rating";

import { ProductType } from "@/types/product";

import styles from "./Reviews.styles";
import { reviews } from "@/utils/constants";

const Reviews = (data: ProductType) => {
  return (
    <Box sx={styles.mainBox}>
      <Divider sx={styles.divider} />
      <Typography variant="h5" sx={styles.reviewsText}>
        {reviews.title}
      </Typography>
      <Box sx={styles.reviews}>
        {data.reviews.map((review, index) => (
          <Card
            variant="outlined"
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
            <CardContent sx={styles.cardContent}>
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
    </Box>
  );
};

export default Reviews;
