import React from 'react';
import Modal from './Modal';

const Donate = ({ setShowDonate }) => (
  <Modal setShowDonate={setShowDonate}>
    <div className="w-full pr-6">
      <h1 className="mb-10 text-4xl font-bold">Donate to a charity</h1>
      <div className="items-start gap-16 pb-10 lg:flex">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold">National Literacy Trust (UK)</h2>
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
            Donate UK
          </a>
        </div>

        <div className="mt-16 lg:w-1/2 lg:mt-0">
          <h2 className="text-2xl font-bold">The Reading Team (US)</h2>
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
            Donate US
          </a>
        </div>
      </div>
    </div>
  </Modal>
);

export default Donate;
