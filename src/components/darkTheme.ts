import { createTheme } from "@mui/material/styles";

const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? createTheme({
      palette: {
        mode: "dark",
      },
    })
  : createTheme({
      palette: {
        mode: "light",
      },
    });

export default darkTheme;
