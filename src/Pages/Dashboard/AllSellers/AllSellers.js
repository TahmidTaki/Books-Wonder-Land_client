import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/sellers");
      const data = await res.json();
      return data;
    },
  });

  const verifySeller = (id) => {
    fetch(`http://localhost:5000/sellers/verified/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Verification was success");
          refetch();
        }
      });
  };
  const deleteSeller = (id) => {
    fetch(`http://localhost:5000/sellers/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Seller Deletion was success");
          refetch();
        }
      });
  };

  return (
    <div>
      <h3>All sellers: {sellers.length}</h3>
      {/* {sellers.map((seller) => (
        <div key={seller._id}>
          {seller._id}
          {seller.email}
          {seller.role}
          {seller?.sellerVerified !== "verified" && (
            <>
              <button className="btn" onClick={() => verifySeller(seller._id)}>
                verify
              </button>
            </>
          )}
          <button className="btn btn-accent" onClick={() => deleteSeller(seller._id)}>
            Delete
          </button>
        </div>
      ))} */}

      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Verification</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar"></div>
                  <div>
                    <div className="font-bold">{seller.name}</div>
                  </div>
                </div>
              </td>
              <td>{seller.email}</td>
              <td>
                {seller?.sellerVerified === "verified" ? (
                  <div className="badge badge-info gap-2">Verified Seller</div>
                ) : (
                  <>
                    <button
                      className="btn btn-outline btn-accent btn-sm"
                      onClick={() => verifySeller(seller._id)}
                    >
                      Verify
                    </button>
                  </>
                )}
              </td>
              <th>
                <button onClick={() => deleteSeller(seller._id)} className="btn btn-error btn-xs">
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSellers;
