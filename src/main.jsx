import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CartProvider from "./context/CartContext.jsx";
import Lightbox from "./components/Lightbox.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Lightbox>
        <App />
      </Lightbox>
    </CartProvider>
  </React.StrictMode>
);
