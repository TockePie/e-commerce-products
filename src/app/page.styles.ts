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
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",

    "@media (max-width: 767px)": {
      flexDirection: "column",
      gap: "0.5rem",
    },
  },
  gridContainer: {
    alignItems: "center",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },

  loadingPage: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
};

export default styles;
