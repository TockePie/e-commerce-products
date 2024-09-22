interface ImageCarouselProps {
  images: string[];
}

interface ImageCarouselState {
  images: string[];
  currentImage: number;
}

interface ImageCarouselAction {
  type: "NEXT" | "PREV" | "SET";
  payload?: number;
}

export type { ImageCarouselState, ImageCarouselAction };
export default ImageCarouselProps;
