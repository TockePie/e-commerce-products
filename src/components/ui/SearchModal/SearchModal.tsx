import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Modal, Box, Typography, Input, List } from '@mui/material';

import calculateDiscountedPrice from '@/utils/calculateDiscountedPrice';
import SearchModalProps from '@/types/searchModal';
import { Product } from '@/types/product';

import styles from './SearchModal.styles';
import ThemeWrapper from '@/components/ThemeWrapper';
import { getProducts } from '@/lib/api';
import SearchItem from './search-item';

const SearchModal = ({ open, setOpen }: SearchModalProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchPrompt, setSearchPrompt] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getProducts();

      if (Array.isArray(result)) {
        setProducts(result);
      } else {
        setProducts([]);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (searchPrompt.length < 3) {
      return [];
    }

    return products.filter((product) =>
      product.title.toLowerCase().includes(searchPrompt.toLowerCase()),
    );
  }, [products, searchPrompt]);

  return (
    <ThemeWrapper>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={styles.modal}>
          <Input
            placeholder="Search..."
            onChange={(e) => setSearchPrompt(e.target.value)}
          />

          <List>
            {loading ? (
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
