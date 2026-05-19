import { Box } from '@mui/material';

import StarIcon from './star-icon';
import styles from './styles';

interface Props {
  iconSize: 's' | 'm' | 'l';
  ratingInPercent: number;
  showOutOf: boolean;
}

const STAR_SIZES = {
  s: 10,
  m: 18,
  l: 28,
};

export default function Rating({
  iconSize,
  ratingInPercent,
  showOutOf,
}: Props) {
  const size = STAR_SIZES[iconSize] || 18;

  return (
    <Box sx={styles.root}>
      {[...Array(5)].map((_, index) => {
        const isPastRating = index >= Math.ceil(ratingInPercent);
        if (!showOutOf && isPastRating) return null;

        let fillWidth = '0%';
        if (index < Math.floor(ratingInPercent)) {
          fillWidth = '100%';
        } else if (index === Math.floor(ratingInPercent)) {
          fillWidth = `${(ratingInPercent % 1) * 100}%`;
        }

        return (
          <Box key={index} sx={styles.star}>
            <Box
              sx={{
                width: fillWidth,
                ...styles.highlightedBox,
              }}
            >
              <StarIcon type="highlighted" size={size} />
            </Box>

            <StarIcon type="default" size={size} />
          </Box>
        );
      })}
    </Box>
  );
}
