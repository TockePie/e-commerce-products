'use client';

import { memo, useEffect, useState } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

import styles from './styles';

const ImageCarousel = memo(({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const total = images.length;

  useEffect(() => {
    if (total <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [total]);

  if (total === 0) return null;
  if (total === 1) {
    return (
      <Box
        component="img"
        src={images[0]}
        alt="Slide 0"
        loading="lazy"
        sx={styles.imgBox}
      />
    );
  }

  const navigate = (direction: 1 | -1) => {
    setCurrentImage((prev) => (prev + direction + total) % total);
  };

  return (
    <>
      <Box
        component="img"
        src={images[currentImage]}
        alt={`Slide ${currentImage}`}
        loading="lazy"
        sx={styles.imgBox}
      />

      <Box sx={styles.contentBox}>
        <IconButton onClick={() => navigate(-1)} sx={styles.backButton}>
          <ArrowBack />
        </IconButton>

        <Box sx={styles.dotsBox}>
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentImage(index)}
              sx={{
                ...styles.dots,
                backgroundColor: index === currentImage ? '#1976D2' : 'gray',
              }}
            />
          ))}
        </Box>

        <IconButton onClick={() => navigate(1)} sx={styles.forwardButton}>
          <ArrowForward />
        </IconButton>
      </Box>
    </>
  );
});

ImageCarousel.displayName = 'ImageCarousel';

export default ImageCarousel;
