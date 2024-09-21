import { useState, useCallback } from "react";

const useImageCarousel = (images: string[]) => {
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

  return {
    currentIndex,
    handleNext,
    handlePrev,
    setCurrentIndex,
  };
};

export default useImageCarousel;
