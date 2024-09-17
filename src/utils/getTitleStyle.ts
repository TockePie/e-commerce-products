const titleStyle = {
  titleText: {
    fontSize: "1.2rem",
  },
  smallText: {
    fontSize: "1rem",
  },
};

const getTitleStyle = (title: string) => {
  return title.length > 20 ? titleStyle.smallText : titleStyle.titleText;
};

export default getTitleStyle;