import { Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <Skeleton animation="wave" variant="rounded" width={500} height={200} />
  );
};

export default Loading;
