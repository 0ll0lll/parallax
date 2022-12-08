/* eslint-disable react/no-unstable-nested-components */
import React, { useRef, useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import letters from '../data/letters.json';

const LetterCarousel = ({ children, initialLetter, showDots }) => {
  const sliderRef = useRef();

  const ArrowLeft = () => (
    <svg
      onClick={() => sliderRef.current.slickPrev()}
      className="inline-block cursor-pointer stroke-[#00082b] fill-white hover:stroke-white hover:fill-[#00082b]"
      width="30"
      height="30"
      viewBox="0 0 40 40"
    >
      <g transform="translate(39.596 39.765) rotate(180)">
        <g transform="translate(-0.404 -0.235)">
          <g fill="fill-current" stroke="#00082b" strokeWidth="1">
            <circle cx="20" cy="20" r="20" stroke="none" />
            <circle cx="20" cy="20" r="19.5" fill="none" />
          </g>
        </g>
        <path
          d="M0,0,10.554,10.554,0,21.109"
          transform="translate(16.121 9.699)"
          fill="none"
          stroke="stroke-current"
          strokeWidth="1"
        />
      </g>
    </svg>
  );

  const ArrowRight = () => (
    <svg
      onClick={() => sliderRef.current.slickNext()}
      className="inline-block cursor-pointer stroke-[#00082b] fill-white hover:stroke-white hover:fill-[#00082b] ml-4"
      width="30"
      height="30"
      viewBox="0 0 40 40"
    >
      <g transform="translate(0.457 -0.247)">
        <g transform="translate(-0.457 0.247)">
          <g fill="fill-current" stroke="#00082b" strokeWidth="1">
            <circle cx="20" cy="20" r="20" stroke="none" />
            <circle cx="20" cy="20" r="19.5" fill="none" />
          </g>
        </g>
        <path
          d="M4474.146,1621.241,4484.7,1631.8l-10.554,10.554"
          transform="translate(-4458.037 -1611.547)"
          fill="none"
          stroke="stroke-current"
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
      return (
        <div className="flex items-center justify-center w-8 h-8 font-semibold uppercase bg-gray-400 rounded-full custom-dots bg-gray">
          {Object.keys(letters)[i]}
        </div>
      );
    },
    appendDots: (dots) => {
      const activeIndex = +dots.filter((dot) => dot.props.className === 'slick-active')[0].key;
      const trimmedDots = [dots[activeIndex - 1], dots[activeIndex], dots[activeIndex + 1]];

      return (
        <div
          style={{
            position: 'initial',
            height: '2rem',
            marginTop: '-1rem'
          }}
        >
          <ul className="flex justify-center h-8 gap-3 bottom-10">{trimmedDots}</ul>
        </div>
      );
    }
  };

  return (
    <div className="relative w-full h-full white">
      {!showDots && (
        <div className="absolute z-10 bottom-6 right-10">
          <ArrowLeft />
          <ArrowRight />
        </div>
      )}

      <Slider ref={sliderRef} className="relative w-full h-full" {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default LetterCarousel;
