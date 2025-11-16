import React from "react";

interface Category {
  id: number;
  title: string;
}

interface Filters {
  search: string;
  view: string;
  device: string;
  category: number[];
  gamebank: string;
  label: string;
  jpg: string;
  denomination: string;
  rezerv: string;
  order: string;
}

interface Props {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  views: any;
  devices: any;
  categories: Category[];
  savedCategory: number[];
  jpgs: any;
  applyFilter: () => void;
}

export default function GameFilters({ filters, setFilters, views, devices, categories, savedCategory, jpgs, applyFilter }: Props) {
  const updateFilter = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md mt-4 p-4">
      <h4 className="text-xl font-semibold mb-4">Filter</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
          />
        </div>

        {/* View */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.view}
            onChange={(e) => updateFilter("view", e.target.value)}
          >
            {views?.map((item: any) => (
              <option key={item.key} value={item.key}>
                {String(item.value)}
              </option>
            ))}
          </select>
        </div>

        {/* Device */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Device</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={filters.device}
            onChange={(e) => updateFilter("device", e.target.value)}
          >
            {Object?.entries(devices)?.map(([key, value]) => (
              <option key={key} value={key}>
                {String(value)}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            multiple
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
            value={filters.category.map(String)}
            onChange={(e) =>
              updateFilter(
                "category",
                Array.from(e.target.selectedOptions).map((o) => Number(o.value))
              )
            }
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mt-4 transition-colors duration-200" onClick={applyFilter}>
        Apply Filter
      </button>
    </div>
  );
}
