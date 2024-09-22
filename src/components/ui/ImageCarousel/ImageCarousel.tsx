import React, { useMemo, useCallback, memo, useReducer } from "react";
import { IconButton, Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import { imageCarousel } from "@/utils/constants";
import reducer from "./ImageCarousel.reducer";
import { type ImageCarouselProps } from "@/types/imageCarouselType";

import styles from "./ImageCarousel.styles";

const ImageCarousel: React.FC<ImageCarouselProps> = memo(({ images }) => {
  const [state, dispatch] = useReducer(reducer, { currentImage: 0 });

  const ImageComponent = useCallback(
    () => (
      <Box
        component="img"
        src={images[state.currentImage]}
        alt={`Slide ${state.currentImage}`}
        loading="lazy"
        sx={styles.imgBox}
      />
    ),
    [images, state.currentImage]
  );

  const dots = useMemo(
    () =>
      images.map((_, index) => (
        <Box
          key={index}
          onClick={() => dispatch({ type: "SET", payload: index })}
          sx={{
            ...styles.dots,
            backgroundColor:
              index === state.currentImage
                ? imageCarousel.dotsColorActive
                : imageCarousel.dotsColorInactive,
          }}
        />
      )),
    [images, state.currentImage]
  );

  if (images.length === 1)
    return (
      <Box sx={styles.mainBox}>
        <ImageComponent />
      </Box>
    );

  return (
    <Box sx={styles.mainBox}>
      <ImageComponent />
      {images.length > 1 && (
        <Box sx={styles.contentBox}>
          <IconButton
            onClick={() => dispatch({ type: "PREV" })}
            sx={styles.backButton}
          >
            <ArrowBack />
          </IconButton>

          <Box sx={styles.dotsBox}>{dots}</Box>

          <IconButton
            onClick={() => dispatch({ type: "NEXT" })}
            sx={styles.forwardButton}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      )}
    </Box>
  );
});

ImageCarousel.displayName = "ImageCarousel";

export default ImageCarousel;
