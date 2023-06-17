import { useContext } from "react";
import { myContext } from "../Context/RootContext";

const Test = () => {
  const store = useContext(myContext);
  console.log(store.getState());
  return <p className="Test">Test.js</p>;
};

export default Test;
