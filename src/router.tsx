
import Login from "pages/Main/Authorization/Login";
import SignUp from "pages/Main/Authorization/SignUp";
import Main from "pages/Main/Main";

import MyScedule from "pages/MySchedule/MySchedule";

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
  {
    url: "/myschedule",
    component: <MyScedule />
  }
];

export default routerData;