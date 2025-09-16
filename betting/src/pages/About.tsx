import React from "react";
import Footer from "../components/Footer";

const aboutSections = [
  {
    title: "Welcome to ETHXpert!",
    content: "ETHXpert is your premier destination for live betting games. We combine excitement, strategy, and entertainment to give you the best online betting experience.",
  },
  {
    title: "How It Works",
    content: "Join live games and enjoy the thrill of betting in real time. Experience a seamless and engaging platform designed for all players.",
  },
  {
    title: "Get Started",
    content: "Sign up and explore our live games. Enjoy a user-friendly interface and a vibrant community of fellow bettors.",
  },
];

const About: React.FC = () => {
  return (
    <div className="w-screen h-max min-h-screen p-8 pt-28 bg-gradient-to-br bg-gray-900 via-gray-900 to-green-800 font-host ">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-black text-white mb-4">Who we are?</h1>
        <p className="text-lg text-zinc-400">Discover our platform and enjoy live betting games!</p>
      </div>
      <div className="flex justify-center  w-full  ">
        <div className="flex items-center justify-center  w-full h-full">
          {" "}
          <img src="/src/assets/about/about-2.png" className="w-[20rem] h-[20rem] -rotate-30" />
        </div>{" "}
        <div className="flex items-center justify-center  w-full h-full">
          {" "}
          <img src="/src/assets/about/about-1.png" className="w-[30rem] h-[30rem]" />
        </div>{" "}
        <div className="flex items-center justify-center  w-full h-full">
          {" "}
          <img src="/src/assets/about/about-2.png" className="w-[20rem] h-[20rem] rotate-30" />
        </div>{" "}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {aboutSections.map((section) => (
          <div key={section.title} className="bg-white rounded-lg shadow p-12">
            <h2 className="text-xl text-green-800 font-black mb-2">{section.title}</h2>
            <p className="text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default About;
