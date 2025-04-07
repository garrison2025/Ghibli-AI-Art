import React, { useState } from 'react';
import Filters from '../components/Filters';
import ToolCard from '../components/ToolCard';
import { tools } from '../data/tools';
import { FilterType, SortType } from '../types';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [activeSort, setActiveSort] = useState<SortType>('rating');

  const filteredTools = tools.filter(tool => {
    if (activeFilter === 'all') return true;
    return tool.pricing.type === activeFilter;
  }).sort((a, b) => {
    if (activeSort === 'rating') return b.rating - a.rating;
    if (activeSort === 'reviewCount') return b.reviewCount - a.reviewCount;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Filters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        activeSort={activeSort}
        setActiveSort={setActiveSort}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}