import React, { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const ErrorPage = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-white lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like you've found the doorway to the great nothing
              </h1>
              <p className="text-red-400">{error.statusText || error.message}</p>
              <p className="my-2 text-gray-800 py-4">
                Sorry about that! Please login again to get where you need to go.
              </p>

              <button onClick={handleLogOut}>
                <Link
                  to="/"
                  className="sm:w-full lg:w-auto my-8 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                >
                  Take me there!
                </Link>{" "}
              </button>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="error" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="error" />
      </div>
    </div>
  );
};

export default ErrorPage;
