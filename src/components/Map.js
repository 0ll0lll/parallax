import React, { useRef, useState, useMemo, useEffect } from 'react';
import { useGesture } from 'react-use-gesture';
import '../styles/map.css';
import Tile from './Tile';
import star from '../assets/star.svg';

const Map = ({ isGameOn, setDisableHeader }) => {
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

  const [showHint, setShowHint] = useState(false);

  const [activeLetter, setActiveLetter] = useState(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setCrop({ x: -mapRef.current.clientWidth / 2 + 200, y: -mapRef.current.clientHeight / 2 + 300 });
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('hideHint')) {
      setShowHint(false);
    } else {
      setShowHint(true);
    }
  }, []);

  useEffect(() => {
    if (activeLetter !== null) {
      setDisableHeader(true);
    } else {
      setDisableHeader(false);
    }
  }, [activeLetter]);

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
      {showHint && (
        <div className="fixed top-0 z-50 w-full h-full bg-beige/70">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center w-5/6 justify-center p-10 text-center bg-white rounded-md md:w-[36rem] drop-shadow-md">
            <button
              onClick={() => {
                localStorage.setItem('hideHint', true);
                setShowHint(false);
              }}
              aria-label="close button"
              type="button"
              className="absolute z-20 rounded-full top-4 right-4"
            >
              <svg
                className="stroke-black hover:stroke-white fill-white hover:fill-[black]"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <g transform="translate(0.053 0.003)">
                  <g transform="translate(-0.053 -0.003)" fill="fill-current" stroke="black" strokeWidth="1">
                    <circle cx="15" cy="15" r="15" stroke="none" />
                    <circle cx="15" cy="15" r="14.5" fill="none" />
                  </g>
                  <g transform="translate(8.569 8.779)">
                    <line x1="12.756" y1="12.437" fill="none" stroke="stroke-current" strokeWidth="1" />
                    <line y1="12.437" x2="12.756" fill="none" stroke="stroke-current" strokeWidth="1" />
                  </g>
                </g>
              </svg>
            </button>
            <img className="mx-auto" src={star} alt="star" />
            <span className="block my-6 text-3xl font-bold">Hint!</span>
            <p>
              Move your pointer around the screen to find and click on every letter. Each contains an interesting
              literacy fact.
            </p>
          </div>
        </div>
      )}

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
