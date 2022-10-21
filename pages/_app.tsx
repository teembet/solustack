import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import * as React from "react";
import { ContextProvider } from "../context";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <ThemeProvider enableSystem={false} attribute="class">
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ThemeProvider>
    </motion.div>
  );
}

export default MyApp;
