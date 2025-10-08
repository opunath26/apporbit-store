import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import Apps from "../components/Apps/Apps";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
  {
    path: "/home",
    element: <Home />,
  },
    ]
  },
 
  {
    path: "/apps",
    element: <Apps /> ,
  },
]);

export default router