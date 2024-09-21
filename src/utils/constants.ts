const categories = ["beauty", "fragrances", "furniture", "groceries"];

const navbar = {
  title: "Online Shop",
  searchText: "Search",
}

const drawer = {
  title: "Filter Options",
  firstFilter: "Category",
  secondFilter: "Price Range",
  thirdFilter: "Minimum Rating",
  priceRange: {
    min: 0,
    max: 3000,
  },
  ratingRange: {
    step: 0.5,
    min: 0,
    max: 5,
  },
};

const imageCarousel = {
  dotsColorActive: "blue",
  dotsColorInactive: "gray",
}

export { categories, navbar, drawer, imageCarousel };
