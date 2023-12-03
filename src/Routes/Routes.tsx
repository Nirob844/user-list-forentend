import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import TeamCreate from "../components/TeamCreate";
import UserCreatte from "../components/UserCreatte";
import Home from "../pages/Home/Home";
import Team from "../pages/team/Team";
import TeamDetailsPage from "../pages/team/TeamDetailsPage";
import Users from "../pages/user/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/create-user",
        element: <UserCreatte></UserCreatte>,
      },
      {
        path: "/teams",
        element: <Team></Team>,
      },
      {
        path: "/create-team",
        element: <TeamCreate></TeamCreate>,
      },
      {
        path: "/teams/:id",
        element: <TeamDetailsPage></TeamDetailsPage>,
      },
    ],
  },
]);
