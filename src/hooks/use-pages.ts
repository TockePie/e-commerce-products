'use client';

import { useMemo, useReducer } from 'react';

import { Product } from '@/types/product';

interface ImageCarouselAction {
  type: 'NEXT' | 'PREV' | 'SET';
  payload?: number;
}

const reducer = (state: number, action: ImageCarouselAction) => {
  switch (action.type) {
    case 'NEXT':
      return state + 1;
    case 'PREV':
      return state - 1;
    case 'SET':
      return action.payload ?? 0;
    default:
      return state;
  }
};

const usePages = (items: Product[], itemsPerPage: number) => {
  const [state, dispatch] = useReducer(reducer, 1);

  const totalPages = useMemo(
    () => Math.max(Math.ceil(items.length / Math.max(itemsPerPage, 1)), 1),
    [items.length, itemsPerPage],
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
