// import App from "./components/App";
import Post from "./containers/PostContainer";
import Posts from "./containers/PostsContainer";

const routes = [
  {
    path: "/posts/:id",
    exact: true,
    component: Post
  },
  {
    path: "/",
    exact: true,
    component: Posts
  }
];

export default routes;
