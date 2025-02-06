import React, { useState } from 'react';
import './Plant.css';

interface PlantProps {
  plantNumber: number;
  growthStage: number;
  phrase: string[];
  availableSVGs: { 
    stage: number; 
    color: string; 
    image: string; 
    name: string;
  }[];
  selectedColor: string;
}

const Plant: React.FC<PlantProps> = ({ phrase, availableSVGs, selectedColor }) => {
  const [showPhrase, setShowPhrase] = useState<string | null>(null);

  const displayedImage = availableSVGs.find(svg => svg.color === selectedColor);

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrase.length);
    return phrase[randomIndex];
  };


  return (
    <div
      className="plant"
      onMouseEnter={() => setShowPhrase(getRandomPhrase())}
      onMouseLeave={() => setShowPhrase(null)}
    >
      {displayedImage && (
        <img
          src={chrome.runtime.getURL(displayedImage.image)}
          alt={displayedImage.name}
          width="50"
          height="50"
        />
      )}

      {showPhrase && (
        <div className="phrase-popup">
          <p>{showPhrase}</p>
        </div>
      )}
    </div>
  );
};

export default Plant;