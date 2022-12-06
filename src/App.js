import { useState } from 'react';
import { GameWrapper } from './contexts/GameContext';
import Game from './components/Game';
import Map from './components/Map';
import Header from './components/Header';

function App() {
  const [isGameOn, setIsGameOn] = useState(false);

  return (
    <GameWrapper>
      <div>
        <Header setIsGameOn={setIsGameOn} />
        <main style={{ height: 'calc(100vh - 3rem)' }} className="bg-beige">
          <Map isGameOn={isGameOn} />
          <Game isGameOn={isGameOn} />
          {!isGameOn && (
            <h1 className="fixed text-4xl font-bold -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">Alphabet</h1>
          )}
        </main>
      </div>
    </GameWrapper>
  );
}

export default App;
