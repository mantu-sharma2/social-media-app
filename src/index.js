import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
// import { Provider } from "react";
import store from "./Components/Store/Store";
import myContext from "./Components/Context/RootContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <myContext.Provider value={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </myContext.Provider>
);
