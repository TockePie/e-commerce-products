import { Box, Typography } from "@mui/material";
import { BeatLoader } from "react-spinners";

import styles from "@/app/page.styles";

const Loading = () => {
  return (
    <Box sx={styles.loadingPage}>
      <Typography variant="h4">Loading</Typography>
      <BeatLoader size={10} loading={true} />
    </Box>
  );
};

export default Loading;
