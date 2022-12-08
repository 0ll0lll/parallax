/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';

const Dropdown = ({ setIsGameOn }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="flex justify-center">
      <div>
        <div className="relative dropdown">
          {isMobile && (
            <svg
              className="mt-1"
              onClick={() => setShowMenu((prev) => !prev)}
              width="20"
              height="13"
              viewBox="0 0 15 15"
            >
              <g transform="translate(-305 -17)">
                <rect width="20" height="2" transform="translate(305 17)" fill="#00082b" />
                <rect width="20" height="2" transform="translate(305 23)" fill="#00082b" />
                <rect width="20" height="2" transform="translate(305 29)" fill="#00082b" />
              </g>
            </svg>
          )}

          {!isMobile && (
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="flex items-center px-6 py-2 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded shadow-md dropdown-toggle bg-teal-dark/90 hover:bg-teal-dark hover:shadow-lg focus:bg-blue/hover:bg-bg-teal-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-dark active:shadow-lg active:text-white whitespace-nowrap"
              type="button"
              id="dropdownMenuButton1d"
              data-bs-toggle="dropdown"
              aria-expanded={showMenu}
            >
              More
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className={`w-2 ml-2 transition-all ${showMenu ? 'rotate-180' : ''}`}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                />
              </svg>
            </button>
          )}
          <ul
            className={`${showMenu ? '' : 'hidden'} ${
              isMobile ? 'mt-5' : 'mt-3'
            } absolute right-0 z-50 float-left py-2 m-0  text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding`}
            aria-labelledby="dropdownMenuButton1d"
          >
            <li>
              <div className="px-4 pt-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    onChange={(e) => setIsGameOn(e.target.checked)}
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray/90 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-dark/90" />
                  <span className="ml-3 text-sm text-black">Game</span>
                </label>
              </div>
            </li>
            <hr className="h-0 my-2 border border-t-0 border-solid opacity-25 border-black/30" />
            <li>
              <a
                className="block w-full px-4 py-2 text-sm font-normal text-black bg-transparent dropdown-item whitespace-nowrap hover:bg-gray/50"
                href="#"
              >
                Download PDF
              </a>
            </li>
            <hr className="h-0 my-2 border border-t-0 border-solid opacity-25 border-black/30" />
            <li>
              <span className="block w-full px-4 pt-2 pb-1 text-sm font-normal text-black bg-transparent dropdown-item whitespace-nowrap">
                Donate ✨
              </span>
              <a
                className="block w-full py-2 pl-6 pr-4 text-sm font-normal text-black bg-transparent dropdown-item whitespace-nowrap hover:bg-gray/50"
                href="#"
              >
                National Literacy Trust (UK)
              </a>
              <a
                className="block w-full py-2 pl-6 pr-4 text-sm font-normal text-black bg-transparent dropdown-item whitespace-nowrap hover:bg-gray/50"
                href="#"
              >
                Reading Team (US)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
