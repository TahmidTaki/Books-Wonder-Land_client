import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryCard from "../../components/CategoryCard";

const Home = () => {
  const { isLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h3>Home</h3>
      <h3>Book Categories</h3>
      {categories?.map((category) => (
        <CategoryCard key={category._id} category={category}></CategoryCard>
      ))}
    </div>
  );
};

export default Home;
