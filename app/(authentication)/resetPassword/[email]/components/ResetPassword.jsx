"use client";
import React from "react";
import "./resetPassword.css";
import { FiArrowRight } from "react-icons/fi";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
const ResetPassword = ({ Email }) => {
  const { resetPassword,signOutUser } = useAuth();
  const router = useRouter()
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then((res) => {
        signOutUser();
        router.push('/sign-in')
        
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-center mt-10 space-y-4 px-10 sm:max-w-lg sm:mx-auto sm:space-y-10">
      <h3 className="text-3xl font-bold leading-10 lg:text-4xl">
        Reset your password
      </h3>
      <p>
        To reset your password, enter your email below and submit. An email will
        be sent to you with instructions about how to complete the process.
      </p>
      <form onSubmit={handleResetPassword} className="space-y-6 text-left grid">
        <div className="relative">
          <input
            defaultValue={Email}
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
        <button
          type="submit"
          className="group border flex items-center justify-center gap-2 border-gray-200 py-3 cursor-pointer text-white bg-black/80 rounded-sm"
        >
          <span>Reset Password</span>
          <span className="opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 border border-gray-200 rounded-full p-0.5">
            <FiArrowRight />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
