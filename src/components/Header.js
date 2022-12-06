/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Header = ({ setIsGameOn }) => (
  <header className="relative flex items-center justify-between h-12 bg-white drop-shadow-sm">
    <span className="absolute inset-y-0 h-6 px-4 my-auto ml-10 text-xs leading-6 rounded-md bg-black/10 text-slate-500">
      ◑﹏◐
    </span>
    <label className="relative inline-flex items-center ml-auto mr-5 cursor-pointer">
      <input onChange={(e) => setIsGameOn(e.target.checked)} type="checkbox" value="" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600" />
      <span className="ml-3 text-sm font-medium text-gray-900">Game</span>
    </label>
  </header>
);

export default Header;
