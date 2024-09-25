import { tableCellClasses } from "@mui/material/TableCell";

const styles = {
  table: {
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none",
    },
  },
  tableCell: {
    padding: "0.5rem",
  },
  propsTitleBox: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  title: {
    fontWeight: "bold",
  },
};

export default styles;
