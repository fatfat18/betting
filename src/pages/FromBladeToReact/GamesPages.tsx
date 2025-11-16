import React, { useState, useEffect } from "react";
import AxiosConfig from "../../AxiosConfig";
import { useNavigate } from "react-router-dom";

interface Game {
  name: string;
  title: string;
  label?: string;
}

interface User {
  username?: string;
  balance?: number;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

interface GameListProps {
  games?: Game[];
  user?: User;
  category1?: string;
  cat1?: { title?: string };
}

const GamesPage: React.FC<GameListProps> = ({ category1, cat1 }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<Game[]>([]);
  const [paginationLinks, setPaginationLinks] = useState<Link[]>([]);
  const [user, setUser] = useState<User>({
    username: "",
    balance: 400,
  });

  const loadData = async (url: string = "/categories/all") => {
    setLoading(true);
    try {
      const res = await AxiosConfig.get(url, { headers: { Accept: "application/json" } });
      const data = res.data;

      setGames(data.games?.data || []);
      setPaginationLinks(data.games.links || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePlayGame = (gameName: string) => {
    navigate(`/old/play-game`, { state: { gameName } });
  };

  const handlePlayGameDemo = (gameName: string) => {
    navigate(`/old/play-game-demo`, { state: { gameName } });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handlePageClick = (url: string | null) => {
    if (url) loadData(url);
  };

  return (
    <>
      <div className="flex flex-wrap p-10 pb-4 font-host w-full items-center justify-center h-max min-h-screen ">
        {loading ? (
          <p className="text-gray-500">Loading Games . . .</p>
        ) : games.length > 0 ? (
          games.map((game, key) => (
            <div key={key} className="relative group w-1/5 h-60 rounded-2xl overflow-hidden duration-300 p-4">
              <div className="relative w-full h-full rounded-2xl">
                <img className="w-full h-52 object-cover rounded-2xl" src={game.name ? `https://localhost/frontend/Default/ico/${game.name}.jpg` : ""} alt={game.title} loading="lazy" />

                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {game.label && <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">{game.label.toUpperCase()}</div>}
                  <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                </div>

                <div className="absolute top-2 right-2">
                  <div className="bg-green-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>Active</span>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-xl bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    {user?.username ? (
                      user.balance && user.balance > 0 ? (
                        <button
                          onClick={() => handlePlayGame(game.name)}
                          className="bg-gradient-to-bl cursor-pointer from-green-950 to-gray-950 hover:from-green-800 hover:to-gray-800 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                        >
                          Play Now
                        </button>
                      ) : (
                        <a href="#" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
                          Deposit Funds
                        </a>
                      )
                    ) : (
                      <button
                        onClick={() => handlePlayGameDemo(game.name)}
                        className="cursor-pointer bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                      >
                        Demo
                      </button>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-0 flex left-0 h-20 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-gray-300 text-sm capitalize">{cat1?.title ?? (category1 ? category1.charAt(0).toLowerCase() + category1.slice(1) : "")}</p>
                  <p className="text-white font-semibold flex items-end justify-end">{game.title.replace(/([A-Z])/g, " $1").trim()}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">No games available.</p>
        )}
      </div>

      {/* Pagination */}

      <div className="flex justify-center items-center  mb-10 space-x-1 font-host">
        {paginationLinks.map((link, idx) => (
          <button
            key={idx}
            onClick={() => handlePageClick(link.url)}
            disabled={!link.url}
            className={`
          px-4 py-2 text-sm rounded-lg border transition-all duration-200 ease-in-out cursor-pointer
          ${
            link.active
              ? "bg-green-600 text-white border-green-600 shadow-md !font-semibold !text-2xl "
              : link.url
              ? "bg-white text-gray-700 border-gray-300 hover:bg-green-50 hover:border-green-300 hover:text-green-600 shadow-sm"
              : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
          }
        `}
            dangerouslySetInnerHTML={{ __html: link.label }}
          ></button>
        ))}
      </div>
    </>
  );
};

export default GamesPage;
