"use client";

import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import "./signup.css";
import { FiArrowRight, FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
const SignUP = () => {
  const [showPass, setShowPass] = useState(false);
  const [error,setError] = useState("")
  const { googleSignIn, createUser } = useAuth();
  const router = useRouter();

  const handleGoogleSignIn = () => {
    googleSignIn();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.table(email, password);
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      return setError(
        "Password atleast 1 lowercase letter 1 uppercase letter 1 number 1 special characters and atleast 6 characters"
      );
      
    } 
    try {
      const res = await createUser(email, password)
      const data = res.user
      if(data){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Sign Up Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        router.push("/")
      }
    } catch (err) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: err.message,
        showConfirmButton: false,
        timer: 1500
      });
    }
  };
  
  return (
    <div className="text-center  mt-10 space-y-4 px-6 sm:max-w-lg sm:mx-auto sm:space-y-10 ">
      <h3 className="text-3xl font-bold leading-10 lg:text-4xl">
        Let&apos;s create your BuildMaster Account.
      </h3>
      <p className="text-gray-700  text-xl">
        Join our community and start building your dream website without any
        coding knowledge.
      </p>
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
          <p className="text-red-500 font-medium">{error}</p>
          <button
            type="submit"
            className="group border flex items-center justify-center gap-2 border-gray-200 py-3 cursor-pointer text-white bg-black/80 rounded-sm"
          >
            <span>Sign up</span>
            <span className="opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 border border-gray-200 rounded-full p-0.5">
              <FiArrowRight />
            </span>
          </button>
        </form>
      </div>

      <p>
        <span className="text-gray-600">Already have an account?</span>{" "}
        <Link href="/sign-in">
          <span className="text-blue-500 underline">Sign In</span>
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
          <img src="/google.png" height={30} width={30} />
          <span className="text-lg font-medium text-gray-700">
            Continue with google
          </span>
        </div>
      </button>
    </div>
  );
};
export default SignUP;
