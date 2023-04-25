import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { SearchStateProvider } from "@shared/contexts/search";
import { theme, QueryProvider } from "@shared/lib";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <SearchStateProvider>
        <QueryProvider>
          <App />
        </QueryProvider>
      </SearchStateProvider>
    </ChakraProvider>
  </React.StrictMode>
);
