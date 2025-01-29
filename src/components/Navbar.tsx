// "use client";

// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import Link from "next/link";
// import { Facebook,Twitter,Instagram,Youtube } from 'lucide-react';
// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const toggleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <>
//       {/* Top Bar */}
//       <div className="flex flex-row items-center justify-between px-4 py-2 bg-blue-950 text-white text-sm md:px-10">
//         <div className="flex flex-row gap-4">
//           <span>info@example.com</span>
//           <span>+91 9220840792</span>
//         </div>
//         <div className="hidden md:flex flex-row gap-4">
//           <span className="hover:text-blue-300 cursor-pointer"><Facebook/></span>
//           <span className="hover:text-blue-300 cursor-pointer"><Twitter/></span>
//           <span className="hover:text-blue-300 cursor-pointer"><Instagram/></span>
//           <span className="hover:text-blue-300 cursor-pointer"><Youtube/></span>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="bg-white">
//         <nav className="flex items-center justify-between px-4 py-4 md:px-10">
//           {/* Logo */}
//           <div className="flex items-center">
//             <p className="text-xl font-bold">RiseOn Ecom</p>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-8 text-lg">
//             <li className="text-black cursor-pointer">Home</li>
//             <li className="text-blue-500 cursor-pointer">About Us</li>
//             <li className="text-blue-500 cursor-pointer">Service</li>
//             <li className="text-blue-500 cursor-pointer">Blog</li>
//             <li className="text-blue-500 cursor-pointer">Contact</li>
//             <Link prefetch  href="/signup">
//             <li className="text-white bg-blue-500 px-3 py-1 cursor-pointer rounded-md">SignUp</li>
//             </Link>
//             <Link prefetch href="/login">
//             <li className="text-white bg-blue-500 px-3 py-1 cursor-pointer rounded-md">SignIn</li>
//             </Link>
//           </ul>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden cursor-pointer" onClick={toggleNav}>
//             {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <div
//           className={`${
//             nav ? "block" : "hidden"
//           } bg-blue-800 text-white absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 z-50 md:hidden`}
//         >
//           <ul className="text-xl">
//             <li className="py-2 hover:text-blue-300 cursor-pointer">Home</li>
//             <li className="py-2 hover:text-blue-300 cursor-pointer">About Us</li>
//             <li className="py-2 hover:text-blue-300 cursor-pointer">Service</li>
//             <li className="py-2 hover:text-blue-300 cursor-pointer">Blog</li>
//             <li className="py-2 hover:text-blue-300 cursor-pointer">Contact</li>
//             <Link prefetch href="/signup">
//             <li className="py-2 hover:text-blue-300 cursor-pointer">SignUp</li>
//             </Link>
//             <Link prefetch href="/login">
//             <li className="py-2 hover:text-blue-300 cursor-pointer">SignIn</li>
//             </Link>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;



"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="flex flex-row items-center justify-between px-4 py-2 bg-blue-950 text-white text-sm md:px-10 lg:px-20">
        <div className="flex flex-row gap-4">
          <span className="hover:text-blue-300 transition-colors duration-200">
            info@example.com
          </span>
          <span className="hover:text-blue-300 transition-colors duration-200">
            +91 9220840792
          </span>
        </div>
        <div className="hidden md:flex flex-row gap-4">
          <span className="hover:text-blue-300 cursor-pointer transition-colors duration-200">
            <Facebook size={18} />
          </span>
          <span className="hover:text-blue-300 cursor-pointer transition-colors duration-200">
            <Twitter size={18} />
          </span>
          <span className="hover:text-blue-300 cursor-pointer transition-colors duration-200">
            <Instagram size={18} />
          </span>
          <span className="hover:text-blue-300 cursor-pointer transition-colors duration-200">
            <Youtube size={18} />
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-sm">
        <nav className="flex items-center justify-between px-4 py-4 md:px-10 lg:px-20 w-full mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <p className="text-2xl font-bold text-blue-800">RiseOn Ecom</p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-lg">
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              Home
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              About Us
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              Service
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              Blog
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              Contact
            </li>
            <Link prefetch href="/signup">
              <li className="text-white bg-blue-600 px-4 py-2 cursor-pointer rounded-md hover:bg-blue-700 transition-colors duration-200">
                SignUp
              </li>
            </Link>
            <Link prefetch href="/login">
              <li className="text-white bg-blue-600 px-4 py-2 cursor-pointer rounded-md hover:bg-blue-700 transition-colors duration-200">
                SignIn
              </li>
            </Link>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden cursor-pointer" onClick={toggleNav}>
            {nav ? (
              <AiOutlineClose size={24} className="text-blue-800" />
            ) : (
              <AiOutlineMenu size={24} className="text-blue-800" />
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`${
            nav ? "block" : "hidden"
          } bg-blue-800 text-white fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 z-50 transition-transform duration-300`}
        >
          <ul className="text-2xl text-center">
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              Home
            </li>
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              About Us
            </li>
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              Service
            </li>
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              Blog
            </li>
            <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
              Contact
            </li>
            <Link prefetch href="/signup">
              <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
                SignUp
              </li>
            </Link>
            <Link prefetch href="/login">
              <li className="py-3 hover:text-blue-300 cursor-pointer transition-colors duration-200">
                SignIn
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;