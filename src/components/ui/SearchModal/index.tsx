'use client';

import { useMemo, useState } from 'react';
import { Box, Input, List, Modal, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import ThemeWrapper from '@/components/ThemeWrapper';
import { getProducts } from '@/lib/api';
import SearchModalProps from '@/types/searchModal';
import calculateDiscountedPrice from '@/utils/calculateDiscountedPrice';

import SearchItem from './search-item';
import styles from './styles';

const SearchModal = ({ open, setOpen }: SearchModalProps) => {
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
    <ThemeWrapper>
      <Modal open={open} onClose={() => setOpen(false)}>
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
                  onLeave={() => setOpen(false)}
                />
              ))
            )}
          </List>
        </Box>
      </Modal>
    </ThemeWrapper>
  );
};

export default SearchModal;
