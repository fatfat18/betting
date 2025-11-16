import { useEffect, useState } from "react";
import StatsHeader from "./AdminDashboardChildren/StatsHeader.tsx";
import GameFilters from "./AdminDashboardChildren/GameFilters.tsx";
import GamesTable from "./AdminDashboardChildren/GamesTable.tsx";
import AddModal from "./AdminDashboardChildren/AddModal.tsx";
import AxiosConfig from "../../AxiosConfig.tsx";

interface Stats {
  in: number;
  out: number;
  rtp: number;
  games: number;
  disabled: number;
}

interface Game {
  id: number;
  title: string;
  stat_in: number;
  stat_out: number;
  count?: number;
  view: boolean;
}

interface ApiResponse {
  stats: Stats;
  games: Game[];
  views: any;
  devices: any;
  categories: { id: number; title: string }[];
  savedCategory: number[];
  percent: number;
  jpgs: any;
}

export default function GamesPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Stats | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const [views, setViews] = useState<any>({});
  const [devices, setDevices] = useState<any>({});
  const [categories, setCategories] = useState<{ id: number; title: string }[]>([]);
  const [savedCategory, setSavedCategory] = useState<number[]>([]);
  const [jpgs, setJpgs] = useState<any>({});
  const [percent, setPercent] = useState(0);
  const [addModal, setAddModal] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    view: "",
    device: "",
    category: [] as number[],
    gamebank: "",
    label: "",
    jpg: "",
    denomination: "",
    rezerv: "",
    order: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const handleAddModal = () => {
    setAddModal((prev) => !prev);
  };

  const loadData = async () => {
    setLoading(true);
    const res = await AxiosConfig.get("/categories/all", { headers: { Accept: "application/json" } });
    const data: any = res.data;

    if (res) {
      setStats(data.stats);
      setGames(data.games?.data);
      setViews(data.views);
      setDevices(data.devices);
      setCategories(data.categories);
      setSavedCategory(data.savedCategory || []);
      setPercent(data.percent);
      setJpgs(data.jpgs);

      setLoading(false);
    }
  };

  const applyFilter = async () => {
    const params = new URLSearchParams(
      Object.entries(filters).reduce((acc, [k, v]) => {
        if (Array.isArray(v)) {
          v.forEach((item) => acc.append(k + "[]", String(item)));
        } else if (v) {
          acc.append(k, String(v));
        }
        return acc;
      }, new URLSearchParams())
    );

    const res = await fetch(`/games?${params.toString()}`, {
      headers: { Accept: "application/json" },
    });

    const data: ApiResponse = await res.json();
    setGames(data.games);
  };

  if (loading) return <p className="text-center py-8">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-white">
      <StatsHeader stats={stats ? stats : undefined} percent={percent} />
      <GameFilters filters={filters} setFilters={setFilters} views={views} devices={devices} categories={categories} savedCategory={savedCategory} jpgs={jpgs} applyFilter={applyFilter} />
      <GamesTable games={games} />
      {addModal && <AddModal onSelect={handleAddModal} />}
    </div>
  );
}
