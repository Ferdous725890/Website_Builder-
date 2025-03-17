"use client";
import "./signin.css";
import { useAuth } from "@/app/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const { googleSignIn, signInUser } = useAuth();

  const handleGoogleSignIn = () => {
    googleSignIn();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      signInUser(email, password);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="text-center mt-10 space-y-4 px-10 sm:max-w-lg sm:mx-auto sm:space-y-10 ">
      <h3 className="text-3xl font-bold leading-10 lg:text-4xl">
        Sign in to your BuildMaster account
      </h3>

      <div>
        <form onSubmit={handleSubmit} className="space-y-6 text-left grid">
          <div className="relative">
            <input
              name="email"
              required
              type="email"
              className="border border-gray-200 w-full pt-4 pb-2 px-4 outline-none rounded-sm"
              placeholder=" "
            />
            <label className="absolute top-1/2 left-4 -translate-y-1/2 transition-all duration-200 pointer-events-none text-gray-400">
              Email
            </label>
          </div>
          <div className="relative">
            <input
              name="password"
              required
              type={showPass ? "text" : "password"}
              className="border border-gray-200 w-full pt-4 pb-2 px-4 outline-none rounded-sm"
              placeholder=" "
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="cursor-pointer absolute right-4 top-4"
            >
              {showPass ? <FiEyeOff /> : <FiEye />}
            </button>
            <label className="absolute top-1/2 left-4 -translate-y-1/2 transition-all duration-200 pointer-events-none text-gray-400">
              Password
            </label>
          </div>
          <button
            type="submit"
            className="group border flex items-center justify-center gap-2 border-gray-200 py-3 cursor-pointer text-white bg-black/80 rounded-sm"
          >
            <span>Sign in</span>
            <span className="opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 border border-gray-200 rounded-full p-0.5">
              <FiArrowRight />
            </span>
          </button>
        </form>
      </div>

      <p>
        <span className="text-gray-600">New to BuildMaster?</span>{" "}
        <Link href="/sign-up">
          <span className="text-blue-500 underline">Create an account</span>
        </Link>
      </p>
      {/* or */}
      <div className="flex items-center gap-4 justify-center">
        <div className="border-b border-gray-200 h-1 w-1/2"></div>
        <span className="text-gray-400">OR</span>
        <div className="w-1/2 border-b border-gray-200 h-1"></div>
      </div>
      <button
        onClick={handleGoogleSignIn}
        className="border border-gray-200 hover:bg-gray-50 active:scale-80 transition-all duration-200 rounded-sm  w-full py-2 cursor-pointer"
      >
        <div className="flex items-center justify-center gap-4">
          <Image src="/google.png" height={30} width={30} alt="google" />
          <span className="text-lg font-medium text-gray-700">
            Continue with google
          </span>
        </div>
      </button>
    </div>
  );
};
export default SignIn;
