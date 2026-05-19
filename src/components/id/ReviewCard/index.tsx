import { Box, Card, CardContent, Typography } from '@mui/material';

import Rating from '@/components/ui/Rating';
import { Review } from '@/types/product';

import styles from './styles';

interface Props {
  review: Review;
  index: number;
}

export default function ReviewCard({ review, index }: Props) {
  return (
    <Card
      variant="outlined"
      sx={{
        gridColumnStart: { xs: 1, md: index + 1 },
        gridColumnEnd: { xs: 2, md: index + 2 },
        ...styles.card,
      }}
    >
      <CardContent sx={styles.content}>
        <Typography variant="h6" component="p">
          {review.comment}
        </Typography>
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
  );
}
