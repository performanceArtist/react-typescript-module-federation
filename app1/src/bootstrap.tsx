import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./AppOne";
import { BrowserRouter } from "react-router-dom";
import { emitter } from "core/_types";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <App
        deps={{
          app2Count: emitter.of(0),
          app2Click: emitter.of<void>(undefined),
        }}
      />
    </BrowserRouter>
  </ChakraProvider>
);
