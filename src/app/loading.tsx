import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Box, Typography } from '@mui/material';

import styles from '@/app/page.styles';

export default function Loading() {
  return (
    <Box sx={styles.loading.box}>
      <Typography variant="h4">Loading</Typography>
      <AutorenewIcon sx={styles.loading.spinner} />
    </Box>
  );
}
