import React, { useState, useMemo, useCallback, memo } from "react";
import { IconButton, Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import styles from "./ImageCarousel.styles";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = memo(({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(
    () =>
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      ),
    [images.length]
  );

  const handlePrev = useCallback(
    () =>
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      ),
    [images.length]
  );

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
    [images, currentIndex]
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
