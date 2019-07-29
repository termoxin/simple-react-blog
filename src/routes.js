import App from "./components/App";
import User from "./containers/UserContainer";

const routes = [
  {
    path: "/",
    component: App,
    exact: true
  },
  {
    path: "/:username",
    component: User
  }
];

export default routes;
