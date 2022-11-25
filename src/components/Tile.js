import React from 'react';
import '../styles/tile.css';
import ids from '../data/ids.json';

const Tile = ({ letter, index }) => (
  <div id={ids[index]} className="flex items-center justify-center tile">
    <p className="text-3xl font-bold uppercase">{letter}</p>
  </div>
);

export default Tile;
