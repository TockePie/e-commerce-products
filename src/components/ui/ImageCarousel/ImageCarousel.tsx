import React, { useMemo, useCallback, memo } from "react";
import { IconButton, Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import useImageCarousel from "@/hooks/use-image-carousel";
import ImageCarouselProps from "@/types/imageCarouselType";

import styles from "./ImageCarousel.styles";

const ImageCarousel: React.FC<ImageCarouselProps> = memo(({ images }) => {
  const { currentIndex, handleNext, handlePrev, setCurrentIndex } =
    useImageCarousel(images);

  const ImageComponent = useCallback(() => {
    return (
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        loading="lazy"
        sx={styles.imgBox}
      />
    );
  }, [images, currentIndex]);

  const dots = useMemo(
    () =>
      images.map((_, index) => (
        <Box
          key={index}
          onClick={() => setCurrentIndex(index)}
          sx={{
            ...styles.dots,
            backgroundColor: index === currentIndex ? "blue" : "gray",
          }}
        />
      )),
    [images, currentIndex, setCurrentIndex]
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
          <IconButton onClick={handlePrev} sx={styles.backButton}>
            <ArrowBack />
          </IconButton>

          <Box sx={styles.dotsBox}>{dots}</Box>

          <IconButton onClick={handleNext} sx={styles.forwardButton}>
            <ArrowForward />
          </IconButton>
        </Box>
      )}
    </Box>
  );
});

ImageCarousel.displayName = "ImageCarousel";

export default ImageCarousel;
