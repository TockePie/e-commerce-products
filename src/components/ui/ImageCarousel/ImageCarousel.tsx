import React, { useState } from "react";
import { IconButton, Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import styles from "./ImageCarousel.styles";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

  const handlePrev = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  const ImageComponent = () => {
    return (
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        sx={styles.imgBox}
      />
    );
  };

  if (images.length === 1)
    return (
      <Box sx={styles.mainBox}>
        <ImageComponent />
      </Box>
    );

  return (
    <Box sx={styles.mainBox}>
      <ImageComponent />
      <Box sx={styles.contentBox}>
        <IconButton onClick={handlePrev} sx={styles.backButton}>
          <ArrowBack />
        </IconButton>

        <Box sx={styles.dotsBox}>
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                ...styles.dots,
                backgroundColor: index === currentIndex ? "blue" : "gray",
              }}
            />
          ))}
        </Box>

        <IconButton onClick={handleNext} sx={styles.forwardButton}>
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImageCarousel;
