import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Filters from '../components/Filters';
import ToolCard from '../components/ToolCard';
import FAQ from '../components/FAQ';
import { tools } from '../data/tools';
import { FilterType, SortType, Tool } from '../types';

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [activeSort, setActiveSort] = useState<SortType>('reviewCount');
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);

  useEffect(() => {
    let tempFiltered = [...tools];

    if (activeFilter !== 'all') {
      tempFiltered = tempFiltered.filter(tool => tool.pricing?.type === activeFilter);
    }

    if (tempFiltered.length > 0) {
      tempFiltered = tempFiltered.sort((a, b) => {
        if (activeSort === 'reviewCount') {
          const countA = typeof a.reviewCount === 'number' ? a.reviewCount : 0;
          const countB = typeof b.reviewCount === 'number' ? b.reviewCount : 0;
          return countB - countA;
        }
        if (activeSort === 'name') {
          return a.name.localeCompare(b.name);
        }
        return 0;
      });
    }

    setFilteredTools(tempFiltered);
  }, [activeFilter, activeSort]);

  return (
    <>
      <Helmet>
        <title>Best Ghibli AI Art Tools & Generators | Create Studio Ghibli Style Art</title>
        <meta name="description" content="Explore the top AI tools for creating Studio Ghibli style artwork. Compare features, pricing, and user reviews to find the perfect Ghibli art generator for your needs." />
        <meta name="keywords" content="Ghibli AI tools, AI art generator, Studio Ghibli style, digital art, anime art generator" />
        <link rel="canonical" href="https://gibleartai.org/" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="sr-only">Best Ghibli AI Art Tools and Generators</h1>
        
        <Filters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
        />

        {filteredTools.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No tools found</h2>
            <p className="text-gray-600">
              Try adjusting your filters to find Ghibli AI art tools.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </div>

      <FAQ />
    </>
  );
}