"use client";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const darkTheme = React.useMemo(() => {
    return createTheme({
      palette: {
        mode:
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
      },
    });
  }, []);

  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
