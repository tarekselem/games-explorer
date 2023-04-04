import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { SearchStateProvider } from "@shared/context/search";
import { theme, QueryProvider } from "@shared/lib";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SearchStateProvider>
      <QueryProvider>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
      </QueryProvider>
    </SearchStateProvider>
  </React.StrictMode>
);
