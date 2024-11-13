import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./normalize.css";
import "./webflow.css";
// import './index.css'
import App from "./App.jsx";

import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
import { Provider } from "react-redux";
import { store } from "./store";

Amplify.configure(amplifyconfig);

const existingConfig = Amplify.getConfig();

Amplify.configure({
  ...existingConfig,
  API: {
    ...existingConfig.API,
    REST: {
      ...existingConfig.API?.REST,
      dml: {
        endpoint:
          "https://8l6vtl7cme.execute-api.us-west-1.amazonaws.com/publicV1",
        region: "us-west-1",
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
