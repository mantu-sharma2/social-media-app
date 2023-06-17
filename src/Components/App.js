import React from "react";
import Navbar from "./Navbar";
import "../Components/CSS/style.scss";
import Body from "./Body";
import store from "../Components/Store/Store";
import myContext from "./Context/RootContext";

const App = () => {
  return (
    <myContext.Provider value={store}>
      <div className="App">
        <Navbar />
        <Body />
      </div>
    </myContext.Provider>
  );
};

export default App;
