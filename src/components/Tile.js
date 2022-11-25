import React from 'react';
import { useGameContext } from '../contexts/GameContext';
import '../styles/tile.css';
import ids from '../data/ids.json';

const Tile = ({ letter, index }) => {
  const { tileClickHandler } = useGameContext();

  return (
    <button type="button" onClick={() => tileClickHandler(letter)}>
      <div data-letter={letter} id={ids[index]} className="flex items-center justify-center tile">
        <p className="text-3xl font-bold uppercase">{letter}</p>
      </div>
    </button>
  );
};

export default Tile;
