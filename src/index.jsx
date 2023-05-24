import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/inter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GetStarted from "./pages/GetStarted/GetStarted";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home/*" element={<App />} />
        <Route path="/" element={<GetStarted />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
