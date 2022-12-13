import React from 'react';
import Donate from '../components/Donate';
import Map from '../components/Map';
import Santa from '../components/Santa';

const Experience = ({ setDisableHeader, isGameOn, showDonate, setShowDonate }) => (
  <>
    {showDonate && <Donate setShowDonate={setShowDonate} />}
    <main style={{ height: 'calc(100vh - 3rem)' }}>
      <Map setDisableHeader={setDisableHeader} isGameOn={isGameOn} />
      <Santa isGameOn={isGameOn} />
    </main>
  </>
);

export default Experience;
