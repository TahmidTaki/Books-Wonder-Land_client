import DashboardLayout from "../Layouts/DashboardLayout";
import Blogs from "../Pages/Blogs/Blogs";
import BooksCollection from "../Pages/BooksCollection/BooksCollection";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import BuyerDashboard from "../Pages/Dashboard/BuyerDashboard/BuyerDashboard";
import Payment from "../Pages/Dashboard/BuyerDashboard/Payment/Payment";
import CommonDashboard from "../Pages/Dashboard/CommonDashboard/CommonDashboard";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import AddProduct from "../Pages/Dashboard/SellerDashboard/AddProduct";
import MyProducts from "../Pages/Dashboard/SellerDashboard/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://my-books-resale-server.vercel.app/bookings/${params.id}`),
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <BooksCollection></BooksCollection>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(`https://my-books-resale-server.vercel.app/category/${params.id}`);
        },
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/myorders",
        element: <BuyerDashboard></BuyerDashboard>,
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reporteditem",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
    ],
  },
]);

export default router;
