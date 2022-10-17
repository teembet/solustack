import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "../context/ThemeContext";
import type { AppProps } from "next/app";
import * as React from "react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider initialTheme={"light"}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
