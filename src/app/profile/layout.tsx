"use client"

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const Router = useRouter();
  function logoutHandler() {
    const token = window.sessionStorage.getItem("token");
    if (!token) {
      alert("Error");
      Router.push("/login");
    }
    window.sessionStorage.removeItem("token");
    Router.push("/login");
  }

  return (
    <div className="text-black relative bg-gray-100">
      {/* Header Section */}
      <div className="font-bold text-center pt-8">
        <h1 className="text-4xl text-[#000]">Dashboard</h1>
      </div>

      {/* Menu Icon */}
      <div className="fixed top-5 right-5 z-50">
        {menuOpen ? (
          <AiOutlineClose
            size={30}
            className="border rounded text-black/70 border-black/70 p-1 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <AiOutlineMenu
            size={30}
            className="border rounded text-black/70 border-black/70 p-1 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="fixed top-12 right-5 bg-white border rounded shadow-lg p-4 z-50 w-40">
          <ul className="flex flex-col gap-3">
            <Link href="/profile">
            <li
              className="cursor-pointer hover:bg-gray-200 p-2 rounded"
              >
              Profile
            </li>
            </Link>
            <Link href="/setting">
            <li
              className="cursor-pointer hover:bg-gray-200 p-2 rounded"
              >
              Settings
            </li>
            </Link>
            <li
              className="cursor-pointer hover:bg-gray-200 p-2 rounded text-red-500"
              onClick={logoutHandler}
            >
              Logout
            </li>
          </ul>
        </div>
      )}

      {/* Main Layout */}
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <div className="flex-grow p-6 md:p-12">{children}</div>
      </div>
    </div>
  );
}
