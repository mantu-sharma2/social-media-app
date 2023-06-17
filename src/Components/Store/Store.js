import { createStore } from "redux";
import CombineReducers from "../Reducers/CombineReducers";
import { data } from "../../Data";

const store = createStore(CombineReducers);
store.dispatch({ type: "ADD_POSTS_TO_UI", posts: data });

export default store;
