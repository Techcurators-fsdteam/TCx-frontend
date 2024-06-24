import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { UserProvider } from "./store/UserContext.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
    <UserProvider>
      <App />
    </UserProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
