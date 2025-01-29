'use client'
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center py-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 px-6 lg:px-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Take Control of Your <br />
            <span className="text-purple-200">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Amazon Invertory",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Flipkart Inventory",
                  1000,
                  "Meesho Inventory",
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h2>
          <p className="text-lg lg:text-2xl font-light mb-6">
            Effortlessly manage, optimize, and scale your inventory with our
            powerful tools designed for Amazon sellers.
          </p>
          <div className="flex items-start gap-4 mb-6">
            <span className="w-2 h-10 bg-yellow-300 rounded-full"></span>
            <p className="text-base lg:text-lg">
              Simplify your e-commerce journey with seamless inventory
              management, real-time analytics, and scalable solutions tailored
              to your business needs.
            </p>
          </div>
          <button className="bg-blue-400 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-200">
            Get Started Now
          </button>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-lg rounded-lg shadow-2xl"
            src="https://images.pexels.com/photos/6693666/pexels-photo-6693666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Inventory Management"
          />
        </div>
      </section>

      {/* Footer Links Section */}
      <div className="bg-blue-950 py-4 px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 text-lg text-white">
          <p>Inventory Optimization</p>
          <p>Reviews Management</p>
          <p>Sales Analytics</p>
          <p>Financial Tracking</p>
          <p>Storefront Customization</p>
          <p>Custom E-Commerce Solutions</p>
          <p>Vendor Management</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
