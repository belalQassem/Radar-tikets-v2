import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CroppedImageProvider } from "./context/CroppedImageContext";
import { VehicleDataProvider } from "./context/VehicleDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VehicleDataProvider>
      <CroppedImageProvider>
        <App />
      </CroppedImageProvider>
    </VehicleDataProvider>
  </React.StrictMode>
);
