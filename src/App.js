import React from 'react';
import HanoiGame from './HanoiGame';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Torres de Hanoi</h1>
      <HanoiGame />
    </div>
  );
}