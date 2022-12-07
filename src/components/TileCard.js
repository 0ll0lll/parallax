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
    <div
      className={`drop-shadow-md relative flex w-full h-full bg-white rounded-[10px] overflow-hidden transition-opacity ${
        isReady ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        onClick={closeBtnClickHandler}
        aria-label="close button"
        type="button"
        className="absolute z-20 rounded-full top-4 right-4"
      >
        <svg width="30" height="30" viewBox="0 0 30 30">
          <g transform="translate(0.053 0.003)">
            <g transform="translate(-0.053 -0.003)" fill="none" stroke="#00082b" strokeWidth="1">
              <circle cx="15" cy="15" r="15" stroke="none" />
              <circle cx="15" cy="15" r="14.5" fill="none" />
            </g>
            <g transform="translate(8.569 8.779)">
              <line x1="12.756" y1="12.437" fill="none" stroke="#00082b" strokeWidth="1" />
              <line y1="12.437" x2="12.756" fill="none" stroke="#00082b" strokeWidth="1" />
            </g>
          </g>
        </svg>
      </button>
      <LetterCarousel initialLetter={Object.keys(letters).indexOf(letter)} showDots={isMobile}>
        {Object.keys(letters).map((tempLetter, index) => (
          <div key={tempLetter} className="h-full overflow-auto md:overflow-hidden">
            <div className={`items-center h-full ${isMobile ? 'px-4' : 'flex'}`}>
              {isMobile && <span className="inline-block mt-4">{index + 1}/26</span>}

              <div className={`${isMobile ? 'mt-4' : 'w-1/2 pl-10'}`}>
                <img src={require(`../assets/letters/${tempLetter}.jpg`)} alt={`letter ${tempLetter}`} />
              </div>

              <div className={`${isMobile ? '' : 'w-1/2'}`}>
                <div className={`${isMobile ? 'text-sm' : 'px-16 py-10'}`}>
                  {!isMobile && <span className="text-sm">{index + 1}/26</span>}

                  <h1 className={`font-bold ${isMobile ? 'text-xl mt-4 mb-2' : 'text-4xl my-6'}`}>
                    <span className="uppercase">{tempLetter}</span> is for {letters[tempLetter].details}
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptatem autem tempore libero eum
                    cupiditate recusandae praesentium nisi sapiente dolores soluta quo,
                  </p>
                  <a
                    target="_blank"
                    href={letters[tempLetter].url ? letters[tempLetter].url : null}
                    className="px-6 py-1 mt-6 mb-12 border-[1px] bg-white border-black inline-block rounded-full hover:bg-black hover:text-white"
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
