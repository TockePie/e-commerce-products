const styles = {
  card: {
    width: 400,
    height: 200,
    "@media (max-width: 600px)": {
      width: 310,
    },
  },
  actionArea: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  media: {
    width: 200,
    height: 200,
    "@media (max-width: 600px)": {
      width: 150,
      height: 150,
    },
  },
  titleText: {
    "@media (max-width: 600px)": {
      fontSize: "1rem",
    },
  },
  brandText: {
    display: "flex",
  },
  ratingBox: {
    marginTop: "10px",
  },
  priceBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

export default styles;
