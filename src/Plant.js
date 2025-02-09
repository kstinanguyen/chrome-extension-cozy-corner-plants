import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './Plant.css';
const Plant = ({ phrase, availableSVGs, selectedColor, growthStage, onClick }) => {
    const [showPhrase, setShowPhrase] = useState(null);
    const displayedImage = availableSVGs.find(svg => svg.color === selectedColor && svg.stage === growthStage);
    const getRandomPhrase = () => {
        const randomIndex = Math.floor(Math.random() * phrase.length);
        return phrase[randomIndex];
    };
    return (_jsxs("div", { className: "plant", onMouseEnter: () => setShowPhrase(getRandomPhrase()), onMouseLeave: () => setShowPhrase(null), onClick: onClick, children: [displayedImage && (_jsx("img", { src: chrome.runtime.getURL(displayedImage.image), alt: displayedImage.name })), showPhrase && (_jsx("div", { className: "phrase-popup", children: _jsx("p", { children: showPhrase }) }))] }));
};
export default Plant;
