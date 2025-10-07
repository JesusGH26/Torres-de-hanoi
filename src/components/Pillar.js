import React from 'react';
import Disk from './Disk';
import './Pillar.css';

export default function Pillar({ disks = [], maxSize, onClick, isSelected }) {
  return (
    <div
      className={`pillar ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {disks.map((size, idx) => (
        <Disk key={idx} size={size} maxSize={maxSize} />
      ))}
    </div>
  );
}