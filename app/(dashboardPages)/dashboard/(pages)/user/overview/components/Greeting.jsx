"use client";
import { useAuth } from "@/app/hooks/useAuth";
import { useEffect, useState } from "react";

export default function Greeting() {
  const [greeting, setGreeting] = useState("");
  const {user} = useAuth()
  useEffect(() => {
    const hour =  new Date().getHours()

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning 🌞");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon ☀️");
    } else if (hour >= 17 && hour < 21) {
      setGreeting("Good Evening 🌆");
    } else {
      setGreeting("Good Night 🌙");
    }
  }, []);

  return (
    <div className="flex items-center bg-gradient-to-l from-[#ece1e9] to-[#FCCAF2] py-8 px-6 rounded-xl">
      <div>
      <h1 className="text-2xl md:text-3xl font-bold">{greeting} {user?.displayName}</h1>
      <p className="md:text-xl mt-3">Here’s what’s been going on with your account throughout the day.</p>
      </div>
    </div>
  );
}
