"use client";

import React, { useCallback } from "react";
import {
  Box,
  Drawer,
  Typography,
  Slider,
  FormControlLabel,
  FormGroup,
  Button,
  RadioGroup,
  Radio,
} from "@mui/material";

import DrawerProps from "@/types/drawer";

import { drawer, categories } from "./Drawer.constants";
import styles from "./Drawer.styles";

const DrawerComponent: React.FC<DrawerProps> = ({
  open,
  setOpen,
  dispatch,
  selectedCategory,
  priceRange,
  rating,
}) => {
  const {
    title,
    category,
    priceTitle,
    minRating,
    ratingRange,
    resetButton,
    closeButton,
  } = drawer;

  const takeCheckbox = useCallback(
    (
      _: React.ChangeEvent<HTMLInputElement>,
      checked: boolean,
      category: string
    ) => {
      dispatch({
        type: "SET_CATEGORY",
        payload: checked ? category : "",
      });
    },
    [dispatch]
  );

  const changePriceRange = useCallback(
    (_: Event, newValue: number | number[]) => {
      if (Array.isArray(newValue) && newValue.length === 2) {
        dispatch({
          type: "SET_PRICE_RANGE",
          payload: newValue as [number, number],
        });
      }
    },
    [dispatch]
  );

  const reset = useCallback(() => {
    dispatch({ type: "SET_CATEGORY", payload: "" });
    dispatch({ type: "SET_PRICE_RANGE", payload: [0, 3000] });
    dispatch({ type: "SET_RATING", payload: null });
  }, [dispatch]);

  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <Box sx={styles.drawerBox}>
        <Box>
          <Typography variant="h5">{title}</Typography>

          <Typography variant="body1" sx={styles.categories}>
            {category}
          </Typography>
          <FormGroup>
            <RadioGroup>
              {categories.map((category: string) => (
                <FormControlLabel
                  key={category}
                  control={
                    <Radio
                      checked={selectedCategory === category}
                      onChange={(event, checked) =>
                        takeCheckbox(event, checked, category)
                      }
                    />
                  }
                  label={category}
                />
              ))}
            </RadioGroup>
          </FormGroup>

          <Typography variant="body1" sx={styles.categories}>
            {priceTitle}
          </Typography>
          <Slider
            value={priceRange}
            onChange={changePriceRange}
            valueLabelDisplay="auto"
            min={drawer.priceRange.min}
            max={drawer.priceRange.max}
          />

          <Typography variant="body1" sx={styles.categories}>
            {minRating}
          </Typography>
          <Slider
            value={rating ?? 0}
            onChange={(_, newValue) =>
              dispatch({ type: "SET_RATING", payload: newValue as number })
            }
            valueLabelDisplay="auto"
            step={ratingRange.step}
            min={ratingRange.min}
            max={ratingRange.max}
          />
        </Box>
        <Box sx={styles.buttons}>
          <Button variant="text" color="primary" onClick={reset}>
            {resetButton}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(false)}
          >
            {closeButton}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
