
import Login from "./pages/Main/Authorization/Login";
import SignUp from "./pages/Main/Authorization/SignUp";
import Main from "./pages/Main/Main";
import { MySchedule } from "./pages/MySchedule/MySchedule";
import { ScheduleCource } from "./pages/SchduleCource/ScheduleCource";

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
    component: <MySchedule />
  },
  {
    url: "/schedulecource",
    component: <ScheduleCource />
  }
];

export default routerData;