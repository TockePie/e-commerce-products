const styles = {
  imgBox: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    transition: "transform 0.5s ease-in-out",
  },
  mainBox: {
    width: "50%",
    height: "80vh",
    display: "flex",
    flexDirection: "column",

    "@media (max-width: 768px)": {
      width: "100%",
      height: "50vh",
    },
  },
  contentBox: {
    display: "flex",
    justifyContent: "space-around",
  },
  backButton: {
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
  },
  dotsBox: {
    display: "flex",
    alignItems: "center",
  },
  dots: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    margin: "0 5px",
    cursor: "pointer",
  },
  forwardButton: {
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
  },
};

export default styles;
