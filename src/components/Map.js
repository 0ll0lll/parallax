import React, { useRef, useState, useMemo } from 'react';
import { useGesture } from 'react-use-gesture';
import '../styles/map.css';
import Tile from './Tile';

const map = () => {
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  const shuffledLetters = useMemo(() => letters.sort(() => Math.random() - 0.5), []);
  const mapRef = useRef();
  const [crop, setCrop] = useState({ x: -window.innerWidth / 2, y: -window.innerHeight / 2 });

  useGesture(
    {
      onMove: ({ xy }) => {
        setCrop({ x: -xy[0], y: -xy[1] });
      }
    },
    {
      domTarget: mapRef
    }
  );

  return (
    <div className="relative z-10 h-full overflow-hidden">
      <div
        ref={mapRef}
        id="map"
        style={{
          transform: `translate(calc(${crop.x}px), calc(${crop.y}px))`
        }}
        className="relative top-10"
      >
        {shuffledLetters.map((letter, index) => (
          <Tile letter={letter} index={index} />
        ))}

        <p className="absolute top-0 left-0 font-bold bg-red-500"> TOP LEFT</p>
        <p className="absolute bottom-0 left-0 font-bold bg-red-500"> BOTTOM LEFT</p>
        <p className="absolute top-0 right-0 font-bold bg-red-500"> TOP RIGHT</p>
        <p className="absolute bottom-0 right-0 font-bold bg-red-500"> BOTTOM RIGHT</p>
      </div>
    </div>
  );
};

export default map;
