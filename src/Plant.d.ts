import React from 'react';
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
declare const Plant: React.FC<PlantProps>;
export default Plant;
