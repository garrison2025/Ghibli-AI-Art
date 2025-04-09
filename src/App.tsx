// src/App.tsx
import React from 'react'; // 不再需要 useState
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';


function App() {
  // 移除搜索状态
  // const [searchQuery, setSearchQuery] = useState('');

  // 移除处理搜索的函数
  // const handleSearch = (query: string) => { ... };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header 不再需要 onSearch prop */}
      <Header />

      <main className="flex-grow">
        <Routes>
          {/* Home 不再需要 searchQuery prop */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
