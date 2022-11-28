import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/buyers");
      const data = await res.json();
      return data;
    },
  });

  const deleteBuyer = (id) => {
    fetch(`http://localhost:5000/buyers/${id}`, {
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
      <h3>All buyers: {buyers.length}</h3>
      {buyers.map((buyer) => (
        <div key={buyer._id}>
          {buyer._id}
          {buyer.email}
          {buyer.role}
          {buyer?.buyerVerified !== "verified" && (
            <>
              <button className="btn btn-accent" onClick={() => deleteBuyer(buyer._id)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllBuyers;
