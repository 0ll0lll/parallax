import { useState } from 'react';
import { GameWrapper } from './contexts/GameContext';
import Game from './components/Game';
import Map from './components/Map';
import Header from './components/Header';
import Santa from './components/Santa';

function App() {
  const [isGameOn, setIsGameOn] = useState(false);

  return (
    <GameWrapper>
      <div>
        <Header isGameOn={isGameOn} setIsGameOn={setIsGameOn} />
        <main style={{ height: 'calc(100vh - 3rem)' }} className="bg-beige">
          <Map isGameOn={isGameOn} />
          <Santa isGameOn={isGameOn} />
        </main>
      </div>
    </GameWrapper>
  );
}

export default App;
