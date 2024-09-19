import { useMemo } from "react";
import { Box } from "@mui/material";

const SIZES = {
  SMALL: { key: "s", size: 10 },
  MEDIUM: { key: "m", size: 18 },
  LARGE: { key: "l", size: 28 },
};

const styles = {
  ratingBox: {
    position: "relative",
  },
  highlightedBox: {
    overflow: "hidden",
    position: "absolute",
  },
};

const useRating = (
  iconSize: string,
  ratingInPercent: number,
  showOutOf: boolean
) => {
  const nonFraction = Math.trunc(ratingInPercent);
  const fractionPercent = ((ratingInPercent - nonFraction) * 100).toFixed(2);

  const size = useMemo(() => {
    const sizeKey = Object.keys(SIZES).find(
      (key: string) => SIZES[key as keyof typeof SIZES].key === iconSize
    ) as keyof typeof SIZES;
    return SIZES[sizeKey].size;
  }, [iconSize]);

  const getStarFill = (index: number) => {
    if (index < nonFraction) return "100%";
    if (index === nonFraction) return `${fractionPercent}%`;
    return "0%";
  };

  const renderStar = (
    RatingHighlighted: JSX.Element,
    RatingDefault: JSX.Element
  ) => {
    const StarComponent = (index: number) =>
      (showOutOf || index < nonFraction + 1) && (
        <Box sx={styles.ratingBox} key={index}>
          <Box
            sx={{
              width: getStarFill(index),
              ...styles.highlightedBox,
            }}
          >
            {RatingHighlighted}
          </Box>
          {RatingDefault}
        </Box>
      );

    StarComponent.displayName = "StarComponent";
    return StarComponent;
  };

  return {
    size,
    renderStar,
  };
};

export default useRating;
