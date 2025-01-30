import React from "react";
export const Contact = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Text and Button Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Connected With <br />
                <span className="text-blue-300">Cutting Edge IT</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                Ready to take your business to the next level? Let’s discuss how we can help you achieve your goals with innovative IT solutions.
              </p>
              <button className="bg-blue-300 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300">
                Get A Quote →
              </button>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <img
                  className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  src="https://smsnvmpoxg.ufs.sh/f/QZbXEAchwtck8TzdezgBfDFPR5YNzyoxs7XVOU3w1artmLqd"
                  alt="Stay Connected"
                />
                <div className="absolute -inset-4 bg-blue-500/20 rounded-lg blur-lg z-[-1]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};