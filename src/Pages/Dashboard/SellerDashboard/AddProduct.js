import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddProduct = () => {
  const { user, loading } = useContext(AuthContext);
  const { isLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //get book categories from db

  if (loading || isLoading) {
    return <h3>Loading..</h3>;
  }

  const handleAddProduct = (pInfo) => {
    console.log(pInfo);
  };

  return (
    <div>
      <h3>Add product, Please carefully fill up all the fields</h3>

      {/* form to accept data of new product */}
      <form className="form-control w-full" onSubmit={handleSubmit(handleAddProduct)}>
        {/* field starts*/}
        <label className="label">
          <span className="label-text">Product Name</span>
        </label>
        <input
          className="input input-bordered w-full"
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is Required",
          })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        {/* field ends */}
        {/* field starts*/}
        <label className="label">
          <span className="label-text">Current Location</span>
        </label>
        <input
          className="input input-bordered w-full"
          type="text"
          placeholder="Location"
          {...register("location", {
            required: "This field is Required",
          })}
        />
        {errors.location && <p className="text-red-500">{errors.location.message}</p>}
        {/* field ends */}

        {/* field starts*/}
        <label className="label">
          <span className="label-text">Resale Price</span>
        </label>
        <input
          className="input input-bordered w-full"
          type="text"
          placeholder="price"
          {...register("resalePrice", {
            required: "This field is Required",
          })}
        />
        {errors.resalePrice && <p className="text-red-500">{errors.resalePrice.message}</p>}
        {/* field ends */}
        {/* field starts*/}
        <label className="label">
          <span className="label-text">Original Price</span>
        </label>
        <input
          className="input input-bordered w-full"
          type="text"
          placeholder="original Price"
          {...register("oriPrice", {
            required: "This field is Required",
          })}
        />
        {errors.oriPrice && <p className="text-red-500">{errors.oriPrice.message}</p>}
        {/* field ends */}
        {/* field starts*/}
        <label className="label">
          <span className="label-text">Years of Use</span>
        </label>
        <input
          className="input input-bordered w-full"
          type="text"
          placeholder="Duration of usage"
          {...register("usageDuration", {
            required: "This field is Required",
          })}
        />
        {errors.usageDuration && <p className="text-red-500">{errors.usageDuration.message}</p>}
        {/* field ends */}
        {/* field starts*/}
        <label className="label">
          <span className="label-text">Product Status</span>
        </label>
        <input
          className="input input-bordered w-full"
          type="text"
          disabled
          defaultValue="available"
          {...register("status", {
            required: "This field is Required",
          })}
        />

        {/* field ends */}
        {/* field starts*/}
        <label className="label">
          <span className="label-text">Sellers Name</span>
        </label>
        <input
          className="input input-bordered w-full"
          type="text"
          defaultValue={user?.displayName}
          disabled
          {...register("seller", {
            required: "This field is Required",
          })}
        />
        {/* field ends */}
        {/* field starts*/}

        <label className="label">
          <span className="label-text">Sellers Email</span>
        </label>
        <input
          className="input input-bordered w-full"
          type="text"
          defaultValue={user?.email}
          disabled
          {...register("email", {
            required: "This field is Required",
          })}
        />
        {/* field ends */}
        <label className="label">
          {" "}
          <span className="label-text">Book Category</span>
        </label>
        <select {...register("specialty")} className="select input-bordered w-full max-w-xs">
          {categories.map((category) => (
            <option key={category._id} value={category.catname}>
              {category.catname}
            </option>
          ))}
        </select>

        <input className="btn btn-accent mt-4" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
