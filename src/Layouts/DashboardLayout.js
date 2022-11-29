import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import LoadSpinner from "../components/Utilities/LoadSpinner";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useSeller from "../Hooks/useSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user, loading } = useContext(AuthContext);

  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email);

  if (loading || isAdminLoading || isSellerLoading) {
    return <LoadSpinner></LoadSpinner>;
  }
  return (
    <div>
      <Navbar></Navbar>

      {/* buyer view of dashboard */}
      {!isAdmin && !isSeller ? (
        <>
          <div className="flex flex-col justify-center">
            <div className="">
              <ul className="menu p-4 w-80 mx-auto bg-base-100 text-base-content">
                <div className=" p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100">
                  <div className="flex items-center p-2 space-x-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfb4boKKaHu5x1oFASsO92hJb-78nyVcFKRT_WxvRf1O165kUOYWfa0uGn12tfdw8uRU&usqp=CAU"
                      alt=""
                      className="w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{user.displayName}</h2>
                    </div>
                  </div>
                  <div className="divide-y divide-green-700">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                      <li className="bg-primary-focus rounded-md">
                        <Link
                          to="/dashboard/myorders"
                          className="flex items-center p-2 space-x-3 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current dark:text-gray-400"
                          >
                            <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                            <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                            <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
                          </svg>
                          <span className="rounded-md p-2 disabled">Load My Orders</span>
                        </Link>
                      </li>
                    </ul>
                    <ul className="pt-4 pb-2 space-y-1 text-sm">
                      <li>
                        <p className="flex items-center p-2 space-x-3 rounded-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current dark:text-gray-400"
                          >
                            <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                            <rect width="32" height="64" x="256" y="232"></rect>
                          </svg>
                          <span>Buyer Account</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {/* seller view of dashboard */}
      {isSeller ? (
        <>
          {/* seller account info */}
          <div className="flex flex-col justify-center">
            <ul className="menu p-4 w-80 mx-auto bg-base-100 text-base-content">
              <div className=" p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex items-center p-2 space-x-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfb4boKKaHu5x1oFASsO92hJb-78nyVcFKRT_WxvRf1O165kUOYWfa0uGn12tfdw8uRU&usqp=CAU"
                    alt=""
                    className="w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{user.displayName}</h2>
                    <h2 className="text-md ">{user.email}</h2>
                  </div>
                </div>
                <div className="divide-y divide-green-700">
                  <ul className="pt-4 pb-2 space-y-1 text-sm">
                    <li>
                      <p className="flex items-center p-2 space-x-3 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current dark:text-gray-400"
                        >
                          <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                          <rect width="32" height="64" x="256" y="232"></rect>
                        </svg>
                        <span>Seller Account</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>

          {/* tabs for menu */}
          <div className="badge badge-secondary badge-outline my-8">
            Choose Tabs According to necessary actions below
          </div>
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
            <Link
              to="/dashboard/addproduct"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Add Products</span>
            </Link>
            <Link
              to="/dashboard/myproducts"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-400 dark:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>My Products</span>
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
      {/* admin view of dashboard */}
      {isAdmin ? (
        <>
          {/* admin account info */}
          <div className="flex flex-col justify-center">
            <ul className="menu p-4 w-80 mx-auto bg-base-100 text-base-content">
              <div className=" p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex items-center p-2 space-x-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfb4boKKaHu5x1oFASsO92hJb-78nyVcFKRT_WxvRf1O165kUOYWfa0uGn12tfdw8uRU&usqp=CAU"
                    alt=""
                    className="w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{user.displayName}</h2>
                    <h2 className="text-md ">{user.email}</h2>
                  </div>
                </div>
                <div className="divide-y divide-green-700">
                  <ul className="pt-4 pb-2 space-y-1 text-sm">
                    <li>
                      <p className="flex items-center p-2 space-x-3 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current dark:text-gray-400"
                        >
                          <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                          <rect width="32" height="64" x="256" y="232"></rect>
                        </svg>
                        <span>Admin Account</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>

          {/* tabs for menu */}
          <div className="badge badge-secondary badge-outline my-8">
            Choose Tabs According to necessary actions below
          </div>
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
            <Link
              to="/dashboard/allsellers"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-400 dark:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>All Sellers</span>
            </Link>
            <Link
              to="/dashboard/allbuyers"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>All Buyers</span>
            </Link>
            <Link
              to="/dashboard/reporteditem"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-400 dark:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>Reported Items</span>
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
