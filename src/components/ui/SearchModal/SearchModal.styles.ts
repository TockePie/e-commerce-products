const styles = {
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,

    "@media (max-width: 768px)": {
      width: "95%",
    },
  },
  product: {
    display: "flex",
    gap: 3,
    alignItems: "center",
  },
  itemButton: {
    display: "flex",
    justifyContent: "space-between",
  },
  priceBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

export default styles;
