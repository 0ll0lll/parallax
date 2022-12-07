/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import letters from '../data/letters.json';

const TileCard = ({ isMobile, setActiveLetter, id, letter }) => {
  const [isReady, setIsReady] = useState(false);

  const closeBtnClickHandler = (e) => {
    e.stopPropagation();
    setActiveLetter(null);

    const tile = document.querySelector(`[data-letter=${letter}]`);
    tile.setAttribute('id', id);
    tile.classList.remove('active');
    tile.classList.add('inactive');
  };

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setIsReady(true);
      },
      isMobile ? 0 : 300
    );

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`drop-shadow-md relative flex w-full h-full bg-white rounded-[10px] overflow-hidden transition-opacity
      ${isReady ? 'opacity-100' : 'opacity-0'}
      ${isMobile ? 'flex-col justify-center h-full' : ''}
      `}
    >
      <button
        onClick={closeBtnClickHandler}
        aria-label="close button"
        type="button"
        className="absolute z-20 w-5 h-5 bg-red-500 rounded-full top-4 right-4"
      />
      <div className={`flex items-center justify-center ${isMobile ? 'w-full' : 'pl-10 w-1/2'}`}>
        <img src={require(`../assets/letters/${letter}.jpg`)} alt={`letter ${letter}`} />
      </div>
      <div className={`flex items-center pr-16 ${isMobile ? 'w-full' : 'w-1/2'}`}>
        <div className="py-10 pl-16">
          <h1 className="mb-6 text-4xl font-bold">
            <span className="uppercase">{letter}</span> is for {letters[letter]}
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptatem autem tempore libero eum
            cupiditate recusandae praesentium nisi sapiente dolores soluta quo,
          </p>
        </div>
      </div>
    </div>
  );
};

export default TileCard;
