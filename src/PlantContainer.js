import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Plant from './Plant';
import './PlantContainer.css';
import { plantPotColors } from './utils/plantData';
import { useFetchPhrases } from './utils/useFetchPhrases';
const plantOptions = [
    { stage: 1, color: "brown", image: 'assets/s1p_brown.svg', name: "S1pBrown" },
    { stage: 1, color: "red", image: 'assets/s1p_red.svg', name: "S1pRed" },
    { stage: 1, color: "blue", image: 'assets/s1p_blue.svg', name: "S1pBlue" },
    { stage: 1, color: "green", image: 'assets/s2p_green.svg', name: "S2pGreen" },
    { stage: 1, color: "purple", image: 'assets/s2p_purple.svg', name: "S2pPurple" },
    { stage: 1, color: "clay", image: 'assets/s3p_brown.svg', name: "S3pBrown" },
    { stage: 1, color: "cobalt", image: 'assets/s3p_blue.svg', name: "S3pBlue" },
    { stage: 1, color: "white", image: 'assets/s3p_white.svg', name: "S3pWhite" },
    { stage: 2, color: "brown", image: 'assets/s1m_brown.svg', name: "S1mBrown" },
    { stage: 2, color: "red", image: 'assets/s1m_red.svg', name: "S1mRed" },
    { stage: 2, color: "blue", image: 'assets/s1m_blue.svg', name: "S1mBlue" },
    { stage: 2, color: "green", image: 'assets/s2m_green.svg', name: "S2mGreen" },
    { stage: 2, color: "purple", image: 'assets/s2m_purple.svg', name: "S2mPurple" },
    { stage: 2, color: "clay", image: 'assets/s3m_brown.svg', name: "S3mBrown" },
    { stage: 2, color: "cobalt", image: 'assets/s3m_blue.svg', name: "S3mBlue" },
    { stage: 2, color: "white", image: 'assets/s3m_white.svg', name: "S3mWhite" },
    { stage: 3, color: "brown", image: 'assets/s1f_brown.svg', name: "S1fBrown" },
    { stage: 3, color: "red", image: 'assets/s1f_red.svg', name: "S1fRed" },
    { stage: 3, color: "blue", image: 'assets/s1f_blue.svg', name: "S1fBlue" },
    { stage: 3, color: "green", image: 'assets/s2f_green.svg', name: "S2fGreen" },
    { stage: 3, color: "purple", image: 'assets/s2f_purple.svg', name: "S2fPurple" },
    { stage: 3, color: "clay", image: 'assets/s3f_brown.svg', name: "S3fBrown" },
    { stage: 3, color: "cobalt", image: 'assets/s3f_blue.svg', name: "S3fBlue" },
    { stage: 3, color: "white", image: 'assets/s3f_white.svg', name: "S3fWhite" },
];
const PlantContainer = () => {
    const { phrases, loading: fetchLoading, error } = useFetchPhrases();
    const [selectedPotType, setSelectedPotType] = useState({
        1: plantPotColors[1][0],
        2: plantPotColors[2][0],
        3: plantPotColors[3][0],
    });
    const [growthStages, setGrowthStages] = useState({
        1: 1,
        2: 1,
        3: 1,
    });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (phrases || fetchLoading) {
            setLoading(false);
        }
    }, [fetchLoading, phrases]);
    const handlePlantClick = (plantNumber) => {
        setGrowthStages((prevStages) => ({
            ...prevStages,
            [plantNumber]: prevStages[plantNumber] === 3 ? 1 : prevStages[plantNumber] + 1,
        }));
    };
    const getFilteredSVGs = (plantNumber) => {
        return plantOptions.filter((svg) => plantPotColors[plantNumber].includes(svg.color) && svg.stage === growthStages[plantNumber]);
    };
    const handlePotTypeChange = (plantNumber, color) => {
        setSelectedPotType((prevSelected) => ({
            ...prevSelected,
            [plantNumber]: color,
        }));
    };
    return (_jsxs("div", { className: "plant-container", children: [loading && _jsx("p", { children: "Loading phrases..." }), error && _jsxs("p", { children: ["Error: ", error] }), phrases.length > 0 && (_jsx(_Fragment, { children: [1, 2, 3].map((plantNumber) => (_jsxs("div", { children: [_jsx("select", { id: `pot-type-${plantNumber}`, value: selectedPotType[plantNumber], onChange: (e) => handlePotTypeChange(plantNumber, e.target.value), children: plantPotColors[plantNumber].map((color) => (_jsx("option", { value: color, children: color }, color))) }), _jsx(Plant, { availableSVGs: getFilteredSVGs(plantNumber), growthStage: growthStages[plantNumber], phrase: phrases, plantNumber: plantNumber, selectedColor: selectedPotType[plantNumber], onClick: () => handlePlantClick(plantNumber) }, `plant-${plantNumber}`)] }, plantNumber))) }))] }));
};
export default PlantContainer;
