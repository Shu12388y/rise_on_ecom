'use client';
import { Player } from "@lottiefiles/react-lottie-player";


const About = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              src="https://smsnvmpoxg.ufs.sh/f/QZbXEAchwtckajbCYiAls03f5DOZnm6tLVdqvGCbwF8PeNiJ"
              alt="About Us"
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-blue-600 font-bold text-center md:text-left mb-8">
              About Us
            </h1>
            <div className="text-gray-700 text-justify space-y-4">
              <p className="text-lg">
                At <span className="font-semibold text-blue-600">Rise on Ecom</span>, we make it effortless for businesses to transition and thrive in the online marketplace. With our seamless, all-in-one solutions, we empower sellers of all sizes to establish, manage, and grow their online presence without the hassle.
              </p>
              <p className="text-lg">
                From platform registration and product listings to inventory optimization and reviews management, we handle the complexities that often slow down growth. Our expert team ensures that every step of your digital journey is smooth, efficient, and tailored to your unique needs.
              </p>
              <p className="text-lg">
                Our mission is simple: to break down barriers, simplify e-commerce, and help businesses unlock their full potential online. Whether you&apos;re just starting out or looking to scale, we&apos;re here to guide and support you every step of the way.
              </p>
            </div>

            {/* Highlights Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {/* Card 1 */}
              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/733698a6-df76-47ae-9673-7b0a17aeee4e/SbDZO8o86z.json"
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-blue-600">Problem Solving</h2>
                  <p className="text-sm text-gray-600">
                    We tackle the toughest challenges in e-commerce, providing innovative solutions to help your business thrive.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <Player
                    autoplay
                    loop
                    src="https://lottie.host/39c595b2-6e62-4b3d-ae56-248e41ec7904/FeDWUNaLbM.json"
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-blue-600">Mission & Vision</h2>
                  <p className="text-sm text-gray-600">
                    Our mission is to simplify e-commerce and empower businesses to achieve their full potential online.
                  </p>
                </div>
              </div>
            </div>

            {/* Button Section */}
            <div className="mt-8 flex justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;