import { green, red } from "@mui/material/colors";

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    marginTop: "3.5rem",
    padding: "3rem",

    "@media (max-width: 768px)": {
      flexDirection: "column",
      padding: "1rem",
    },
  },
  backToHome: {
    position: "absolute",
    top: 100,
    left: 20,
    zIndex: 1,
  },
  contentBox: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    gap: 1.5,
    padding: 2,

    "@media (max-width: 768px)": {
      width: "100%",
      marginTop: 6,
    },
  },
  ratingBox: {
    pointerEvents: "none",
    display: "flex",
    gap: 2,
    alignItems: "center",
  },
  stockStatus: {
    fontWeight: "bold",
  },
  redText: {
    color: red[500],
  },
  greenText: {
    color: green[500],
  },
  description: {
    display: "flex",
    flexDirection: "column",
    marginTop: 2,
    gap: 2,
  },
  loadingPage: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
};

export default styles;
