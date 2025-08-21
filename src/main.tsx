import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./theme/style.css";

import App from "./App.tsx";
import { EnigmaProvider, ToastContainer } from "@/components";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <EnigmaProvider>
        <ToastContainer />
        <App />
      </EnigmaProvider>
    </BrowserRouter>
  </StrictMode>
);
