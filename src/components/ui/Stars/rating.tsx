import React from "react";
import { Box } from "@mui/material";

import IconComponent from "./starsIcons";

import useRating from "@/hooks/use-rating";

import styles from "./rating.styles";

const RatingComponent = ({
  iconSize,
  ratingInPercent,
  showOutOf,
}: {
  iconSize: string;
  ratingInPercent: number;
  showOutOf: boolean;
}) => {
  const { size, renderStar } = useRating(iconSize, ratingInPercent, showOutOf);

  const RatingHighlighted = (
    <IconComponent type="ratingHighlighted" width={size} height={size} />
  );
  const RatingDefault = (
    <IconComponent type="ratingDefault" width={size} height={size} />
  );

  return (
    <Box sx={styles.root}>
      {[...Array(5)].map((_, index) =>
        renderStar(RatingHighlighted, RatingDefault)(index)
      )}
    </Box>
  );
};

export default RatingComponent;
