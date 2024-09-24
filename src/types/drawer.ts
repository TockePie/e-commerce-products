type FilterAction = 
  | { type: 'SET_RATING'; payload: number | null }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_PRICE_RANGE'; payload: [number, number] };

interface DrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: React.Dispatch<FilterAction>;
  selectedCategory: string | null;
  priceRange: [number, number];
  rating: number | null;
}

export default DrawerProps;
export { type FilterAction };
