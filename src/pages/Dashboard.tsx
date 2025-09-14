const bets = [
  {
    id: 1,
    match: "Team A vs Team B",
    bet: "Team A to win",
    odds: 2.5,
    stake: 50,
    status: "Won",
    date: "2024-06-10",
  },
  {
    id: 2,
    match: "Team C vs Team D",
    bet: "Draw",
    odds: 3.2,
    stake: 30,
    status: "Lost",
    date: "2024-06-09",
  },
  {
    id: 3,
    match: "Team E vs Team F",
    bet: "Over 2.5 Goals",
    odds: 1.8,
    stake: 40,
    status: "Pending",
    date: "2024-06-11",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">Betting Dashboard</h1>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition">Place Bet</button>
        </header>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-2xl font-semibold text-white">Balance</span>
            <span className="text-3xl font-bold text-green-400 mt-2">$1,250</span>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-2xl font-semibold text-white">Total Bets</span>
            <span className="text-3xl font-bold text-blue-400 mt-2">32</span>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg flex flex-col items-center">
            <span className="text-2xl font-semibold text-white">Winnings</span>
            <span className="text-3xl font-bold text-yellow-400 mt-2">$850</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Recent Bets</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white/10 backdrop-blur-lg rounded-xl shadow-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-white">Match</th>
                  <th className="px-4 py-2 text-left text-white">Bet</th>
                  <th className="px-4 py-2 text-left text-white">Odds</th>
                  <th className="px-4 py-2 text-left text-white">Stake</th>
                  <th className="px-4 py-2 text-left text-white">Status</th>
                  <th className="px-4 py-2 text-left text-white">Date</th>
                </tr>
              </thead>
              <tbody>
                {bets.map((bet) => (
                  <tr key={bet.id} className="hover:bg-white/20 transition">
                    <td className="px-4 py-2 text-white">{bet.match}</td>
                    <td className="px-4 py-2 text-white">{bet.bet}</td>
                    <td className="px-4 py-2 text-white">{bet.odds}</td>
                    <td className="px-4 py-2 text-white">${bet.stake}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold ${
                          bet.status === "Won" ? "bg-green-500 text-white" : bet.status === "Lost" ? "bg-red-500 text-white" : "bg-yellow-500 text-white"
                        }`}
                      >
                        {bet.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-white">{bet.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
