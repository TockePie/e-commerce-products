'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

import { FilterState } from '@/types/filter-state';

import { categories, drawer } from './constants';
import styles from './styles';

interface Props {
  open: boolean;
  onClose: () => void;
  initialFilters: FilterState;
}

export default function DrawerComponent({
  open,
  onClose,
  initialFilters,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [category, setCategory] = useState(initialFilters.category);
  const [priceRange, setPriceRange] = useState(initialFilters.priceRange);
  const [rating, setRating] = useState(initialFilters.rating);

  const handleApplyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    const filterMappings = {
      category: category || null,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      rating: rating || null,
      page: '1',
    };

    Object.entries(filterMappings).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== '') {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });

    params.set('page', '1');

    router.push(`?${params.toString()}`);
    onClose();
  };

  const handleReset = () => {
    router.push('/');
    onClose();
  };

  const {
    title,
    category: catTitle,
    priceTitle,
    minRating,
    ratingRange,
    resetButton,
    closeButton,
  } = drawer;

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={styles.drawerBox}>
        <Box>
          <Typography variant="h5">{title}</Typography>

          <Typography variant="body1" sx={styles.categories}>
            {catTitle}
          </Typography>
          <RadioGroup
            value={category || ''}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <FormControlLabel
                key={cat}
                value={cat}
                control={<Radio />}
                label={cat}
              />
            ))}
          </RadioGroup>

          <Typography variant="body1" sx={styles.categories}>
            {priceTitle}
          </Typography>
          <Slider
            value={priceRange}
            onChange={(_, val) => setPriceRange(val as [number, number])}
            valueLabelDisplay="auto"
            min={drawer.priceRange.min}
            max={drawer.priceRange.max}
          />

          <Typography variant="body1" sx={styles.categories}>
            {minRating}
          </Typography>
          <Slider
            value={rating ?? 0}
            onChange={(_, val) => setRating(val as number)}
            valueLabelDisplay="auto"
            step={ratingRange.step}
            min={ratingRange.min}
            max={ratingRange.max}
          />
        </Box>

        <Box sx={styles.buttons}>
          <Button variant="text" onClick={handleReset}>
            {resetButton}
          </Button>
          <Button variant="contained" onClick={handleApplyFilters}>
            {closeButton}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
