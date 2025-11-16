import React from "react";

interface Stats {
  in: number;
  out: number;
  rtp: number;
  games: number;
  disabled: number;
}

interface Props {
  stats?: Stats;
  percent: number;
}

export default function StatsHeader({ stats, percent }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
      {/* Box 1 */}
      <div className="bg-green-500 rounded-lg p-4 text-white">
        <div className="text-center">
          <h3 className="text-3xl font-bold">{stats?.in}</h3>
          <p className="text-sm opacity-90">Total In</p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="bg-red-500 rounded-lg p-4 text-white">
        <div className="text-center">
          <h3 className="text-3xl font-bold">{stats?.out}</h3>
          <p className="text-sm opacity-90">Total Out</p>
        </div>
      </div>

      {/* Box 3 */}
      <div className="bg-cyan-500 rounded-lg p-4 text-white">
        <div className="text-center">
          <h3 className="text-3xl font-bold">{percent}%</h3>
          <p className="text-sm opacity-90">RTP: {stats?.rtp.toFixed(2)}</p>
        </div>
      </div>

      {/* Box 4 */}
      <div className="bg-yellow-500 rounded-lg p-4 text-white">
        <div className="text-center">
          <h3 className="text-3xl font-bold">{stats?.games}</h3>
          <p className="text-sm opacity-90">Disabled Games: {stats?.disabled}</p>
        </div>
      </div>
    </div>
  );
}
