import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PhotosGive from "./index/PhotosIndex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PhotosGive>
        <App />
      </PhotosGive>
    </BrowserRouter>
  </React.StrictMode>
);
