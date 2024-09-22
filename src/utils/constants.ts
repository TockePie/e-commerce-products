const categories = ["beauty", "fragrances", "furniture", "groceries"];

const navbar = {
  title: "Online Shop",
  searchText: "Search",
}

const drawer = {
  title: "Filter Options",
  category: "Category",
  priceTitle: "Price Range",
  minRating: "Minimum Rating",
  priceRange: {
    min: 0,
    max: 3000,
  },
  ratingRange: {
    step: 0.5,
    min: 0,
    max: 5,
  },
  resetButton: "Reset",
  closeButton: "Close",
};

const imageCarousel = {
  dotsColorActive: "blue",
  dotsColorInactive: "gray",
}

const reviews = {
  title: "Reviews",
};

const starSizes = {
  SMALL: { key: "s", size: 10 },
  MEDIUM: { key: "m", size: 18 },
  LARGE: { key: "l", size: 28 },
};

export { categories, navbar, drawer, imageCarousel, reviews, starSizes };
