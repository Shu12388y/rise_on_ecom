"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../logo.png";
import axios from "axios";

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loginHandler = async () => {
    setLoading(true);
    setError(null); // Reset the error state

    try {
      const response = await axios.post("/api/auth/signin", user);

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        // Navigate to the dashboard or target page
        router.push("/dashboard/allsales");
      }
    } catch (err: any) {
      // Handle specific errors based on status code
      if (err.response) {
        const { status, data } = err.response;
        if (status === 400) setError("Invalid input. Please check your details.");
        else if (status === 401) setError("Incorrect password.");
        else if (status === 404) setError("User not found. Please sign up.");
        else setError("An unexpected error occurred.");
      } else {
        setError("Unable to connect to the server. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="fixed left-0 top-0 w-full">
        <div className="flex-none px-4 py-2">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
      </div>

      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="button"
            onClick={loginHandler}
            disabled={loading}
            className="w-full py-2 px-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
        <p className="text-sm text-center">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
