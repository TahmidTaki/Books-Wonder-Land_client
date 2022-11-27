import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [newUserEmail, setNewUserEmail] = useState("");
  const [token] = useToken(newUserEmail);
  if (token) {
    navigate("/");
  }

  const { user, createUser, updateUser, loading } = useContext(AuthContext);
  if (loading) {
    return <h2>Loading..</h2>;
  }
  //save user info to database
  const addUserDatabase = (name, email, role) => {
    const user = { name, email, role };
    console.log("from: ", user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setNewUserEmail(email);
      });
  };

  //firebase sign up function
  const handleSignUp = (info) => {
    console.log(info);
    createUser(info.email, info.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast("user created successfully");
        const userInfo = {
          displayName: info.name,
        };
        updateUser(userInfo)
          .then(() => {
            addUserDatabase(info.name, info.email, info.role);
            console.log(user);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Register Yourself Here</h3>
      <form className="form-control mx-auto w-3/4" onSubmit={handleSubmit(handleSignUp)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Name"
          {...register("name", {
            required: true,
          })}
        />

        <label className="label">
          <span className="label-text">Your email</span>
        </label>
        <input
          required
          type="email"
          className="input input-bordered w-full"
          placeholder="email"
          {...register("email", {
            required: true,
          })}
        />

        <label className="label">
          <span className="label-text">Your Password</span>
        </label>
        <input
          className="input input-bordered w-full"
          type="password"
          defaultValue=""
          {...register("password", {
            required: "Password is Required",
            minLength: { value: 6, message: "Must Be 6 characters at least" },
          })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <label className="label">
          <span className="label-text">You are a:</span>
        </label>
        <select
          className="input input-bordered w-full"
          {...register("role", {
            required: true,
          })}
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>

        <input className="btn btn-secondary mt-12" type="submit" value="Register" />
      </form>
      <div className="divider">OR</div>
      <button className="btn btn-outline btn-wide">Login with Google</button>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
