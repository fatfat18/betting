import React from "react";

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
    <div className="max-w-5xl mx-auto p-8 mt-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-lg">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">About ETHXpert</h1>
        <p className="text-lg text-gray-700">Discover our platform and enjoy live betting games!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {aboutSections.map((section) => (
          <div key={section.title} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-green-700 mb-2">{section.title}</h2>
            <p className="text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Ready to Play?</h2>
        <p className="text-gray-700 mb-6">Join our live betting games and experience the excitement!</p>
        <a href="/games" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-bold shadow hover:bg-blue-700 transition">
          Go to Live Games
        </a>
      </div>
    </div>
  );
};

export default About;
