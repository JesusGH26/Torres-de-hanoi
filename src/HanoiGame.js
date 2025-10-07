import React, { useState } from 'react';
import Controls from './components/Controls';
import Pillar from './components/Pillar';
import './HanoiGame.css';

export default function HanoiGame() {
  const [numDisks, setNumDisks] = useState(4);
  const buildTowers = n => [
    Array.from({ length: n }, (_, i) => n - i),
    [],
    []
  ];

  const [towers, setTowers] = useState(buildTowers(numDisks));
  const [moves, setMoves] = useState(0);
  const [selected, setSelected] = useState(null);
  const [won, setWon] = useState(false);

  function handlePillarClick(idx) {
    if (selected === null && towers[idx].length > 0) {
      setSelected(idx);
      return;
    }

    if (selected !== null && selected !== idx) {
      const from = [...towers[selected]];
      const disk = from.pop();
      const to = [...towers[idx]];
      const top = to[to.length - 1] ?? Infinity;

      if (disk < top) {
        to.push(disk);
        const newTowers = towers.map((t, i) =>
          i === selected ? from : i === idx ? to : t
        );
        setTowers(newTowers);
        setMoves(m => m + 1);

        // Verificar victoria
        if (
          to.length === numDisks &&
          to.every((d, i, arr) => i === 0 || arr[i - 1] > d)
        ) {
          setWon(true);
        }
      }
    }

    setSelected(null);
  }

  function reset() {
    setTowers(buildTowers(numDisks));
    setMoves(0);
    setSelected(null);
    setWon(false);
  }

  return (
    <>
      <Controls
        moves={moves}
        onReset={reset}
        numDisks={numDisks}
        onChangeDisks={n => {
          setNumDisks(n);
          setTowers(buildTowers(n));
          setMoves(0);
          setSelected(null);
          setWon(false);
        }}
      />

      {won && <div className="win-message">🎉 ¡Ganaste el juego! 🎉</div>}

      <div className="hanoi-game">
        {towers.map((disks, idx) => (
          <Pillar
            key={idx}
            disks={disks}
            maxSize={numDisks}
            isSelected={selected === idx}
            onClick={() => handlePillarClick(idx)}
          />
        ))}
      </div>
    </>
  );
}