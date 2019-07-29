import App from "./components/App";
import Post from "./containers/PostContainer";

const routes = [
  {
    path: "/",
    component: App,
    exact: true
  },
  {
    path: "/:id",
    exact: true,
    component: Post
  }
];

export default routes;
