import { useMemo, useReducer } from "react";

import { ProductType } from "@/types/product";

interface PayloadAction {
  type: "NEXT" | "PREV" | "SET";
  payload?: number;
}

const reducer = (state: number, action: PayloadAction) => {
  switch (action.type) {
    case "NEXT":
      return state + 1;
    case "PREV":
      return state - 1;
    case "SET":
      return action.payload ?? 0;
    default:
      return state;
  }
};

const usePages = (items: ProductType[], itemsPerPage: number) => {
  const [state, dispatch] = useReducer(reducer, 1);

  const totalPages = useMemo(
    () => Math.max(Math.ceil(items.length / Math.max(itemsPerPage, 1)), 1),
    [items.length, itemsPerPage]
  );

  const currentItems = useMemo(() => {
    const startIndex = (state - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, itemsPerPage, state]);

  return {
    state,
    totalPages,
    currentItems,
    dispatch,
  };
};

export default usePages;
