import Login from "pages/Main/Authorization/Login";
import SignUp from "pages/Main/Authorization/SignUp";
import Main from "pages/Main/Main";

const routerData = [
  {
    url: "/",
    component: <Main />
  },
  {
    url: "/login",
    component: <Login />
  },
  {
    url: "/signup",
    component: <SignUp />
  },
];

export default routerData;