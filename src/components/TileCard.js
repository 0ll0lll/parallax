/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';

import LetterCarousel from './LetterCarousel';
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
    // <div
    //   className={`drop-shadow-md relative flex w-full h-full bg-white rounded-[10px] overflow-hidden transition-opacity
    //   ${isReady ? 'opacity-100' : 'opacity-0'}
    //   ${isMobile ? 'flex-col justify-center h-full' : ''}
    //   `}
    // >
    //   <button
    //     onClick={closeBtnClickHandler}
    //     aria-label="close button"
    //     type="button"
    //     className="absolute z-20 w-5 h-5 bg-red-500 rounded-full top-4 right-4"
    //   />
    //   <div className={`flex items-center justify-center ${isMobile ? 'w-full' : 'pl-10 w-1/2'}`}>
    //     <img src={require(`../assets/letters/${letter}.jpg`)} alt={`letter ${letter}`} />
    //   </div>
    //   <div className={`flex items-center pr-16 ${isMobile ? 'w-full' : 'w-1/2'}`}>
    // <div className="py-10 pl-16">
    //   <h1 className="mb-6 text-4xl font-bold">
    //     <span className="uppercase">{letter}</span> is for {letters[letter]}
    //   </h1>
    //   <p>
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptatem autem tempore libero eum
    //     cupiditate recusandae praesentium nisi sapiente dolores soluta quo,
    //   </p>
    // </div>
    //   </div>
    // </div>

    <div
      className={`drop-shadow-md relative flex w-full h-full bg-white rounded-[10px] overflow-hidden transition-opacity ${
        isReady ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        onClick={closeBtnClickHandler}
        aria-label="close button"
        type="button"
        className="absolute z-20 w-5 h-5 bg-red-500 rounded-full top-4 right-4"
      />
      <LetterCarousel initialLetter={Object.keys(letters).indexOf(letter)} showDots={isMobile}>
        {Object.keys(letters).map((tempLetter, index) => (
          <div key={tempLetter} className="h-full">
            <div className="flex items-center h-full">
              <div className="w-1/2 pl-10">
                <img src={require(`../assets/letters/${tempLetter}.jpg`)} alt={`letter ${tempLetter}`} />
              </div>

              <div className="w-1/2">
                <div className="px-16 py-10">
                  <span className="text-xs">{index + 1}/26</span>
                  <h1 className="my-6 text-4xl font-bold">
                    <span className="uppercase">{tempLetter}</span> is for {letters[tempLetter].details}
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptatem autem tempore libero eum
                    cupiditate recusandae praesentium nisi sapiente dolores soluta quo,
                  </p>
                  <a
                    target="_blank"
                    href={letters[tempLetter].url ? letters[tempLetter].url : null}
                    className="px-6 py-1 mt-6 border-[1px] bg-white border-black inline-block rounded-full hover:bg-black hover:text-white"
                    rel="noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </LetterCarousel>
    </div>
  );
};

export default TileCard;
