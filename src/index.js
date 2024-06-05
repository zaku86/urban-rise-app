import React from "react";
import App from "./App";
import ReactDom from "react-dom/client";
import "./global.css";

const rootEl = document.getElementById("root");
ReactDom.createRoot(rootEl).render(<App />);
