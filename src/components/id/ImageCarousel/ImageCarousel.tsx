"use client";

import React, { useMemo, useCallback, memo, useReducer, useEffect } from "react";
import { IconButton, Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import ImageCarouselProps, { ImageCarouselState } from "@/types/imageCarousel";

import constant from "./ImageCarousel.constants";
import reducer from "./ImageCarousel.reducer";
import styles from "./ImageCarousel.styles";

const ImageCarousel: React.FC<ImageCarouselProps> = memo(({ images }) => {
  const initialState: ImageCarouselState = { images: images, currentImage: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "NEXT" });
    }, constant.intervalTime);

    return () => clearInterval(interval);
  }, []);

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
                ? constant.dotsColorActive
                : constant.dotsColorInactive,
          }}
        />
      )),
    [images, state.currentImage]
  );

  return (
    <>
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
    </>
  );
});

ImageCarousel.displayName = "ImageCarousel";

export default ImageCarousel;
