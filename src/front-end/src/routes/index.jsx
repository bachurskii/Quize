import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import App from "../App";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./privateRoute/priveteRoute";
import NotFound from "../pages/NotFound/NotFound";
const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <App />,

        // loader: teamLoader,
      },
      {
        path: "/sign-in",
        element: <SignIn />,

        // loader: teamLoader,
      },
      {
        path: "/sign-up",
        element: <SignUp />,

        // loader: teamLoader,
      },

      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/quize",
            // element:
          },
          {
            path: "/quize/:category",
            // element:
          },
          {
            path: "/rules",
            // element:
          },
          {
            path: "/you-win",
            // element:
          },
          {
            path: "/you-lose",
            // element:
          },
        ],
        // loader: teamLoader,
      },
      {
        path: "*",
        element: <NotFound />,

        // loader: teamLoader,
      },
    ],
  },
]);

export default router;
