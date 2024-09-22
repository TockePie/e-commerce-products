import {
  type ImageCarouselAction,
  type ImageCarouselState,
} from "@/types/imageCarouselType";

const reducer = (
  state: ImageCarouselState,
  action: ImageCarouselAction
): ImageCarouselState => {
  switch (action.type) {
    case "NEXT":
      return { currentImage: state.currentImage + 1 };
    case "PREV":
      return { currentImage: state.currentImage - 1 };
    case "SET":
      return { currentImage: action.payload ?? 0 };
    default:
      return state;
  }
};

export default reducer;
