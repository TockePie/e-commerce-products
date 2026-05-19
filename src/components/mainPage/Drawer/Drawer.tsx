'use client';

import React from 'react';
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

import { FilterState } from '@/app/page';

import { categories, drawer } from './Drawer.constants';
import styles from './Drawer.styles';

interface Props {
  open: boolean;
  onClose: () => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onReset: () => void;
}

export default function DrawerComponent({
  open,
  onClose,
  filters,
  setFilters,
  onReset,
}: Props) {
  const { category, priceRange, rating } = filters;
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
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, category: e.target.value }))
            }
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
            onChange={(_, val) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: val as [number, number],
              }))
            }
            valueLabelDisplay="auto"
            min={drawer.priceRange.min}
            max={drawer.priceRange.max}
          />

          <Typography variant="body1" sx={styles.categories}>
            {minRating}
          </Typography>
          <Slider
            value={rating ?? 0}
            onChange={(_, val) =>
              setFilters((prev) => ({ ...prev, rating: val as number }))
            }
            valueLabelDisplay="auto"
            step={ratingRange.step}
            min={ratingRange.min}
            max={ratingRange.max}
          />
        </Box>

        <Box sx={styles.buttons}>
          <Button variant="text" onClick={onReset}>
            {resetButton}
          </Button>
          <Button variant="contained" onClick={onClose}>
            {closeButton}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
