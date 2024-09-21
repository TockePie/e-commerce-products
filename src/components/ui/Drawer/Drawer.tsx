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

import DrawerProps from "@/types/drawerInterface";

import { categories, drawer } from "@/utils/constants";

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
  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <Box sx={styles.drawerBox}>
        <Box>
          <Typography variant="h5">{drawer.title}</Typography>

          <Typography variant="body1" sx={styles.categories}>
            {drawer.firstFilter}
          </Typography>
          <FormGroup>
            {categories.map((category: string) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={selectedCategory === category}
                    onChange={() =>
                      setSelectedCategory(
                        selectedCategory === category ? null : category
                      )
                    }
                  />
                }
                label={category}
              />
            ))}
          </FormGroup>

          <Typography variant="body1" sx={styles.categories}>
            {drawer.secondFilter}
          </Typography>
          <Slider
            value={priceRange}
            onChange={(_, newValue) => {
              if (Array.isArray(newValue) && newValue.length === 2) {
                setPriceRange(newValue as [number, number]);
              }
            }}
            valueLabelDisplay="auto"
            min={drawer.priceRange.min}
            max={drawer.priceRange.max}
          />

          <Typography variant="body1" sx={styles.categories}>
            {drawer.thirdFilter}
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
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              setSelectedCategory(null);
              setPriceRange([drawer.priceRange.min, drawer.priceRange.max]);
              setRating(0);
            }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
