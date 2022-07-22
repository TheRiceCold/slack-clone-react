import "./styles/globals.sass";

import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";

import AuthProvider from "./contexts/AuthContext";
import App from "./App";

const root = document.getElementById("root") as HTMLDivElement;

createRoot(root)
  .render(
    <StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <App /> 
        </BrowserRouter>
      </AuthProvider>
    </StrictMode>
  );
