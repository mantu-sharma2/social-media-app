export function Posts(state, action) {
  //currentState=[posts]
  switch (action.type) {
    case "ADD_POSTS_TO_UI":
      // console.log("adding");
      return (state = action.posts);
    default:
      return state;
  }
}
