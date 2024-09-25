import React, { useMemo } from "react";
import { Box } from "@mui/material";

import IconComponent from "./starsIcons";

import useRating from "@/hooks/use-rating";
import { RatingType } from "@/types/rating";

import styles from "./rating.styles";

const starSizes = {
  SMALL: { key: "s", size: 10 },
  MEDIUM: { key: "m", size: 18 },
  LARGE: { key: "l", size: 28 },
};


const RatingComponent = ({
  iconSize,
  ratingInPercent,
  showOutOf,
}: RatingType) => {
  const { size, renderStar } = useRating(iconSize, ratingInPercent, showOutOf);

  const RatingHighlighted = useMemo(
    () => <IconComponent type="ratingHighlighted" width={size} height={size} />,
    [size]
  );
  const RatingDefault = useMemo(
    () => <IconComponent type="ratingDefault" width={size} height={size} />,
    [size]
  );

  const starsArray = useMemo(() => [...Array(5)], []);

  return (
    <Box sx={styles.root}>
      {starsArray.map((_, index) =>
        renderStar(RatingHighlighted, RatingDefault)(index)
      )}
    </Box>
  );
};

export default RatingComponent;
