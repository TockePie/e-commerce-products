import axios, { AxiosError } from 'axios';

import { Product } from '@/types/product';

const BASE_URL = 'https://dummyjson.com';

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await axios.get(`${BASE_URL}/products`);
    return res.data.products;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(`Unable to fetch products. Code: ${error.code}`);
    }

    throw new Error('Unknown error');
  }
}

export async function getProductById(id: number): Promise<Product> {
  try {
    const res = await axios.get(`${BASE_URL}/products/${String(id)}`);
    return res.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(`Unable to fetch products. Code: ${error.code}`);
    }

    throw new Error('Unknown error');
  }
}
