import { FilterAction } from "@/types/drawer";

const initialState = {
  selectedCategory: null as string | null,
  priceRange: [0, 3000] as [number, number],
  rating: null as number | null,
};

type State = typeof initialState;

const reducer = (state: State, action: FilterAction): State => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export { initialState, reducer };