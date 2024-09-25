const styles = {
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    gap: "1rem",

    "@media (max-width: 768px)": {
      width: "95%",
    },
  },
  buttonBox: {
    display: "flex",
    gap: 2,
    justifyContent: "end",
  },
};

export default styles;
