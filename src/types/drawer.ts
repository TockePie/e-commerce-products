interface Action {
  type: string;
  payload?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface DrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: React.Dispatch<Action>;
  selectedCategory: string | null;
  priceRange: [number, number];
  rating: number | null;
}

export default DrawerProps;
