import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

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
    <div>
      {books.map((book) => (
        <div key={book._id}>
          <h3>{book.name}</h3>
          <h3>{book._id}</h3>
          <button onClick={() => deleteBook(book._id)} className="btn btn-small">
            Delete
          </button>
          <button onClick={() => advertise(book._id)}>Advertise</button>

          {/*  <label onClick={() => setBookingItem(book)} htmlFor="modal-booking" className="btn">
            Book this item
          </label> */}
        </div>
      ))}
    </div>
  );
};

export default MyProducts;
