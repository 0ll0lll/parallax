/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Game from './Game';
import icons from '../data/icons';
import Dropdown from './Dropdown';

const Header = ({ disableHeader, setShowDonate, setShowAbout, setIsGameOn, isGameOn }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <header className="relative z-10 flex items-center justify-between h-12 px-6 bg-white drop-shadow-sm">
      {disableHeader && <div className="absolute left-0 z-10 w-full h-full bg-beige/40" />}
      <a href="https://www.steinias.com/" target="_blank" rel="noreferrer">
        <svg width="73.089" height="24" viewBox="0 0 73.089 32">
          <defs>
            <clipPath id="a">
              <rect width="73.089" height="32" transform="translate(0 0)" fill="none" />
            </clipPath>
          </defs>
          <g transform="translate(-0.012 -0.004)">
            <g transform="translate(0.012 0.004)" clipPath="url(#a)">
              <path
                d="M5.362,15.179a7.794,7.794,0,0,1-2.217-.294,6.608,6.608,0,0,1-1.685-.732,4.208,4.208,0,0,1-1.075-.94,1.539,1.539,0,0,1-.384-.9.7.7,0,0,1,.136-.43,1.506,1.506,0,0,1,.3-.3,1.141,1.141,0,0,1,.3-.17c.091-.029.143-.037.159-.023A5.169,5.169,0,0,0,2.6,13.12a4.893,4.893,0,0,0,2.737.725,4.314,4.314,0,0,0,2.646-.713,2.357,2.357,0,0,0,.949-2,2.063,2.063,0,0,0-.324-1.2,2.724,2.724,0,0,0-.893-.8,5.909,5.909,0,0,0-1.289-.543q-.725-.215-1.515-.4-.837-.2-1.641-.463A5.009,5.009,0,0,1,1.83,7,3.57,3.57,0,0,1,.8,5.828,3.668,3.668,0,0,1,.4,4.034a3.483,3.483,0,0,1,.373-1.6A4.037,4.037,0,0,1,1.8,1.152,4.859,4.859,0,0,1,3.362.3,6.062,6.062,0,0,1,5.315,0,7.4,7.4,0,0,1,7.351.262,6.105,6.105,0,0,1,8.877.9a3.382,3.382,0,0,1,.95.825,1.39,1.39,0,0,1,.327.8.69.69,0,0,1-.136.43,1.387,1.387,0,0,1-.3.3,1.141,1.141,0,0,1-.3.17c-.091.03-.143.038-.157.023A4.239,4.239,0,0,0,7.713,1.942a4.535,4.535,0,0,0-2.375-.61,4,4,0,0,0-2.488.723A2.3,2.3,0,0,0,1.9,3.979a2.212,2.212,0,0,0,.275,1.155,2.135,2.135,0,0,0,.769.746,4.933,4.933,0,0,0,1.19.486q.689.192,1.525.4a17.672,17.672,0,0,1,1.741.5,6.1,6.1,0,0,1,1.538.769,3.461,3.461,0,0,1,1.516,3.031,3.859,3.859,0,0,1-.362,1.685,3.751,3.751,0,0,1-1.029,1.3,4.762,4.762,0,0,1-1.605.837,6.967,6.967,0,0,1-2.089.288"
                transform="translate(-0.002 -0.001)"
              />
              <path
                d="M91.282,3.527q-.7,0-.7-.633V2.78q0-.657.7-.656h10.724q.7,0,.7.656v.114c0,.423-.233.633-.7.634H97.414V16.151a.609.609,0,0,1-.679.7h-.2q-.657,0-.656-.7V3.527H91.282Z"
                transform="translate(-79.089 -1.855)"
              />
              <path
                d="M200.819,16.521a.827.827,0,0,1-.249-.61V2.993a.85.85,0,0,1,.839-.859h8.776q.7,0,.7.633V2.9q0,.634-.7.633H202.11V8.581h6.47q.7,0,.7.634v.091q0,.634-.7.634h-6.47v5.43h8.211q.7,0,.7.61v.136q0,.657-.7.656h-8.885a.835.835,0,0,1-.613-.249"
                transform="translate(-175.121 -1.864)"
              />
              <path
                d="M305.042,15.5V2.083q0-.7.656-.7h.2a.61.61,0,0,1,.68.529.653.653,0,0,1,0,.173V15.5a.612.612,0,0,1-.508.7.645.645,0,0,1-.171,0h-.2q-.657,0-.656-.7"
                transform="translate(-266.336 -1.202)"
              />
              <path
                d="M346.388,15.53V2.455a1.232,1.232,0,0,1,.214-.732.714.714,0,0,1,.622-.3h.384a.96.96,0,0,1,.667.216,3.7,3.7,0,0,1,.509.6l7.94,11.516V2.116q0-.7.633-.7h.2q.611,0,.61.7V15.191a1.292,1.292,0,0,1-.2.746.671.671,0,0,1-.588.294h-.113a.985.985,0,0,1-.6-.136,2.321,2.321,0,0,1-.4-.453L347.836,3.449V15.53q0,.7-.634.7H347q-.611,0-.61-.7"
                transform="translate(-302.435 -1.235)"
              />
              <path
                d="M346.413,148.056V134.64q0-.7.656-.7h.2a.611.611,0,0,1,.683.528.6.6,0,0,1,0,.173v13.415a.61.61,0,0,1-.506.7.561.561,0,0,1-.173,0h-.206c-.439,0-.657-.233-.657-.7"
                transform="translate(-302.456 -116.939)"
              />
              <path
                d="M383.771,143.567l-1.58,4.162a1.1,1.1,0,0,1-.4.555.905.905,0,0,1-.486.146,1.138,1.138,0,0,1-.622-.183c-.189-.122-.269-.213-.239-.275l5.36-13.844a.789.789,0,0,1,.367-.43,2.371,2.371,0,0,1,1.584,0,.79.79,0,0,1,.362.43l5.36,13.844c.029.061-.049.152-.237.275a1.169,1.169,0,0,1-.641.183,1.015,1.015,0,0,1-.52-.146,1.052,1.052,0,0,1-.407-.555l-1.584-4.162h-6.321Zm5.791-1.358-2.623-6.9-2.646,6.9h5.269Z"
                transform="translate(-332.168 -116.614)"
              />
              <path
                d="M499.031,147.721a7.83,7.83,0,0,1-2.216-.294,6.57,6.57,0,0,1-1.685-.732,4.2,4.2,0,0,1-1.075-.939,1.536,1.536,0,0,1-.384-.9.7.7,0,0,1,.136-.43,1.507,1.507,0,0,1,.3-.3,1.217,1.217,0,0,1,.3-.17c.091-.029.143-.038.159-.023a5.189,5.189,0,0,0,1.7,1.741,4.9,4.9,0,0,0,2.738.723,4.328,4.328,0,0,0,2.647-.713,2.357,2.357,0,0,0,.949-2,2.066,2.066,0,0,0-.327-1.2,2.724,2.724,0,0,0-.893-.8,5.93,5.93,0,0,0-1.289-.542q-.723-.215-1.516-.4-.837-.2-1.639-.463a5.008,5.008,0,0,1-1.438-.725,3.594,3.594,0,0,1-1.029-1.176,3.692,3.692,0,0,1-.4-1.8,3.485,3.485,0,0,1,.374-1.6,3.975,3.975,0,0,1,1.029-1.283,4.859,4.859,0,0,1,1.557-.848,6.031,6.031,0,0,1,1.945-.3,7.408,7.408,0,0,1,2.037.261,6.105,6.105,0,0,1,1.525.641,3.382,3.382,0,0,1,.95.825,1.39,1.39,0,0,1,.327.8.69.69,0,0,1-.136.43,1.444,1.444,0,0,1-.3.3,1.215,1.215,0,0,1-.3.17c-.091.03-.143.038-.159.023a4.232,4.232,0,0,0-1.538-1.515,4.546,4.546,0,0,0-2.375-.61,3.994,3.994,0,0,0-2.488.725,2.3,2.3,0,0,0-.95,1.924,2.212,2.212,0,0,0,.275,1.155,2.145,2.145,0,0,0,.769.746,4.934,4.934,0,0,0,1.19.486q.689.192,1.525.4a17.672,17.672,0,0,1,1.741.5,6.1,6.1,0,0,1,1.538.769,3.466,3.466,0,0,1,1.518,3.031,3.859,3.859,0,0,1-.362,1.685,3.735,3.735,0,0,1-1.029,1.3,4.762,4.762,0,0,1-1.605.837,6.955,6.955,0,0,1-2.086.293"
                transform="translate(-431.029 -115.722)"
              />
            </g>
          </g>
        </svg>
      </a>

      <Game isGameOn={isGameOn} />

      {!isMobile && (
        <div className="flex items-center gap-6">
          <button
            onClick={() => setShowAbout(true)}
            type="button"
            className="px-5 py-1 text-sm border-[1px] border-black rounded-full hover:bg-black hover:text-white"
          >
            About
          </button>

          <button
            type="button"
            className="flex items-center gap-2 px-5 py-1 text-current text-sm border-[1px] border-black rounded-full hover:bg-black hover:text-white"
          >
            <span>PDF</span>
            {icons.download}
          </button>

          <div
            className="relative dropdown"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <button
              className="flex items-center px-6 py-1 border-[1px] border-black hover:text-white text-sm text-black bg-white rounded-full dropdown-toggle hover:bg-black whitespace-nowrap"
              type="button"
              id="dropdownMenuButton1d"
              data-bs-toggle="dropdown"
              aria-expanded={showMenu}
            >
              <span className="mr-2">Share</span>
              {icons.share}
            </button>

            <div className={`absolute right-0 w-full h-full pt-3 ml-6 ${showMenu ? '' : 'hidden'}`}>
              <ul
                className="absolute right-0 z-50 flex float-left gap-4 px-4 py-3 m-0 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding"
                aria-labelledby="dropdownMenuButton1d"
              >
                <li>
                  <a className="block w-full text-sm font-normal text-black bg-transparent dropdown-item" href="#">
                    {icons.facebook}
                  </a>
                </li>
                <li>
                  <a className="block w-full text-sm font-normal text-black bg-transparent dropdown-item" href="#">
                    {icons.linkedin}
                  </a>
                </li>
                <li>
                  <a className="block w-full text-sm font-normal text-black bg-transparent dropdown-item" href="#">
                    {icons.twitter}
                  </a>
                </li>
                <li>
                  <a className="block w-full text-sm font-normal text-black bg-transparent dropdown-item" href="#">
                    {icons.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => setShowDonate(true)}
            type="button"
            className="px-5 py-1 text-sm text-white border-[1px] border-blue rounded-full bg-blue hover:bg-blue/90"
          >
            Donate ✨
          </button>

          {/* <label className="relative inline-flex items-center cursor-pointer">
            <input onChange={(e) => setIsGameOn(e.target.checked)} type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray/90 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green" />
            <span className="ml-3 text-sm text-black">Game</span>
          </label> */}
        </div>
      )}

      {isMobile && <Dropdown setShowDonate={setShowDonate} setShowAbout={setShowAbout} setIsGameOn={setIsGameOn} />}
    </header>
  );
};

export default Header;
