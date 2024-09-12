const styles = {
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchButton: {
    backgroundColor: "#fff",
    color: "black",
    gap: "0.5rem",
    borderRadius: "2rem",
  },
  typography: {
    "@media (max-width: 600px)": {
      display: "none",
    },
    marginLeft: "1rem",
    fontWeight: "bold",
  },
  leftBox: {
    display: "flex",
  },
  rightBox: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
};

export default styles;
