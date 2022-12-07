/* eslint-disable react/no-unstable-nested-components */
import React, { useRef, useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LetterCarousel = ({ children, initialLetter, showDots }) => {
  const sliderRef = useRef();

  const ArrowLeft = () => (
    <svg
      onClick={() => sliderRef.current.slickPrev()}
      className="inline-block cursor-pointer"
      width="30"
      height="30"
      viewBox="0 0 40 40"
    >
      <g transform="translate(39.596 39.765) rotate(180)">
        <g transform="translate(-0.404 -0.235)">
          <g fill="none" stroke="#00082b" strokeWidth="1">
            <circle cx="20" cy="20" r="20" stroke="none" />
            <circle cx="20" cy="20" r="19.5" fill="none" />
          </g>
        </g>
        <path
          d="M0,0,10.554,10.554,0,21.109"
          transform="translate(16.121 9.699)"
          fill="none"
          stroke="#00082b"
          strokeWidth="1"
        />
      </g>
    </svg>
  );

  const ArrowRight = () => (
    <svg
      onClick={() => sliderRef.current.slickNext()}
      className="inline-block ml-4 cursor-pointer"
      width="30"
      height="30"
      viewBox="0 0 40 40"
    >
      <g transform="translate(0.457 -0.247)">
        <g transform="translate(-0.457 0.247)">
          <g fill="none" stroke="#00082b" strokeWidth="1">
            <circle cx="20" cy="20" r="20" stroke="none" />
            <circle cx="20" cy="20" r="19.5" fill="none" />
          </g>
        </g>
        <path
          d="M4474.146,1621.241,4484.7,1631.8l-10.554,10.554"
          transform="translate(-4458.037 -1611.547)"
          fill="none"
          stroke="#00082b"
          strokeWidth="1"
        />
      </g>
    </svg>
  );

  useEffect(() => {
    sliderRef.current.slickGoTo(initialLetter, false);
  }, []);

  const settings = {
    dots: showDots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging(i) {
      return <div className="w-8 h-8 border-2 border-white rounded-full custom-dots">{i}</div>;
    },
    appendDots: (dots) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          bottom: '20px',
          gap: '3rem'
        }}
      >
        <ul className="">{dots}</ul>
      </div>
    )
  };

  return (
    <div className="relative w-full h-full white">
      <div className="absolute z-10 bottom-6 right-10">
        <ArrowLeft />
        <ArrowRight />
      </div>

      <Slider ref={sliderRef} className="relative w-full h-full" {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default LetterCarousel;
