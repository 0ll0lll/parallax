/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import icons from '../data/icons';
import meta from '../data/meta.json';

const Dropdown = ({ setShowAbout, setShowDonate, setIsGameOn }) => {
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
              className="mt-1 cursor-pointer"
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

          <ul
            className={`${showMenu ? '' : 'hidden'} ${
              isMobile ? 'mt-5' : 'mt-3'
            } min-w-[14rem] absolute right-0 z-50 float-left py-2 m-0 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu bg-clip-padding`}
            aria-labelledby="dropdownMenuButton1d"
          >
            {/* <li>
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
            <hr className="h-0 my-2 border border-t-0 border-solid opacity-25 border-black/30" /> */}
            <li>
              <button
                onClick={() => setShowAbout(true)}
                type="button"
                className="inline-block w-full px-4 py-2 text-sm font-normal text-left text-black bg-transparent dropdown-item whitespace-nowrap hover:bg-gray/50"
              >
                About
              </button>
            </li>
            <hr className="h-0 my-2 border border-t-0 border-solid opacity-25 border-black/30" />
            <li>
              <button
                onClick={() => setShowDonate(true)}
                type="button"
                className="inline-block w-full px-4 py-2 text-sm font-normal text-left text-black bg-transparent dropdown-item whitespace-nowrap hover:bg-gray/50"
              >
                Donate
              </button>
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
            {/* <hr className="h-0 my-2 border border-t-0 border-solid opacity-25 border-black/30" /> */}
            {/* <li>
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
            </li> */}
            <hr className="h-0 my-2 border border-t-0 border-solid opacity-25 border-black/30" />
            <li>
              <span className="block w-full px-4 pt-2 pb-1 text-sm font-normal text-black bg-transparent dropdown-item whitespace-nowrap">
                Share
              </span>
              <a
                className="flex items-center w-full gap-3 px-6 py-2 text-sm font-normal text-black bg-transparent dropdown-item whitespace-nowrap hover:bg-gray/50"
                data-href="https://www.facebook.com/sharer/sharer.php?u="
                onClick={(e) => {
                  window.open(e.currentTarget.href, '', 'menubar=no, toolbar=no, resizable=yes, height=255, width=600');
                  return false;
                }}
                target="_blank"
                href={`https://www.facebook.com/sharer/sharer.php?u=http://general.dev.steinias.com/pages/letters/&amp;quote=${meta.description}`}
                rel="noreferrer"
              >
                {icons.facebook} Facebook
              </a>
              <a
                className="flex items-center w-full gap-3 px-6 py-2 text-sm font-normal text-black bg-transparent dropdown-item whitespace-nowrap hover:bg-gray/50"
                data-href="https://www.linkedin.com/sharing/share-offsite/?url="
                onClick={(e) => {
                  window.open(e.currentTarget.href, '', 'menubar=no, toolbar=no, resizable=yes, height=255, width=600');
                  return false;
                }}
                target="_blank"
                href="https://www.linkedin.com/sharing/share-offsite/?url=http://general.dev.steinias.com/pages/letters/"
                rel="noreferrer"
              >
                {icons.linkedin} Linked In
              </a>
              <a
                className="flex items-center w-full gap-3 px-6 py-2 text-sm font-normal text-black bg-transparent dropdown-item whitespace-nowrap hover:bg-gray/50"
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${meta.description}%20-%20http://general.dev.steinias.com/pages/letters/`}
                onClick={(e) => {
                  window.open(e.currentTarget.href, '', 'menubar=no, toolbar=no, resizable=yes, height=255, width=600');
                  return false;
                }}
                rel="noreferrer"
              >
                {icons.twitter} Twitter
              </a>
              <a
                className="flex items-center w-full gap-3 px-6 py-2 text-sm font-normal text-black bg-transparent dropdown-item whitespace-nowrap hover:bg-gray/50"
                href={`mailto:?subject=${meta.title}&body=${meta.description}`}
              >
                {icons.email} E-mail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
