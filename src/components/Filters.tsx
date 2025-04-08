import React from 'react';
import { FilterType, SortType } from '../types';
import { SlidersHorizontal } from 'lucide-react';

interface FiltersProps {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
  activeSort: SortType;
  setActiveSort: (sort: SortType) => void;
}

export default function Filters({
  activeFilter,
  setActiveFilter,
  activeSort,
  setActiveSort
}: FiltersProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
      <div className="flex items-center gap-2">
        <SlidersHorizontal className="h-5 w-5 text-gray-500" />
        <div className="flex gap-2">
          {['all', 'free', 'paid', 'freemium'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as FilterType)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeFilter === filter
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <select
        value={activeSort}
        onChange={(e) => setActiveSort(e.target.value as SortType)}
        className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        <option value="rating">Highest Rated</option>
        <option value="reviewCount">Most Reviews</option>
        <option value="name">Alphabetical</option>
      </select>
    </div>
  );
}