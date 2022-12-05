import React, { useEffect, useState } from 'react';

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
      className={`relative flex w-full h-full bg-white rounded-[26px] overflow-hidden transition-opacity
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
      <div className={`flex items-center justify-center  uppercase text-9xl ${isMobile ? 'w-full' : 'w-1/2'}`}>
        {letter}
      </div>
      <div className={`flex items-center pr-16 ${isMobile ? 'w-full' : 'w-1/2'}`}>
        <p className="py-10 pl-16 border-l border-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptatem autem tempore libero eum
          cupiditate recusandae praesentium nisi sapiente dolores soluta quo, suscipit ea saepe aspernatur modi. Labore,
          eos cupiditate.
        </p>
      </div>
    </div>
  );
};

export default TileCard;
