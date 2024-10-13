"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BusinessSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call an API route to handle the business signup logic
    const res = await fetch("/api/business/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/api/auth/signin"); // Redirect to login after signup
    } else {
      // Handle errors
      console.error("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Business Signup</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
