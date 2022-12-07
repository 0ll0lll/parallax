import React from 'react';
import santa from '../assets/santa.png';
import '../styles/santa.css';

const Santa = ({ isGameOn }) => (
  <div className="fixed flex flex-col justify-center w-4/5 text-center -translate-x-1/2 -translate-y-1/2 md:w-auto md:max-w-lg top-1/2 left-1/2">
    <div className="absolute flex items-center justify-start w-32 h-16 px-3 py-2 text-xs text-left md:text-sm md:w-40 md:h-20 left-16 speech-bubble drop-shadow-sm">
      {isGameOn && <p>Find all letters, A to Z 🔎 Good luck 👍 </p>}
      {!isGameOn && <p>Ho ho ho 🎄 Lorem ipsum dolor sit ☃️</p>}
    </div>
    <img className="object-contain h-40 md:h-60" src={santa} alt="santa" />
    <h1 className="mt-6 mb-4 text-2xl font-bold md:text-4xl">Letters from Santa</h1>
    <p className="text-xs md:font-semibold md:leading-6 md:text-sm">
      I haven’t received as many letters this Holiday. Children’s education has suffered these past few years. So I am
      sending you letters in the hope that we can all understand literacy a little better and do our bit to give the
      gift of literacy to others.{' '}
    </p>
  </div>
);

export default Santa;
