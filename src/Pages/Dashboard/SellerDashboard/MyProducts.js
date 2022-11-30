import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import "./MyProduct.css";

const MyProducts = () => {
  const { user, loading } = useContext(AuthContext);

  const url = `http://localhost:5000/books/${user?.email}`;
  //   console.log(url);

  const { data: books = [], refetch } = useQuery({
    queryKey: ["books", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  if (loading) {
    return <h3>Loading..</h3>;
  }

  /* delete books */
  const deleteBook = (id) => {
    fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Item Deletion was success");
          refetch();
        }
      });
  };

  const advertise = (id) => {
    fetch(`http://localhost:5000/advertise/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Item Sent to Advertise");
        }
      });
  };

  return (
    <div className="">
      {/* {books.map((book) => (
        <div key={book._id}>
          <h3>{book.name}</h3>
          <h3>{book._id}</h3>
          <button onClick={() => deleteBook(book._id)} className="btn btn-small">
            Delete
          </button>
          <button onClick={() => advertise(book._id)}>Advertise</button>

        </div>
      ))} */}
      {/*  <label onClick={() => setBookingItem(book)} htmlFor="modal-booking" className="btn">
        Book this item
      </label> */}
      <div className="flex flex-col justify-center items-center p-6 space-y-4 sm:p-10 product-list text-gray-100">
        <h2 className="text-xl font-semibold">Books List Uploaded by {user.displayName}</h2>

        {books.map((book) => (
          <ul key={book._id} className="flex flex-col bg-gray-900 pr-4 rounded-lg">
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500 mr-6"
                  src={book.image}
                  alt="book"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">{book.name}</h3>
                      {book.status === "Paid" ? (
                        <p className="text-sm text-red-300">Sold</p>
                      ) : (
                        <p className="text-sm dark:text-gray-400">Status: {book.status}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">RM {book.resalePrice}</p>
                      <p className="text-sm line-through dark:text-gray-600">
                        RM {book.originalPrice}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x mr-8">
                    <button
                      onClick={() => deleteBook(book._id)}
                      type="button"
                      className="flex items-center px-2 py-1 mx-3 space-x-1 btn btn-sm btn-outline btn-success"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Delete Item</span>
                    </button>

                    {book.status !== "Paid" && book.advertised === false ? (
                      <button
                        onClick={() => advertise(book._id)}
                        type="button"
                        className="flex items-center px-2 py-1 space-x-1 btn btn-info btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                        <span>Advertise Item</span>
                      </button>
                    ) : (
                      <>
                        <span className="pl-2">
                          Item Already <br /> advertised/Sold Out
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </li>
            <div className="divider"></div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
