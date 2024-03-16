import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { EmailJSProvider } from "./ContextAPI/EmailJSContextAPI.jsx";
import { EmailJSContactProvider } from "./ContextAPI/EmailJSContextAPIContact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmailJSContactProvider>
      <EmailJSProvider>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </EmailJSProvider>
    </EmailJSContactProvider>
  </React.StrictMode>
);
