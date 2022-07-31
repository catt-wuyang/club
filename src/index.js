import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/homepage";
import DocPage from "./page/post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="docs/:pageId" element={<DocPage />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
