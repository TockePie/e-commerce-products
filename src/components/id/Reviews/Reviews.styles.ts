const styles = {
  mainBox: {
    marginTop: "3.5rem",
    padding: "3rem",
  },
  reviewsText: {
    textAlign: "center",
  },
  reviews: {
    display: "grid",
    justifyContent: "center",

    "@media (max-width: 768px)": {
      padding: "0 1rem",
    },
  },
  reviewCard: {
    margin: "1rem",
    paddingTop: "5vh",
    alignItems: "center",
    textAlign: "center",
    width: 300,
    height: 200,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
};

export default styles;
