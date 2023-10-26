import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./main.css";

document.body.classList.remove("dark");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
