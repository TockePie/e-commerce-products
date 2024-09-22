type RatingType = {
  iconSize: string;
  ratingInPercent: number;
  showOutOf: boolean;
};

type IconType = "ratingHighlighted" | "ratingDefault";

type StarComponentType = {
  type: IconType;
  width: number;
  height: number;
};

export type { RatingType, IconType, StarComponentType };
