"use client";
import React from "react";

const data = [
  {
    img: "https://smsnvmpoxg.ufs.sh/f/QZbXEAchwtckcodznBOwaBfjPAs21FZ03Oizv7bHlgKW4nC6",
    number: "6,561 +",
    para: "Satisfied Clients",
  },
  {
    img: "https://smsnvmpoxg.ufs.sh/f/QZbXEAchwtcka0Moc0Als03f5DOZnm6tLVdqvGCbwF8PeNiJ",
    number: "600 +",
    para: "Finished Projects",
  },
  {
    img: "https://smsnvmpoxg.ufs.sh/f/QZbXEAchwtckh74vmZAHNPeJHCpqLQiAEjMuXr0ISOcBTWfy",
    number: "250 +",
    para: "Skilled Experts",
  },
  {
    img: "https://smsnvmpoxg.ufs.sh/f/QZbXEAchwtckA7PjkG5tIN9zmpYWjvf7Lq0FksXbZVKonTBg",
    number: "1,001 +",
    para: "Media Posts",
  },
];

const serviceData = [
  {
    img: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    header: "Security",
    info: "Network Security",
  },
  {
    img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    header: "Solution",
    info: "Web Development",
  },
  {
    img: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    header: "Management",
    info: "IT Management",
  },
  {
    img: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    header: "Technology",
    info: "Platform Integration",
  },
];

const Card = ({
  img,
  number,
  para,
}: {
  img: string;
  number: string;
  para: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-3 p-6 bg-blue-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <img src={img} alt="img" className="h-36 w-36" />
      <h2 className="text-white text-3xl font-bold">{number}</h2>
      <p className="text-white text-lg">{para}</p>
    </div>
  );
};

function ServiceCard({
  img,
  header,
  info,
}: {
  img: string;
  header: string;
  info: string;
}) {
  return (
    <div className="flex-1 relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        className="w-full h-64 sm:h-80 lg:h-96 object-cover transform group-hover:scale-110 transition-transform duration-300"
        src={img}
        alt="serviceimage"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
        <span className="text-white text-xl lg:text-2xl font-semibold">{header}</span>
        <span className="text-white text-sm lg:text-base">{info}</span>
      </div>
    </div>
  );
}

const Partners = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700">
      {/* Achievement Section */}
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        <span className="text-white text-lg font-semibold">ACHIEVEMENT</span>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mt-5">
          We Are Increasing <br /> Business Success
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10">
          {data.map((ele, index) => (
            <Card key={index} img={ele.img} number={ele.number} para={ele.para} />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.map((ele, index) => (
              <ServiceCard
                key={index}
                img={ele.img}
                header={ele.header}
                info={ele.info}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;