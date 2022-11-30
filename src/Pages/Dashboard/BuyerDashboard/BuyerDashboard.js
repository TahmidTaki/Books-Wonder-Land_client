import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoadSpinner from "../../../components/Utilities/LoadSpinner";
import { AuthContext } from "../../../contexts/AuthProvider";

const BuyerDashboard = () => {
  const { user, loading } = useContext(AuthContext);

  const url = `https://my-books-resale-server.vercel.app/bookings?email=${user?.email}`;
  //   console.log(url);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
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
    return <LoadSpinner></LoadSpinner>;
  }
  return (
    <div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-success">You have {bookings.length} bookings.</div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr className="bg-secondary">
              <th className="text-black bg-secondary"></th>
              <th className="text-black bg-secondary">Item</th>
              <th className="text-black hidden md:block bg-secondary">Delivery Location</th>
              <th className="text-black bg-secondary">Price</th>
              <th className="text-black bg-secondary">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar hidden md:block">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={booking?.itemImg} alt="item" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking.item}</div>
                    </div>
                  </div>
                </td>
                <td className="hidden md:block">
                  {booking.meetLocation}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Your Contact info :{booking.buyerPhone}
                  </span>
                </td>
                <td>${booking.price}</td>
                <th>
                  {booking?.paid ? (
                    <div className="badge badge-info gap-2">✔ Paid</div>
                  ) : (
                    <Link to={`/payment/${booking._id}`}>
                      <button className="btn btn-accent btn-xs">Buy Now</button>
                    </Link>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyerDashboard;
