import React from 'react';

const Modal = ({ children, setShowAbout, setShowDonate }) => (
  <div className="fixed z-50 flex items-center justify-center w-full h-full p-4 py-16 bg-beige/40">
    <div className="w-full h-full max-w-5xl bg-white rounded-md min-h-[30rem] md:w-3/4 md:h-4/5 drop-shadow-lg p-6 pr-0">
      <button
        onClick={() => {
          if (setShowAbout) setShowAbout(false);
          if (setShowDonate) setShowDonate(false);
        }}
        aria-label="close button"
        type="button"
        className="absolute z-20 rounded-full top-4 right-4"
      >
        <svg
          className="stroke-black hover:stroke-white fill-white hover:fill-[black]"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <g transform="translate(0.053 0.003)">
            <g transform="translate(-0.053 -0.003)" fill="fill-current" stroke="black" strokeWidth="1">
              <circle cx="15" cy="15" r="15" stroke="none" />
              <circle cx="15" cy="15" r="14.5" fill="none" />
            </g>
            <g transform="translate(8.569 8.779)">
              <line x1="12.756" y1="12.437" fill="none" stroke="stroke-current" strokeWidth="1" />
              <line y1="12.437" x2="12.756" fill="none" stroke="stroke-current" strokeWidth="1" />
            </g>
          </g>
        </svg>
      </button>
      <div className="flex justify-center w-full h-full overflow-auto lg:items-center">{children}</div>
    </div>
  </div>
);

export default Modal;
