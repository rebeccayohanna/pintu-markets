import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Market from './components/Market';

function App() {
  return (
    <div className="container mx-auto flex flex-col gap-4 lg:w-10/12 sm:w-screen px-5">
      <Navbar />
      <Market />
    </div>
  );
}

export default App;
