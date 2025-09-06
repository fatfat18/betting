const featuredGames = [
  {
    name: "Football",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Basketball",
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Tennis",
    img: "https://images.unsplash.com/photo-1505843277359-0c1b6a7a6c8e?auto=format&fit=crop&w=400&q=80",
  },
];

const Home: React.FC = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-[#1e2a38] text-white py-10 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">BetMaster</h1>
          <p className="text-xl mb-6">Your #1 destination for sports betting!</p>
          <button className="px-10 py-3 text-lg bg-yellow-400 text-[#1e2a38] rounded-full font-bold shadow hover:bg-yellow-500 transition duration-200">Join Now</button>
        </div>
      </header>

      {/* Featured Games */}
      <section className="max-w-5xl mx-auto my-12 px-4">
        <h2 className="text-[#1e2a38] mb-8 text-3xl font-bold text-center">Featured Games</h2>
        <div className="flex gap-10 justify-center flex-wrap">
          {featuredGames.map((game) => (
            <div key={game.name} className="bg-white rounded-xl shadow-lg w-64 text-center p-6 hover:scale-105 transition-transform duration-200">
              <img src={game.img} alt={game.name} className="w-full rounded-lg h-32 object-cover mb-4 shadow" />
              <h3 className="mb-3 text-[#1e2a38] text-xl font-semibold">{game.name}</h3>
              <button className="bg-yellow-400 text-[#1e2a38] rounded-full px-8 py-2 font-bold shadow hover:bg-yellow-500 transition duration-200">Bet Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Why BetMaster */}
      <section className="bg-white py-12 mt-12 shadow-inner">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[#1e2a38] text-3xl font-bold mb-6">Why BetMaster?</h2>
          <ul className="list-none p-0 mb-8 text-gray-700 text-lg space-y-3">
            <li>✅ Secure & Fast Payments</li>
            <li>✅ Live Betting & Real-Time Odds</li>
            <li>✅ 24/7 Customer Support</li>
            <li>✅ Exclusive Promotions</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e2a38] text-white text-center py-5 mt-12 shadow">© {new Date().getFullYear()} BetMaster. All rights reserved.</footer>
    </div>
  );
};

export default Home;
