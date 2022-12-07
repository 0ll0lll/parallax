import { useState, useEffect } from 'react';
import { GameWrapper } from './contexts/GameContext';
import Intro from './components/Intro';
import Map from './components/Map';
import Header from './components/Header';
import Santa from './components/Santa';

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <GameWrapper>
      <div>
        {showIntro && <Intro />}
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
