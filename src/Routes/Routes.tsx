import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import TeamCreate from "../components/TeamCreate";
import TeamDetailsPage from "../components/TeamDetailsPage";
import Home from "../pages/Home/Home";
import Team from "../pages/team/Team";
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
