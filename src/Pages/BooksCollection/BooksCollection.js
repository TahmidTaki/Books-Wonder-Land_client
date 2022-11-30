import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import LoadSpinner from "../../components/Utilities/LoadSpinner";
import { AuthContext } from "../../contexts/AuthProvider";
import ModalFOrBooking from "../ModalForBooking/ModalFOrBooking";
import useAdmin from "../../Hooks/useAdmin";
import useSeller from "../../Hooks/useSeller";
import "./BooksCollection.css";
const BooksCollection = () => {
  const { user, loading } = useContext(AuthContext);
  const [bookingItem, setBookingItem] = useState(null);
  const booksData = useLoaderData();
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  // const [buyerAccount, setBuyerAccount] = useState(true);

  //   console.log(booksData);
  if (!booksData || loading || isAdminLoading || isSellerLoading) {
    return <LoadSpinner></LoadSpinner>;
  }

  //report item to admin
  const reportItem = (id) => {
    fetch(`https://my-books-resale-server.vercel.app/reportitem/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Item Reported to Admin");
        }
      });
  };
  return (
    <div className="collection-page-bg">
      <h3 className="text-3xl font-bold py-8">Choose From the list below</h3>
      {/* books collection under specific category starts */}
      {booksData.map((book) => (
        <div key={book._id}>
          <section className="bg-gray-800 text-gray-100 w-4/5 mx-auto  mb-8">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
              <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-4 lg:w-1/2 xl:w-2/5 card-background-blur text-gray-900">
                <div className="flex space-x-2 sm:space-x-4">
                  <div className="space-y-2">
                    <p className="text-lg font-medium leading-snug">{book.name}</p>
                    <p className="leading-snug">
                      Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati
                      voluptatem similique!
                    </p>
                    <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
                      <li className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current dark:text-lime-400"
                        >
                          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Product Condition: {book.condition}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current dark:text-lime-400"
                        >
                          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Usage: {book.usageDuration} Year </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current dark:text-lime-400"
                        >
                          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Product Location: {book.location}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current dark:text-lime-400"
                        >
                          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Purchased Year: {book.purchaseYear}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current dark:text-lime-400"
                        >
                          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Seller: {book.seller}</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current dark:text-lime-400"
                        >
                          <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                          <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                        </svg>
                        <span>Original Price: RM {book.originalPrice}</span>
                      </li>
                    </ul>
                    <div className="flex py-6 justify-center mx-auto max-w-sm">
                      <div className="stats bg-black text-primary-content">
                        <div className="stat my-auto">
                          <div className="stat-title">Original Price</div>
                          <div className="stat-value font-semibold">RM {book.originalPrice}</div>
                          <div className="stat-actions"></div>
                        </div>

                        <div className="stat bg-info-content">
                          <div className="stat-title">Resale Price</div>
                          <div className="stat-value font-semibold">RM {book.resalePrice}</div>
                          <div className="stat-actions">
                            {isAdmin || isSeller ? (
                              <p>
                                Login as buyer <br /> to book item
                              </p>
                            ) : (
                              <div className="stat-actions">
                                {book.status === "Paid" ? (
                                  <div className="badge badge-error gap-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      className="inline-block w-4 h-4 stroke-current"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                      ></path>
                                    </svg>
                                    Sold Out
                                  </div>
                                ) : (
                                  <label
                                    onClick={() => setBookingItem(book)}
                                    htmlFor="modal-booking"
                                    className="btn btn-sm btn-success"
                                  >
                                    Book item
                                  </label>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {book.reportedStatus === "none" && (
                      <label
                        onClick={() => reportItem(book._id)}
                        htmlFor="modal-booking"
                        className="btn btn-error btn-sm"
                      >
                        Report this item
                      </label>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 xl:w-3/5 bg-gray-800">
                <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                  <img
                    src={book.image}
                    alt=""
                    className="rounded-lg shadow-lg bg-gray-800 aspect-video max-h-96"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="divider"></div>
          {/* <h3>{book.name}</h3>

          <label onClick={() => setBookingItem(book)} htmlFor="modal-booking" className="btn">
            Book this item
          </label>
          <label
            onClick={() => reportItem(book._id)}
            htmlFor="modal-booking"
            className="btn text-red-600"
          >
            Report this item
          </label> */}
          {/* books collection under specific category starts */}
        </div>
      ))}
      {bookingItem && (
        <ModalFOrBooking
          user={user}
          bookingItem={bookingItem}
          setBookingItem={setBookingItem}
        ></ModalFOrBooking>
      )}
    </div>
  );
};

export default BooksCollection;
