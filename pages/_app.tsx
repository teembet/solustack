import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import * as React from "react";
import { ContextProvider } from "../context";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <ContextProvider>
        <div className="bg-bg1">
          <Component {...pageProps} />
        </div>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
