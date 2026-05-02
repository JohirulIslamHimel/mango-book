"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleRegisterFun = async (data) => {
    const { email, name, photo, password } = data;

    setIsLoading(true);

    try {
      const { data: res, error } = await authClient.signUp.email({
        name: name,
        email: email,
        password: password,
        image: photo,
      });

      if (error) {
        toast.error(error.message || "Registration failed!");
      }

      if (res) {
        toast.success("Signup successful! Please login.");

        router.push("/login");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/login",
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen py-10">
      <div className="hero-content flex-col  w-full max-w-5xl">
        {/* Title and text */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-slate-800">Register Now!</h1>
          <p className="py-6 text-gray-600 max-w-md mx-auto">
            Create your account to join our community. Please fill in the
            details below to get started.
          </p>
        </div>

        {/* Form card */}
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form
            className="card-body gap-4"
            onSubmit={handleSubmit(handleRegisterFun)}
          >
            {/* Name Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                {...register("name", { required: "Name field is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Photo URL Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Type here photo url"
                className="input input-bordered w-full"
                {...register("photo", { required: "Photo field is required" })}
              />
              {errors.photo && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.photo.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full"
                {...register("email", { required: "Email field is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full pr-10"
                {...register("password", {
                  required: "Password field is required",
                })}
              />
              <span
                className="absolute right-3 top-9 cursor-pointer text-gray-500"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Register Button */}
            <div className="form-control mt-4">
              <button
                disabled={isLoading}
                className="btn bg-slate-800 text-white hover:bg-slate-700"
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>

          {/* Social Login & Links */}
          <div className="card-body pt-0">
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline flex items-center justify-center gap-2 w-full"
            >
              <FaGoogle className="text-red-500" /> Continue with Google
            </button>

            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 font-bold hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
