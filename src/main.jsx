import React from "react";
import { createRoot } from "react-dom/client";

import Heart from "./HeartComponent/Heart.jsx"
import Cart from "./CartComponent/Cart.jsx"
import LoggedIn from "./Registration/LoggedIn.jsx";


import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoggedIn>
    <Cart>
    <Heart>
    <App />
    </Heart>
    </Cart>
    </LoggedIn>
  </React.StrictMode>
);