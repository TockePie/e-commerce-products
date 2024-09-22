interface ImageCarouselProps {
  images: string[];
}

interface ImageCarouselState {
  currentImage: number;
}

interface ImageCarouselAction {
  type: "NEXT" | "PREV" | "SET";
  payload?: number;
}

export type { ImageCarouselProps, ImageCarouselState, ImageCarouselAction };
