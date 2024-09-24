const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "3.5rem",
    gap: "2rem",
    padding: "3rem",

    "@media (max-width: 767px)": {
      padding: "2rem 1rem",
    },

    "@media (min-width: 768px) and (max-width: 1023px)": {
      padding: "2rem 1rem",
    },

    "@media (min-width: 1024px) and (max-width: 1279px)": {
      padding: "2rem 7vw",
    },

    "@media (min-width: 1280px) and (max-width: 1535px)": {
      padding: "2rem 4vw",
    },
    
    "@media (min-width: 1536px)": {
      marginTop: "4rem",
      marginLeft: "5vw",
      marginRight: "5vw",
    },
  },
  cart: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "0.5rem",
    width: "100%",
    maxWidth: "40rem",
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
