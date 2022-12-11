import React, { useRef, useState, useMemo, useEffect } from 'react';
import { useGesture } from 'react-use-gesture';
import '../styles/map.css';
import Tile from './Tile';

const Map = ({ isGameOn }) => {
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
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [crop, setCrop] = useState({ x: -window.innerWidth / 2, y: -window.innerHeight / 2 });
  const [transition, setTransition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const [activeLetter, setActiveLetter] = useState(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setCrop({ x: -mapRef.current.clientWidth / 2 + 200, y: -mapRef.current.clientHeight / 2 + 300 });
    }
  }, []);

  useGesture(
    {
      onMove: ({ xy }) => {
        if (activeLetter || isMobile) return;
        setCrop({ x: -xy[0], y: -xy[1] });
      },
      onDrag: ({ movement: [dx, dy] }) => {
        if (activeLetter || !isMobile) return;
        setTransition(0);
        setCrop((prev) => ({ ...prev, x: dx, y: dy }));
      },
      onDragEnd: () => {
        const newCrop = crop;
        const mapBounds = mapRef.current.getBoundingClientRect();
        const mapContainerBounds = mapContainerRef.current.getBoundingClientRect();

        if (mapBounds.left > mapContainerBounds.left) {
          newCrop.x = 0;
          setTransition(0.4);
        } else if (mapBounds.right < mapContainerBounds.right) {
          setTransition(0.4);
          newCrop.x = -(mapBounds.width - mapContainerBounds.width);
        }

        if (mapBounds.top > mapContainerBounds.top) {
          setTransition(0.4);
          newCrop.y = -48;
        } else if (mapBounds.bottom < mapContainerBounds.bottom) {
          setTransition(0.4);
          newCrop.y = -(mapBounds.height - mapContainerBounds.height + 48);
        }

        setCrop(newCrop);
      }
    },
    {
      drag: {
        initial: () => [crop.x, crop.y]
      },
      domTarget: mapRef
    }
  );

  return (
    <div ref={mapContainerRef} className="relative z-10 h-full overflow-hidden">
      <div
        ref={mapRef}
        id="map"
        style={{
          transform: `translate(${crop.x}px, ${crop.y}px)`,
          transitionDuration: isMobile ? `${transition}s` : '0.4s'
        }}
        className="relative top-12"
      >
        {shuffledLetters.map((letter, index) => (
          <Tile
            activeLetter={activeLetter}
            setActiveLetter={setActiveLetter}
            setCrop={setCrop}
            isGameOn={isGameOn}
            key={letter}
            letter={letter}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Map;
