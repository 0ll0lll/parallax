import React from 'react';
import { Link } from 'react-router-dom';
import santa from '../assets/santa.png';
import pdfImage from '../assets/pdf.png';
import donateLogoLeft from '../assets/donate-logo-left.svg';
import donateLogoRight from '../assets/donate-logo-right.svg';
import aboutImage from '../assets/jack-in-the-box.png';

const Home = () => (
  <div className="pt-12">
    <section className="flex flex-col items-center justify-center px-6 py-10 text-center md:py-20">
      <img className="object-contain h-40 md:h-60" src={santa} alt="santa" />
      <h1 className="mt-6 mb-4 text-2xl font-bold md:text-4xl">Letters from Santa</h1>
      <p className="self-center max-w-3xl text-xs md:leading-6 md:text-base">
        I haven’t received as many letters this holiday! Children’s education has suffered these past few years. So, I’m
        sending you letters in the hope that we can all understand literacy a little better and do our bit to give the
        gift of literacy to others. Take a look at my letters and consider making a donation to National Literacy Trust
        and The Reading Team.
      </p>
      <div className="flex items-center justify-between gap-10 mt-10">
        <img src={donateLogoLeft} alt="national literacy trust logo" />
        <div className="w-[1px] h-12 bg-black" />
        <img src={donateLogoRight} alt="the reading team literacy for life logo" />
      </div>

      <Link to="/experience">
        <button type="button" className="px-8 py-2 mt-10 text-white rounded-full bg-blue hover:bg-blue/90">
          Start the experience
        </button>
      </Link>
    </section>

    <section className="flex text-center flex-col items-center justify-center px-6 py-16 md:py-20 bg-[#FFEDD8]">
      <img className="h-32 mb-10" src={pdfImage} alt="pdf" />
      <p>
        Want to have the letters and all their literacy facts on hand? <br /> Download them all here.
      </p>
      <a href="#" target="_blank" className="px-8 py-2 mt-10 text-white rounded-full bg-blue hover:bg-blue/90">
        Download
      </a>
    </section>

    <section id="donate">
      <h3 className="mt-16 text-3xl font-bold text-center">Donate to our charities</h3>
      <div className="items-start justify-between gap-24 px-6 py-16 mx-auto md:flex md:px-16 md:py-20 lg:w-3/4">
        <div className="max-w-xl md:w-1/2">
          <h3 className="text-2xl font-bold">National Literacy Trust (UK)</h3>
          <p className="mt-6">
            The National Literacy trust are an independent UK charity dedicated to giving disadvantaged children the
            literacy skills they need to succeed. They are dedicated to raising literacy levels across the UK. They work
            to improve the reading, writing, speaking and listening skills in the UK’s most disadvantaged communities,
            where one in three people have low levels of literacy.
          </p>
          <a
            href="https://www.steinias.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-5 py-2 mt-10 text-sm text-black rounded-full bg-green hover:bg-green/90"
          >
            Donate
          </a>
        </div>
        <div className="max-w-xl mt-16 md:w-1/2 md:mt-0">
          <h3 className="text-2xl font-bold">The Reading Team (US)</h3>
          <p className="mt-6">
            The Reading Team is a Harlem-based nonprofit organization that is dedicated to enabling young children who
            are at high risk of reading failure to become strong and enthusiastic readers, writers, listeners, and
            speakers and to develop the skills, habits, and behaviors that will support their success in school and in
            life.
          </p>
          <a
            href="https://www.steinias.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-5 py-2 mt-10 text-sm text-black rounded-full bg-green hover:bg-green/90"
          >
            Donate
          </a>
        </div>
      </div>
    </section>

    <section id="about" className="bg-[#FFEDD8]">
      <div className="items-center justify-between gap-24 px-6 py-16 mx-auto md:flex md:px-16 md:py-20 lg:w-3/4">
        <div className="max-w-xl md:w-1/2">
          <h3 className="text-2xl font-bold">This Experience is Brought to You by Stein IAS</h3>
          <p className="mt-6">
            The B2B Originals, Stein IAS is the first and leading brand-to-demand agency for B2B enterprises worldwide.
            We fuse data, intelligence and technology with Big Long Ideas and experiences to drive brand progression and
            revenue growth. Among the most-awarded agencies in B2B, Stein IAS has been named ANA B2B Agency of the Year
            9 out of the past 12 years and won the prestigious WARC Award for Effectiveness (gold) the past two years.
          </p>
          <a
            href="https://www.steinias.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-5 py-2 mt-10 text-sm text-black rounded-full bg-green hover:bg-green/90"
          >
            Visit Stein IAS
          </a>
        </div>
        <div className="max-w-xl mt-16 md:w-1/2 md:mt-0">
          <img className="object-contain mx-auto w-44 md:w-60" src={aboutImage} alt="jack in the box" />
        </div>
      </div>
    </section>

    <footer className="flex items-center justify-center h-12 text-xs text-center text-black/50">
      <span>© 2022 Stein IAS. All rights reserved.</span>
    </footer>
  </div>
);

export default Home;
