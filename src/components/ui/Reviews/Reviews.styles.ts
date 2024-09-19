const styles = {
  reviews: {
    display: "grid",
    justifyContent: "center",
    padding: "0 3rem",

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
};

export default styles;
