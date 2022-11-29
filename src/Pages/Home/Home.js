import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";

const Home = () => {
  const [advertisedItems, setAdvertisedItems] = useState([]);
  const { isLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  useEffect(() => {
    axios.get("http://localhost:5000/advertisedbook").then((data) => {
      setAdvertisedItems(data.data);
      // console.log(data);
    });
  }, []);
  return (
    <div>
      <h3>Home</h3>
      <h3>Book Categories</h3>
      {categories?.map((category) => (
        <CategoryCard key={category._id} category={category}></CategoryCard>
      ))}
      <br />

      <h3>{advertisedItems.length}</h3>
    </div>
  );
};

export default Home;
