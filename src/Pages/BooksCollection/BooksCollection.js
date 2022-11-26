import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import ModalFOrBooking from "../ModalForBooking/ModalFOrBooking";

const BooksCollection = () => {
  const { user, loading } = useContext(AuthContext);
  const [bookingItem, setBookingItem] = useState(null);
  const booksData = useLoaderData();

  //   console.log(booksData);
  if (!booksData || loading) {
    return <h2>Loading..</h2>;
  }
  return (
    <div>
      <h3>Choose From the list below</h3>
      {booksData.map((book) => (
        <div key={book._id}>
          <h3>{book.name}</h3>

          <label onClick={() => setBookingItem(book)} htmlFor="modal-booking" className="btn">
            Book this item
          </label>
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
