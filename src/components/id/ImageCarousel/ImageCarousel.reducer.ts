import {
  type ImageCarouselAction,
  type ImageCarouselState,
} from "@/types/imageCarousel";

const reducer = (
  state: ImageCarouselState,
  action: ImageCarouselAction
): ImageCarouselState => {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        currentImage:
          state.currentImage === state.images.length - 1
            ? 0
            : state.currentImage + 1,
      };
    case "PREV":
      return {
        ...state,
        currentImage:
          state.currentImage === 0
            ? state.images.length - 1
            : state.currentImage - 1,
      };
    case "SET":
      return {
        ...state,
        currentImage: action.payload ?? 0,
      };
    default:
      return state;
  }
};

export default reducer;
