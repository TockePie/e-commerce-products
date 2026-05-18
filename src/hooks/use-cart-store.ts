import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Product } from '@/types/product';

interface CartState {
  cart: Product[];

  toggleCartItem: (product: Product) => void;
  //   removeItem: (itemId: ItemId) => void;
  //   clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      toggleCartItem: (product) => {
        const { cart } = get();
        const isProductInCart = cart.some((item) => item.id === product.id);

        if (isProductInCart) {
          set({
            cart: cart.filter((item) => item.id !== product.id),
          });
        } else {
          set({
            cart: [...cart, product],
          });
        }
      },
      //   removeItem: (itemId) => {
      //     set((state) => ({
      //       cart: state.cart.filter((item) => item.id !== itemId),
      //     }));
      //   },
      //   clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart',
    },
  ),
);
