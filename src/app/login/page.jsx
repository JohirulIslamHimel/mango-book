"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFun = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Signin successful");
      router.push("/");
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 p-4">
      <div className="p-6 rounded-xl bg-white w-full max-w-md shadow-md">
        <h2 className="font-bold text-3xl text-center mb-6 text-slate-800">
          Login your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFun)}>
          {/* Email Field */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend font-semibold">
              Email address
            </legend>
            <input
              type="email"
              placeholder="Enter your email"
              className="input w-full bg-slate-50"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          {/* Password Field */}
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend font-semibold">Password</legend>
            <div className="relative">
              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input w-full pr-10 bg-slate-50"
                {...register("password", { required: "Password is required" })}
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white hover:bg-slate-700 border-none">
            Login
          </button>
        </form>

        {/* Social Login */}
        <div className="divider my-6 text-gray-400 text-sm">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn w-full btn-outline border-slate-300 flex items-center gap-2"
        >
          <FaGoogle className="text-red-500" /> Login with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href={"/register"}
            className="text-red-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
