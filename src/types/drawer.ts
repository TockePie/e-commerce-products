interface DrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategory: string | null;
  setSelectedCategory: (value: string | null) => void;
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
  rating: number | null;
  setRating: (value: number | null) => void;
}

export default DrawerProps;
