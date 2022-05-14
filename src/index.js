import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme.jsx";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Providers from "./Providers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <Theme>
        <Providers>
          <App />
        </Providers>
      </Theme>
    </React.StrictMode>
  </BrowserRouter>
);
