interface Game {
  id: number;
  title: string;
  stat_in: number;
  stat_out: number;
  count?: number;
  view: boolean;
}

interface Props {
  games: Game[];
}

export default function GamesTable({ games }: Props) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b border-gray-300">Game</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b border-gray-300">In</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b border-gray-300">Out</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b border-gray-300">Total</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b border-gray-300">RTP</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b border-gray-300">Count</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b border-gray-300">View</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {games?.length === 0 && (
            <tr>
              <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                No data
              </td>
            </tr>
          )}

          {games?.map((g) => (
            <tr key={g.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 text-sm text-gray-900 border-b border-gray-200">{g.title}</td>
              <td className="px-4 py-2 text-sm text-gray-900 border-b border-gray-200">{g.stat_in}</td>
              <td className="px-4 py-2 text-sm text-gray-900 border-b border-gray-200">{g.stat_out}</td>
              <td className="px-4 py-2 text-sm text-gray-900 border-b border-gray-200">{g.stat_in - g.stat_out}</td>
              <td className="px-4 py-2 text-sm text-gray-900 border-b border-gray-200">{g.stat_in ? ((g.stat_out / g.stat_in) * 100).toFixed(1) : "0"}</td>
              <td className="px-4 py-2 text-sm text-gray-900 border-b border-gray-200">{g.count ?? "-"}</td>
              <td className="px-4 py-2 text-sm border-b border-gray-200">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${g.view ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>{g.view ? "Active" : "Disabled"}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
