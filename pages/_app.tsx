import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

const theme = extendTheme({
  fonts: {
    body: "var(--Poppins)",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;