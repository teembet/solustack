import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import * as React from "react";
import { ContextProvider } from "../context";
import { ThemeProvider } from "../context/ThemeContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider initialTheme={"light"}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
