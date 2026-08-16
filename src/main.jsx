import React from "react";
import { createRoot } from "react-dom/client";

import { makeServer } from "./api/server";

if (import.meta.env.DEV) {
  makeServer();
}

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);