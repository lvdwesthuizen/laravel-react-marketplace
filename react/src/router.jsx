import { createBrowserRouter } from "react-router-dom";
import ListingSearch from "./views/ListingSearch";
import ListingDetail from "./views/ListingDetail";
import CreateListing from "./views/CreateListing";
import Signup from "./views/Signup";
import Login from "./views/Login";
import AuthLayout from "./components/AuthLayout";
import DashboardLayout from "./components/DashboardLayout";
import WebsiteLayout from "./components/WebsiteLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      {
        path: "search",
        element: <ListingSearch />,
      },
      {
        path: "view",
        element: <ListingDetail />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "create",
        element: <CreateListing />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
