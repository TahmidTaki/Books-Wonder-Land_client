import BooksCollection from "../Pages/BooksCollection/BooksCollection";
import BuyerDashboard from "../Pages/Dashboard/BuyerDashboard/BuyerDashboard";
import CommonDashboard from "../Pages/Dashboard/CommonDashboard/CommonDashboard";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/dashboard",
        element: <CommonDashboard></CommonDashboard>,
      },
      {
        path: "/buyerdashboard",
        element: <BuyerDashboard></BuyerDashboard>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <BooksCollection></BooksCollection>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
    ],
  },
]);

export default router;
