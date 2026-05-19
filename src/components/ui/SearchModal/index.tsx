'use client';

import { useMemo, useState } from 'react';
import { Box, Input, List, Modal, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { getProducts } from '@/lib/api';
import calculateDiscountedPrice from '@/utils/calculateDiscountedPrice';

import SearchItem from './search-item';
import styles from './styles';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: Props) {
  const [searchPrompt, setSearchPrompt] = useState('');

  const { data = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });

  const filteredProducts = useMemo(() => {
    if (searchPrompt.length < 3) {
      return [];
    }

    return data.filter((product) =>
      product.title.toLowerCase().includes(searchPrompt.toLowerCase()),
    );
  }, [data, searchPrompt]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.modal}>
        <Input
          placeholder="Search..."
          onChange={(e) => setSearchPrompt(e.target.value)}
        />

        <List>
          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : filteredProducts.length === 0 ? (
            <Typography>No products found.</Typography>
          ) : (
            filteredProducts.map((product) => (
              <SearchItem
                key={product.id}
                product={product}
                discount={calculateDiscountedPrice(
                  product.price,
                  product.discountPercentage,
                )}
                onLeave={onClose}
              />
            ))
          )}
        </List>
      </Box>
    </Modal>
  );
}
