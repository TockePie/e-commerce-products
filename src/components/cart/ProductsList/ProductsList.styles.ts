const styles = {
  product: {
    display: "flex",
    gap: 3,
    alignItems: "center",
  },
  itemButton: {
    display: "flex",
    justifyContent: "space-between",

    "@media (max-width: 767px)": {
      flexDirection: "column",
      gap: "1rem",
    },
  },
  priceBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

export default styles;
