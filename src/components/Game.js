import { useGameContext } from '../contexts/GameContext';

const Game = ({ isGameOn }) => {
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
  const { matchedLetters } = useGameContext();

  if (!isGameOn) return null;

  return (
    <div className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      {letters.map((letter, index) => (
        <span
          key={letter}
          className={`md:text-xl tracking-[.2rem] md:tracking-[.4rem] 
        ${letter === matchedLetters[index] ? 'text-black' : 'text-gray-400'}`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Game;
