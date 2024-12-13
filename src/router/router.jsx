import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
