import React from 'react';
import Game from './Game';
import Dropdown from './Dropdown';

const Header = ({ setIsGameOn, isGameOn }) => (
  <header className="relative z-10 flex items-center justify-between h-12 px-5 bg-white drop-shadow-sm">
    <span className="inline-block text-2xl">🎄</span>

    <Game isGameOn={isGameOn} />

    <Dropdown setIsGameOn={setIsGameOn} />
  </header>
);

export default Header;
