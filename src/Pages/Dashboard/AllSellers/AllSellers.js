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
      {sellers.map((seller) => (
        <div key={seller._id}>
          {seller._id}
          {seller.email}
          {seller.role}
          {seller?.sellerVerified !== "verified" && (
            <>
              <button className="btn" onClick={() => verifySeller(seller._id)}>
                verify
              </button>
              <button className="btn btn-accent" onClick={() => deleteSeller(seller._id)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllSellers;
