import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { GameWrapper } from './contexts/GameContext';
import Header from './components/Header';
import Donate from './components/Donate';
import Home from './pages/Home';
import Experience from './pages/Experience';

function App() {
  const [isGameOn, setIsGameOn] = useState(false);

  const [showDonate, setShowDonate] = useState(false);
  // const [showAbout, setShowAbout] = useState(false);
  const [disableHeader, setDisableHeader] = useState(false);

  return (
    <GameWrapper>
      <BrowserRouter>
        <div className="bg-beige">
          <Header
            disableHeader={disableHeader || showDonate}
            setShowDonate={setShowDonate}
            // setShowAbout={setShowAbout}
            isGameOn={isGameOn}
            setIsGameOn={setIsGameOn}
          />
          {/* {showDonate && <Donate setShowDonate={setShowDonate} />} */}
          {/* {showAbout && <About setShowAbout={setShowAbout} />} */}
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/experience"
              element={
                <Experience
                  setDisableHeader={setDisableHeader}
                  isGameOn={isGameOn}
                  showDonate={showDonate}
                  setShowDonate={setShowDonate}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </GameWrapper>
  );
}

export default App;
