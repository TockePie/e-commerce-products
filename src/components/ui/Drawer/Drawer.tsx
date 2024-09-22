import {
  Box,
  Drawer,
  Typography,
  Slider,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
} from "@mui/material";

import { categories, drawer } from "@/utils/constants";
import DrawerProps from "@/types/drawer";

import styles from "./Drawer.styles";

const DrawerComponent: React.FC<DrawerProps> = ({
  open,
  setOpen,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  rating,
  setRating,
}) => {
  const takeCheckbox = (
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    category: string
  ) => {
    setSelectedCategory(checked ? category : null);
  };

  const changePriceRange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue) && newValue.length === 2) {
      setPriceRange(newValue as [number, number]);
    }
  };

  const reset = () => {
    setSelectedCategory(null);
    setPriceRange([drawer.priceRange.min, drawer.priceRange.max]);
    setRating(0);
  };

  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <Box sx={styles.drawerBox}>
        <Box>
          <Typography variant="h5">{drawer.title}</Typography>

          <Typography variant="body1" sx={styles.categories}>
            {drawer.category}
          </Typography>
          <FormGroup>
            {categories.map((category: string) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={selectedCategory === category}
                    onChange={(event, checked) =>
                      takeCheckbox(event, checked, category)
                    }
                  />
                }
                label={category}
              />
            ))}
          </FormGroup>

          <Typography variant="body1" sx={styles.categories}>
            {drawer.priceTitle}
          </Typography>
          <Slider
            value={priceRange}
            onChange={changePriceRange}
            valueLabelDisplay="auto"
            min={drawer.priceRange.min}
            max={drawer.priceRange.max}
          />

          <Typography variant="body1" sx={styles.categories}>
            {drawer.minRating}
          </Typography>
          <Slider
            value={rating || 0}
            onChange={(_, newValue) => setRating(newValue as number)}
            valueLabelDisplay="auto"
            step={drawer.ratingRange.step}
            min={drawer.ratingRange.min}
            max={drawer.ratingRange.max}
          />
        </Box>
        <Box sx={styles.buttons}>
          <Button variant="text" color="primary" onClick={reset}>
            {drawer.resetButton}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(false)}
          >
            {drawer.closeButton}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
