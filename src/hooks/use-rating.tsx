import { useMemo } from "react";

const SIZES = {
  SMALL: { key: "s", size: 10 },
  MEDIUM: { key: "m", size: 18 },
  LARGE: { key: "l", size: 28 },
};

const useRating = (
  iconSize: string,
  ratingInPercent: number,
  showOutOf: boolean
) => {
  const nonFraction = Math.trunc(ratingInPercent);
  const fractionPercent = ((ratingInPercent - nonFraction) * 100).toFixed(2);

  const sizeKey = useMemo(
    () =>
      Object.keys(SIZES).find(
        (key: string) => SIZES[key as keyof typeof SIZES].key === iconSize
      ) as keyof typeof SIZES,
    [iconSize]
  );
  const size = SIZES[sizeKey].size;

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
        <div style={{ position: "relative" }} key={index}>
          <div
            style={{
              width: getStarFill(index),
              overflow: "hidden",
              position: "absolute",
            }}
          >
            {RatingHighlighted}
          </div>
          {RatingDefault}
        </div>
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
