// src/components/Header.tsx
import React from 'react';
//不再需要 import { Search } from 'lucide-react';
//不再需要 import { useState } from 'react';
import Logo from './Logo';

// 不再需要 onSearch prop
interface HeaderProps {
  // 可能完全不需要 props 了，除非有其他用途
}

// 不再接收 onSearch
export default function Header({}: HeaderProps) { // 可以为空对象或移除 props
  // 移除内部 state
  // const [searchQuery, setSearchQuery] = useState('');

  // 移除事件处理函数
  // const handleSearch = () => { ... };
  // const handleKeyPress = (e: React.KeyboardEvent) => { ... };

  return (
    // 可以根据需要调整 padding/margin，因为搜索框移除了
    <header className="bg-gradient-to-r from-[#a8edea] to-[#fed6e3] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Logo 部分保留 */}
        <div className="flex justify-center mb-12"> {/* 可以调整 mb-12 */}
          <Logo />
        </div>

        {/* 移除了包含搜索框的整个 div */}
        {/*
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <input ... />
            <Search ... />
            <button ... />
          </div>
        </div>
        */}
      </div>
    </header>
  );
}