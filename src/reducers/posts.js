const post = (posts = [], action) => {
  switch (action.type) {
    case " ":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];

    default:
      return posts;
  }
};
export default post;
