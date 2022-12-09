/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { useGameContext } from '../contexts/GameContext';
import TileCard from './TileCard';
import '../styles/tile.css';
import ids from '../data/ids.json';
import svgs from '../data/svgs';

const Tile = ({ isGameOn, setCrop, letter, index, setActiveLetter, activeLetter }) => {
  const { tileClickHandler: gameClickHandler } = useGameContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const clickHandler = () => {
    setActiveLetter(letter);

    if (isMobile) {
      const map = document.querySelector(`#map`);
      setCrop({ x: -map.clientWidth / 2, y: -map.clientHeight / 2 });
    } else {
      setCrop({ x: -window.innerWidth / 2, y: -window.innerHeight / 2 });
      const tile = document.querySelector(`[data-letter=${letter}]`);
      tile.removeAttribute('id');
      tile.classList.remove('inactive');
      tile.classList.add('active');
    }
  };

  return (
    <>
      {isMobile && activeLetter && activeLetter === letter && (
        <div className="fixed z-10 w-screen h-screen px-4 py-16 -mt-20 top-1/2 left-1/2">
          <TileCard isMobile setActiveLetter={setActiveLetter} id={ids[index]} letter={letter} />
        </div>
      )}
      <div
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (isGameOn) {
              gameClickHandler(letter);
            } else {
              clickHandler();
            }
          }
        }}
        role="button"
        onClick={() => {
          if (activeLetter) return;

          if (isGameOn) {
            gameClickHandler(letter);
          } else {
            clickHandler();
          }
        }}
      >
        <div data-letter={letter} id={ids[index]} className="flex items-center justify-center inactive tile">
          {!isMobile && activeLetter && activeLetter === letter && (
            <TileCard setActiveLetter={setActiveLetter} id={ids[index]} letter={letter} />
          )}
          {activeLetter !== letter && (
            <div className={`relative ${activeLetter && activeLetter !== letter ? 'opacity-50' : ''}`}>
              {svgs[letter]}
              <img src={require(`../assets/letters/${letter}.jpg`)} alt={`letter ${letter}`} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tile;
