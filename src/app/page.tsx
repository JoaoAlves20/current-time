"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [hourNow, setHourNow] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const hour = new Date().getHours();
      const minute = new Date().getMinutes();

      if (hour >= 1 && hour < 12) {
        setGreeting("Good morning!");
      } else if (hour >= 12 && hour < 18) {
        setGreeting("Good afternoon!");
      } else if (hour >= 18 && hour < 24 || hour < 1) {
        setGreeting("Good night!");
      }

      setHourNow(`${hour}:${minute}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="text-9xl">{hourNow}</div>
      <div className="text-5xl font-bold">{greeting}</div>
    </div>
  )
}