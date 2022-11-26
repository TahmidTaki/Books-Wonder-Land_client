import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddProduct = () => {
  const { user, loading } = useContext(AuthContext);
  const imgbbKey = process.env.REACT_APP_imgbb;

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
    console.log("pInfo");
    const image = pInfo.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        if (imageData.success) {
          console.log(imageData.data.url);
          const date = new Date().toDateString();
          const book = {
            postedOn: date,
            image: imageData.data.url,
            name: pInfo.name,
            condition: pInfo.condition,
            location: pInfo.location,
            resalePrice: pInfo.resalePrice,
            originalPrice: pInfo.oriPrice,
            usageDuration: pInfo.usageDuration,
            purchaseYear: pInfo.purchaseYear,
            category: pInfo.category,
            status: pInfo.status,
            seller: pInfo.seller,
            sellerEmail: pInfo.email,
            advertised: false,
            reportedStatus: "none",
          };
          console.log(book);
          fetch("http://localhost:5000/books", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(book),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Book added successfully");
            });
        }
      });
  };

  return (
    <div>
      <h3>Add product, Please carefully fill up all the fields</h3>

      {/* form to accept data of new product */}
      <form className="form-control w-full mb-24" onSubmit={handleSubmit(handleAddProduct)}>
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

        {/* field starts */}
        <label className="label">
          <span className="label-text">Product Condition</span>
        </label>
        <select
          className="input input-bordered w-full"
          {...register("condition", {
            required: true,
          })}
        >
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
        </select>
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
          type="number"
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
          type="number"
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
          <span className="label-text">Year of Purchase</span>
        </label>
        <input
          className="input input-bordered w-full"
          type="text"
          placeholder="Year of purchase"
          {...register("purchaseYear", {
            required: "This field is Required",
          })}
        />
        {errors.purchaseYear && <p className="text-red-500">{errors.purchaseYear.message}</p>}
        {/* field ends */}
        <label className="label">
          {" "}
          <span className="label-text">Book Category</span>
        </label>
        <select {...register("category")} className="select input-bordered w-full mb-8">
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.catname}
            </option>
          ))}
        </select>
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
        {/* image upload */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>

        <input className="btn btn-accent mt-4" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
