"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../logo.png";
import axios from "axios";

interface User {
  fullname: string;
  email: string;
  password: string;
}

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    fullname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmpassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user.password !== confirmpassword) {
      setError("Passwords are not matching");
    } 
    else {
      setError(null);
    }
  }, [user.password, confirmpassword]);


  const signupHandler = async () => {
    setLoading(true);
    setError(null); 

    try {
      const response = await axios.post("/api/auth/signup", user);
      if (response.status === 201) {
        router.push("/login");
      }
    } catch (err: any) {
      if (err.response) {
        const { status } = err.response;
        if (status === 400)
          setError("Invalid user inputs");
        else if (status === 409) setError("Email already exist");
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

      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md mt-[4rem]">
        <h2 className="text-2xl font-bold text-center">Signup</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={user.fullname}
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:outline-none focus:ring-blue-200"
              placeholder="Sam"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:outline-none  focus:ring-blue-200"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className={`mt-1 block w-full p-2 border rounded-md focus:ring focus:outline-none ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
              placeholder="••••••••"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              Password should be between 10 to 30 characters.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
             Confirm Password
            </label>
            <input
              type="password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`mt-1 block w-full p-2 border rounded-md focus:ring focus:outline-none ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
              placeholder="••••••••"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              Password should be between 10 to 30 characters.
            </p>
          </div>

          <button
            type="button"
            onClick={signupHandler}
            disabled={loading || error !== null}
            className="w-full py-2 px-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            SignIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
