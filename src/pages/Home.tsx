// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import Filters from '../components/Filters';
import ToolCard from '../components/ToolCard';
import { tools } from '../data/tools';
import { FilterType, SortType, Tool } from '../types';

// 不再需要 searchQuery prop
interface HomeProps {
  // 可能为空
}

// 不再接收 searchQuery
export default function Home({}: HomeProps) { // 可以为空对象或移除 props
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [activeSort, setActiveSort] = useState<SortType>('reviewCount');
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);

  useEffect(() => {
    console.log('[Home.tsx] useEffect triggered (No Search). Dependencies changed:'); // 更新日志
    console.log('  - activeFilter:', activeFilter);
    console.log('  - activeSort:', activeSort);

    let tempFiltered = [...tools]; // Start with all tools

    // 移除了整个 if (searchQuery) { ... } 块

    // Apply pricing filter (保留)
    if (activeFilter !== 'all') {
      console.log('[Home.tsx] Applying pricing filter:', activeFilter);
      tempFiltered = tempFiltered.filter(tool => tool.pricing?.type === activeFilter);
      console.log('[Home.tsx] After pricing filter:', tempFiltered);
    }

    // Apply sorting (保留)
    if (tempFiltered.length > 0) {
      console.log('[Home.tsx] Applying sorting:', activeSort);
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
       console.log('[Home.tsx] After sorting:', tempFiltered);
    }

    console.log('[Home.tsx] Final filteredTools count:', tempFiltered.length);
    setFilteredTools(tempFiltered);

    // 移除了 searchQuery 从依赖项数组
  }, [activeFilter, activeSort]); // 依赖项只剩下 filter 和 sort

  console.log('[Home.tsx] Rendering UI with filteredTools count:', filteredTools.length);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Filters 组件保留 */}
      <Filters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        activeSort={activeSort}
        setActiveSort={setActiveSort}
      />

      {/* 结果展示逻辑保留 */}
      {filteredTools.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">No tools found</h2>
          <p className="text-gray-600">
            Try adjusting your filters. {/* 更新提示信息 */}
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
  );
}