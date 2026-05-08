import React from 'react';
import { Routes, Route } from 'react-router-dom'; // เพิ่ม Routes และ Route
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Owner from './components/pages/Owner';

function App() {
  return (
    <div className="min-h-screen bg-neutral-lighter text-content-main">
      <Navbar />
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-8">
        <div className="w-full max-w-7xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/owner" element={<Owner />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;