import React from 'react';
import Gallery from './components/Gallery';
import './index.css';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-4 text-center">Фотогалерея</h1>
      <Gallery />
    </div>
  );
}

export default App;

