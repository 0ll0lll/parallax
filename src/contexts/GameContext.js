import { createContext, useContext, useState, useMemo, useEffect } from 'react';

const GameContext = createContext();

export function GameWrapper({ children }) {
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
  const [clickedLetters, setClickedLetters] = useState([]);
  const [matchedLetters, setMatchedLetters] = useState([]);

  const tileClickHandler = (letter) => {
    setClickedLetters((prev) => [...new Set([...prev, letter])]);
  };

  useEffect(() => {
    const trimmedLetters = letters.slice(0, clickedLetters.length);
    const tile = document.querySelector(`[data-letter=${clickedLetters[clickedLetters.length - 1]}]`);

    if (trimmedLetters[trimmedLetters.length - 1] === clickedLetters[clickedLetters.length - 1]) {
      if (tile) {
        // tile.classList.add('correct');
        // tile.innerHTML = '👍✨';
        // console.log(tile);
      }
      setMatchedLetters(trimmedLetters);
    } else {
      tile.classList.add('shaking');
      setTimeout(() => {
        tile.classList.remove('shaking');
      }, 500);
      setClickedLetters((prev) => [...prev.slice(0, prev.length - 1)]);
    }
  }, [clickedLetters]);

  const data = useMemo(
    () => ({
      tileClickHandler,
      matchedLetters
    }),
    [matchedLetters]
  );

  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
}

export function useGameContext() {
  return useContext(GameContext);
}
