import React from "react";
import defaultClasses from "./rating.module.css";
import IconComponent from "./starsIcons";
import useRating from "@/hooks/use-rating";

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
    <div className={defaultClasses.root}>
      {[...Array(5)].map((_, index) =>
        renderStar(RatingHighlighted, RatingDefault)(index)
      )}
    </div>
  );
};

export default RatingComponent;
