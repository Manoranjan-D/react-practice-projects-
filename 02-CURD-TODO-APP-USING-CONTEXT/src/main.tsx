import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodoContextWrapper from "./Context/TodoContextWrapper";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoContextWrapper>
      <App />
    </TodoContextWrapper>
  </React.StrictMode>
);
