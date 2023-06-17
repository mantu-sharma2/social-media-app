import { Posts } from "./Posts";

const currentState = {
  posts: ["this is a sample text"],
};

export default function CombineReducers(state = currentState, action) {
  //currentState={post=[],...}
  return {
    posts: Posts(state.posts, action),
    // users:[],
  };
}
