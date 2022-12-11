import { useState, useEffect } from 'react';
import { GameWrapper } from './contexts/GameContext';
import Intro from './components/Intro';
import Map from './components/Map';
import Header from './components/Header';
import Santa from './components/Santa';
import About from './components/About';
import Donate from './components/Donate';

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const [showDonate, setShowDonate] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [disableHeader, setDisableHeader] = useState(false);

  console.log(disableHeader);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <GameWrapper>
      <div className="bg-beige">
        {showIntro && <Intro />}

        {showDonate && <Donate setShowDonate={setShowDonate} />}
        {showAbout && <About setShowAbout={setShowAbout} />}

        <Header
          disableHeader={disableHeader}
          setShowDonate={setShowDonate}
          setShowAbout={setShowAbout}
          isGameOn={isGameOn}
          setIsGameOn={setIsGameOn}
        />
        <main style={{ height: 'calc(100vh - 3rem)' }}>
          <Map setDisableHeader={setDisableHeader} isGameOn={isGameOn} />
          <Santa isGameOn={isGameOn} />
        </main>
      </div>
    </GameWrapper>
  );
}

export default App;
