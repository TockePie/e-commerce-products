import React, { useState } from "react";
import { IconButton, Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const ImageCarousel = ({ images }) => {
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
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease-in-out",
        }}
      />
    );
  };

  if (images.length === 1)
    return (
      <Box sx={{ width: "50%", display: "flex", flexDirection: "column" }}>
        <ImageComponent />
      </Box>
    );

  return (
    <Box sx={{ width: "50%", display: "flex", flexDirection: "column" }}>
      <ImageComponent />
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <IconButton
          onClick={handlePrev}
          sx={{
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
          }}
        >
          <ArrowBack />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: index === currentIndex ? "blue" : "gray",
                margin: "0 5px",
                cursor: "pointer",
              }}
            />
          ))}
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImageCarousel;
