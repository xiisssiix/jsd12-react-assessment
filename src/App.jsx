import React from 'react';
import Navbar from './components/Navbar'; // ดึง Navbar มา
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* วางไว้บนสุด */}
      <Home />
    </div>
  );
}

export default App;