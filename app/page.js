'use client';

import React, { useState } from 'react';
import CatLogo from '../components/CatLogo';
import ArrowControls from '../components/ArrowControls';
import InteractiveCats from '../components/InteractiveCats';

export default function Home() {
  const [direction, setDirection] = useState('');

  const handleArrowClick = (dir) => {
    setDirection(dir);
  };

  return (
    <main className="flex flex-col items-start p-4">
      <div className="flex">
        <div className="flex flex-col items-center">
          <CatLogo />
          <ArrowControls handleArrowClick={handleArrowClick} />
        </div>
        <InteractiveCats direction={direction} />
      </div>
    </main>
  );
}
