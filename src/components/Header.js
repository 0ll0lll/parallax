/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Game from './Game';

const Header = ({ setIsGameOn, isGameOn }) => (
  <header className="flex items-center justify-between h-12 px-5 bg-white drop-shadow-sm">
    <span className="inline-block text-2xl">🎄</span>

    <Game isGameOn={isGameOn} />

    <label className="relative inline-flex items-center cursor-pointer">
      <input onChange={(e) => setIsGameOn(e.target.checked)} type="checkbox" value="" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray/90 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600" />
      {/* <span className="ml-3 text-sm font-medium text-black">Game</span> */}
    </label>
  </header>
);

export default Header;
