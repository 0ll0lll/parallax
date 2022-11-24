import React from 'react';
import '../styles/map.css';

const map = () => {
  const MapImage = require('../images/map.jpg');

  return (
    <div className="relative z-10 h-full overflow-hidden">
      <div id="map" />
    </div>
  );
};

export default map;
