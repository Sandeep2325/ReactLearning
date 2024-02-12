import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import {useForm} from "react-hook-form";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const LoginUser = async (data) => {
    setError("");
    try {
      const userData = await authService.login(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin({ userData }));
          navigate("/");
        }
      } else {
        setError("User not found");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center authdiv">
        <div className="mx-auto w-100 max-w-lg bg-light rounded-3 p-5 border border-dark border-2">
            <div className="mb-2 d-flex justify-content-center">
                <span className="d-inline-block w-100 max-w-100">
                    <Logo
                        width="100%"
                    />
                </span>
            </div>
            <h2 className="text-center fs-3 fw-bold lh-1">
                Login
            </h2>
            <p className="mt-2 text-center text-muted fs-6">
                Don't have an account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline">Sign up</Link>


            </p>
            {error && <p className="text-red text-center">{error}</p>}
            <form onSubmit={handleSubmit(LoginUser)} className="mt-8 d-flex justify-content-center ">
            <div className="px-3 py-3">
                <Input
                {...register("email", { required: true })}
                    label="Email: "
                    type="email"
                    className="mb-4"
                    placeholder="Email"

                />
                <Input
                    {...register("password", { required: true })}
                    label="Password: "
                    type="password"
                    className="mb-4"
                    placeholder="Password"

                />
                <Button
                    type="submit"
                    bgColor="bg-green"
                    className="w-100 btn btn-primary authbtn"
                >Login{""}
                </Button>
                </div>
            </form>

        </div>
    </div>
)
}

export default Login;
