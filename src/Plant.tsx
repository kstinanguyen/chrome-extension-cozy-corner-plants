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
  onClick: () => void;
}

const Plant: React.FC<PlantProps> = ({ phrase, availableSVGs, selectedColor, growthStage, onClick }) => {
  const [showPhrase, setShowPhrase] = useState<string | null>(null);

  const displayedImage = availableSVGs.find(svg => svg.color === selectedColor && svg.stage === growthStage);

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrase.length);
    return phrase[randomIndex];
  };


  return (
    <div
      className="plant"
      onMouseEnter={() => setShowPhrase(getRandomPhrase())}
      onMouseLeave={() => setShowPhrase(null)}
      onClick={onClick}
    >
      {displayedImage && (
        <img
          src={chrome.runtime.getURL(displayedImage.image)}
          alt={displayedImage.name}
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