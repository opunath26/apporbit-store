import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import Apps from "../components/Apps/Apps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Installation from "../components/Installation/Installation";
import AppDetails from "../components/AppDetails/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
  {
    index: true,
    element: <Home />,
    // loader: () => fetch('./appData.json'),
  },
  {
    path: "/apps",
    element: <Apps /> ,
    // loader: () => fetch('./appData.json'),
  },
  {
    path: "/installation",
    element: <Installation /> ,
  },
  {
    path: '/app/:id',
    element: <AppDetails />,
  }

    ]
  },
 
//   {
//     path: '*',
//     element: <ErrorPage />,
//   }
  
]);

export default router