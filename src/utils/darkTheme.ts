import { createTheme } from "@mui/material/styles";

let darkTheme;

if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
} else {
  darkTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
}

export default darkTheme;