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
    <div>
      {letters.map((letter, index) => (
        <span
          key={letter}
          className={`text-xs md:text-xl tracking-[.1rem] md:tracking-[.4rem] uppercase
        ${letter === matchedLetters[index] ? 'text-blue' : 'text-black/50'}`}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Game;
