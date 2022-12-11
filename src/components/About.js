import React from 'react';
import Modal from './Modal';

const About = ({ setShowAbout }) => (
  <Modal setShowAbout={setShowAbout}>
    <div className="self-center w-full pr-6 overflow-auto md:w-3/4">
      <h1 className="text-4xl font-bold">About Stein IAS</h1>
      <p className="mt-6">
        The National Literacy trust are an independent UK charity dedicated to giving disadvantaged children the
        literacy skills they need to succeed. The B2B Originals, Stein IAS is the first and leading brand-to-demand
        agency for B2B enterprises worldwide. We fuse data, intelligence and technology with Big Long Ideas and
        experiences to drive brand progression and revenue growth. Among the most-awarded agencies in B2B, Stein IAS has
        been named ANA B2B Agency of the Year 9 out of the past 12 years and won the prestigious WARC Award for
        Effectiveness (gold) the past two years.of literacy.{' '}
      </p>
      <a
        href="https://www.steinias.com/"
        target="_blank"
        rel="noreferrer"
        className="px-5 py-2 mt-10 text-sm inline-block text-white border-[1px] border-blue rounded-full bg-blue hover:bg-blue/90"
      >
        Visit Stein IAS
      </a>
    </div>
  </Modal>
);

export default About;
