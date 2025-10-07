import React from 'react';
import './Disk.css';

export default function Disk({ size, maxSize }) {
  const widthPercent = (size / maxSize) * 100;
  return (
    <div
      className="disk"
      style={{ width: `${widthPercent}%` }}
    >
      {size}
    </div>
  );
}