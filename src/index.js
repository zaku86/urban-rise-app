import React from "react";
import App from "./App";
import ReactDom from "react-dom/client";
import "./global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const rootEl = document.getElementById("root");
ReactDom.createRoot(rootEl).render(<App />);
