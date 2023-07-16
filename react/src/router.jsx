import { Navigate, createBrowserRouter } from "react-router-dom";
import ListingSearch from "./views/ListingSearch";
import ListingDetail from "./views/ListingDetail";
import CreateListing from "./views/CreateListing";
import Signup from "./views/Signup";
import Login from "./views/Login";
import AuthLayout from "./components/AuthLayout";
import NotFound from "./views/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/search" />,
    errorElement: <NotFound />,
  },
  {
    path: "/search",
    element: <ListingSearch />,
  },
  {
    path: "/view/:listingId",
    element: <ListingDetail />,
  },
  {
    path: "/create",
    element: <CreateListing />,
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
