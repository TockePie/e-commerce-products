const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 400,
    height: 200,
    "@media (max-width: 600px)": {
      width: 310,
    },
    "@media (max-width: 1024px)": {
      height: 180,
    },
  },
  actionArea: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  brandText: {
    display: "flex",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  ratingBox: {
    marginTop: "10px",
  },
  priceBox: {
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

export default styles;
