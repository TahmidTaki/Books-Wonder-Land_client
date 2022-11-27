import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllBuyers = () => {
  const { data: buyers = [] } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/buyers");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h3>All buyers: {buyers.length}</h3>
    </div>
  );
};

export default AllBuyers;
