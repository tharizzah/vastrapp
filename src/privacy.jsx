import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./normalize.css";
import "./webflow.css";
// import './index.css'
import AppPrivacy from "./AppPrivacy.jsx";

createRoot(document.getElementById("privacy-root")).render(
  <StrictMode>
    <AppPrivacy />
  </StrictMode>
);
