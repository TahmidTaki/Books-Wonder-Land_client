import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("https://my-books-resale-server.vercel.app/buyers");
      const data = await res.json();
      return data;
    },
  });

  const deleteBuyer = (id) => {
    fetch(`https://my-books-resale-server.vercel.app/buyers/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("buyers Deletion was success");
          refetch();
        }
      });
  };
  return (
    <div>
      <h3 className="mt-4 mb-4 text-green-300 text-2xl font-semibold my-8">
        Total Buyers: {buyers.length}
      </h3>

      <table className="table w-full">
        <thead>
          <tr>
            <th className="bg-secondary-focus text-white">Name</th>
            <th className="bg-secondary-focus text-white">Email</th>
            <th className="bg-secondary-focus text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {buyers.map((buyers) => (
            <tr key={buyers._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar"></div>
                  <div>
                    <div className="font-bold">{buyers.name}</div>
                  </div>
                </div>
              </td>
              <td>{buyers.email}</td>

              <th>
                <button onClick={() => deleteBuyer(buyers._id)} className="btn btn-error btn-xs">
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

export default AllBuyers;
