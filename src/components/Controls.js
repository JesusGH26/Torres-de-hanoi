import React from 'react';
import './Controls.css';

export default function Controls({ moves, onReset, numDisks, onChangeDisks }) {
  return (
    <div className="controls">
      <span>Movimientos: {moves}</span>
      <button onClick={onReset}>Reiniciar</button>
      <label>
        Discos:
        <select
          value={numDisks}
          onChange={e => onChangeDisks(+e.target.value)}
        >
          {[3, 4, 5, 6, 7].map(n => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}