import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (info) => {
    console.log(info);
    signIn(info.email, info.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        if (user) {
          setLoginUserEmail(info.email);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3>Register Yourself Here</h3>
      <form className="form-control mx-auto w-3/4" onSubmit={handleSubmit(handleLogin)}>
        {/* register your input into the hook by invoking the "register" function */}

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

        <input className="btn btn-secondary mt-12" type="submit" value="Sign In" />
      </form>
      <div className="divider">OR</div>

      <p className="mb-4">
        Don't have an account? or want to login using google? Please visit our signup page{" "}
      </p>
      <Link className="btn btn-outline btn-wide" to="/signup">
        Sign Up
      </Link>
    </div>
  );
};

export default Login;
