// 'use client'
// import { Player } from "@lottiefiles/react-lottie-player";

// const data = [
//   {
//     img: "https://lottie.host/c55fff7a-6386-4ef7-9d75-3e2265665d97/jFj01C37gH.json",
//     header: "Cyber Security",
//     para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, porro?",
//     link: "http://example.com/1234",
//   },
//   {
//     img: "https://lottie.host/6fab8df1-2472-4378-a665-2600abca0166/VRjph8p6rZ.json",
//     header: "App Development",
//     para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, porro?",
//     link: "http://example.com/1234",
//   },
//   {
//     img: "https://lottie.host/2d7c412e-b6e1-48fa-8c6b-cf271681f434/016kQMcx1A.json",
//     header: "Database Security",
//     para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, porro?",
//     link: "http://example.com/1234",
//   },
//   {
//     img: "https://lottie.host/5deabb66-6f25-4902-b138-1096c03c194c/mvHCEvLbgl.json",
//     header: "IT Consultancy",
//     para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, porro?",
//     link: "http://example.com/1234",
//   },
// ];

// const Card = ({
//   img,
//   header,
//   para,
//   link,
// }: {
//   img: string;
//   header: string;
//   para: string;
//   link: string;
// }) => {
//   return (
//     <div className="flex flex-col items-center justify-start bg-slate-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-10">
//       <Player
//         autoplay
//         loop
//         src={img}
//         style={{ height: "100px", width: "100px" }}
//       />
//       <h2 className="text-xl font-semibold text-center text-gray-800 md:text-2xl">
//         {header}
//       </h2>
//       <p className="text-sm text-center text-gray-600 md:text-base mt-2">
//         {para}
//       </p>
//       <a
//         href={link}
//         className="text-blue-600 underline mt-4 text-sm md:text-base hover:text-blue-800"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Read More
//       </a>
//     </div>
//   );
// };

// const Services = () => {
//   return (
//     <div className="bg-white px-6 py-16 md:px-16 lg:px-24 lg:py-36">
//       <h1 className="text-3xl text-blue-600 font-bold mb-10 text-center md:text-4xl lg:text-5xl">
//         What Sets Us Apart
//       </h1>
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {data.map((ele, index) => (
//           <Card
//             key={index}
//             img={ele.img}
//             header={ele.header}
//             para={ele.para}
//             link={ele.link}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;



'use client';


const data = [
  {
    img: "https://smsnvmpoxg.ufs.sh/f/QZbXEAchwtcktNQYVwMh0W8D2TjXclHL6pB1axGYJn9iv3Eb",
    header: "Cyber Security",
    para: "Protect your business from cyber threats with our advanced security solutions.",
    link: "http://example.com/1234",
  },
  {
    img: "https://smsnvmpoxg.ufs.sh/f/QZbXEAchwtck5UqjPzYz9HvnN7iVcfUE4BqJhl0xkPaAuOtF",
    header: "App Development",
    para: "Build scalable and user-friendly mobile and web applications tailored to your needs.",
    link: "http://example.com/1234",
  },
  {
    img: "https://smsnvmpoxg.ufs.sh/f/QZbXEAchwtckmTDsGrJQIz90x37LGJSW4BwEUAZFq8YdRrTc",
    header: "Database Security",
    para: "Ensure your data is safe and secure with our robust database management solutions.",
    link: "http://example.com/1234",
  },
  {
    img: "https://smsnvmpoxg.ufs.sh/f/QZbXEAchwtck5oW96HzYz9HvnN7iVcfUE4BqJhl0xkPaAuOt",
    header: "IT Consultancy",
    para: "Get expert advice and strategies to optimize your IT infrastructure and operations.",
    link: "http://example.com/1234",
  },
];

const Card = ({
  img,
  header,
  para,
  link,
}: {
  img: string;
  header: string;
  para: string;
  link: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-start bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 hover:border-blue-500 transform hover:-translate-y-2 transition-transform duration-300">
    <img src={img} alt="img" className="h-36 w-36" />
      <h2 className="text-2xl font-bold text-center text-gray-800 mt-6">
        {header}
      </h2>
      <p className="text-sm text-center text-gray-600 mt-4">
        {para}
      </p>
      <a
        href={link}
        className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-16 md:px-16 lg:px-24 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-blue-800 font-bold mb-12 text-center md:text-5xl lg:text-6xl">
          What Sets Us Apart
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((ele, index) => (
            <Card
              key={index}
              img={ele.img}
              header={ele.header}
              para={ele.para}
              link={ele.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;