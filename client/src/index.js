import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { UserProvider } from "./components/UserContext";
import { PlantProvider } from "./components/PlantContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <PlantProvider>
        <App />
      </PlantProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
