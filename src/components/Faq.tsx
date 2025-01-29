// "use client";

// import { useState } from "react";

// const FaqData = [
//   {
//     header: "How Long Should A Business Plan Be?",
//     body: "Show data",
//   },
//   {
//     header: "What is Included In Your Service?",
//     body: "Show data",
//   },
//   {
//     header: "What Type of Company Is Measured?",
//     body: "Show data",
//   },
// ];

// function Faq() {
//   const [showIndex, setShowIndex] = useState<number | null>(null);

//   const toggleShow = (index: number) => {
//     setShowIndex(showIndex === index ? null : index);
//   };

//   function Card({
//     header,
//     body,
//     isVisible,
//     toggleShow,
//   }: {
//     header: string;
//     body: string;
//     isVisible: boolean;
//     toggleShow: () => void;
//   }) {
//     return (
//       <div className="border-b border-gray-300 py-4">
//         <div className="flex justify-between items-center">
//           <h3 className="text-lg font-medium">{header}</h3>
//           <button
//             onClick={toggleShow}
//             className="text-blue-500 hover:underline"
//           >
//             {isVisible ? "Hide" : "Show"}
//           </button>
//         </div>
//         {isVisible && <p className="mt-2 text-gray-600">{body}</p>}
//       </div>
//     );
//   }

//   return (
//     <div className="h-full bg-white ">
//       <div className="relative flex flex-col lg:flex-row">
//         {/* Left Section */}
//         <div className="bg-blue-600 lg:w-1/2 flex p-6 lg:p-10 flex-col items-center justify-center clip-slant">
//           <img
//             className="w-full lg:w-[20rem] rounded-md"
//             src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt="Business"
//           />
//         </div>

//         {/* Right Section with Slant */}
//         <div className="bg-white lg:w-1/2 p-6 lg:p-10 ">
//           <span className="text-blue-400 text-lg">OUR FAQ&apos;s</span>
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-6">
//             Keep Your Business Safe & <br className="hidden sm:block" /> Ensure
//             High Availability
//           </h1>
//           <div className="flex flex-col">
//             {FaqData.map((ele, index) => (
//               <Card
//                 key={index}
//                 header={ele.header}
//                 body={ele.body}
//                 isVisible={showIndex === index}
//                 toggleShow={() => toggleShow(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Faq;


"use client";

import { useState } from "react";

const FaqData = [
  {
    header: "How Long Should A Business Plan Be?",
    body: "A business plan should typically be 15-20 pages long, but it can vary depending on the complexity of your business. It should include an executive summary, market analysis, financial projections, and more.",
  },
  {
    header: "What is Included In Your Service?",
    body: "Our service includes business planning, market research, financial analysis, and ongoing support to ensure your business achieves its goals.",
  },
  {
    header: "What Type of Company Is Measured?",
    body: "We work with businesses of all sizes, from startups to established enterprises, across various industries to help them grow and succeed.",
  },
];

function Faq() {
  const [showIndex, setShowIndex] = useState<number | null>(null);

  const toggleShow = (index: number) => {
    setShowIndex(showIndex === index ? null : index);
  };

  function Card({
    header,
    body,
    isVisible,
    toggleShow,
  }: {
    header: string;
    body: string;
    isVisible: boolean;
    toggleShow: () => void;
  }) {
    return (
      <div
        className={`border-b border-gray-200 py-6 transition-all duration-300 ${
          isVisible ? "bg-blue-50 rounded-lg p-4" : ""
        }`}
      >
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleShow}>
          <h3 className="text-xl font-semibold text-blue-800">{header}</h3>
          <button
            onClick={toggleShow}
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {isVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            )}
          </button>
        </div>
        {isVisible && (
          <p className="mt-4 text-gray-600 text-lg leading-relaxed animate-fadeIn">
            {body}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <div className="lg:w-1/2 bg-gradient-to-r from-blue-600 to-purple-700 p-8 rounded-lg shadow-2xl">
            <img
              className="w-full rounded-lg transform hover:scale-105 transition-transform duration-300"
              src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Business"
            />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <span className="text-blue-500 text-lg font-semibold">OUR FAQ&apos;s</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mt-4 mb-8">
              Keep Your Business Safe & <br className="hidden sm:block" /> Ensure High Availability
            </h1>
            <div className="space-y-6">
              {FaqData.map((ele, index) => (
                <Card
                  key={index}
                  header={ele.header}
                  body={ele.body}
                  isVisible={showIndex === index}
                  toggleShow={() => toggleShow(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;