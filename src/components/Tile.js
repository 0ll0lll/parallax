import React from 'react';
import { useGameContext } from '../contexts/GameContext';
import TileCard from './TileCard';
import '../styles/tile.css';
import ids from '../data/ids.json';

const Tile = ({ isGameOn, setCrop, letter, index, setActiveLetter, activeLetter }) => {
  const { tileClickHandler: gameClickHandler } = useGameContext();

  const clickHandler = () => {
    setActiveLetter(letter);
    const tile = document.querySelector(`[data-letter=${letter}]`);
    setCrop({ x: -window.innerWidth / 2, y: -window.innerHeight / 2 });
    tile.removeAttribute('id');
    tile.classList.remove('inactive');
    tile.classList.add('active');
  };

  // const Tag = activeLetter && activeLetter === letter ? 'div' : 'button';
  // // const Tag = 'button';

  return (
    <div onClick={() => (isGameOn ? gameClickHandler(letter) : clickHandler())}>
      <div data-letter={letter} id={ids[index]} className="flex items-center justify-center inactive tile">
        {activeLetter && activeLetter === letter && (
          <TileCard setActiveLetter={setActiveLetter} id={ids[index]} letter={letter} />
        )}
        {!activeLetter && <p className="text-3xl font-bold uppercase">{letter}</p>}
      </div>
    </div>
  );
};

export default Tile;
