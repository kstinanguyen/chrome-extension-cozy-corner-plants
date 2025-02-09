"use strict";
const port = chrome.runtime.connect({ name: 'content-script' });
port.postMessage({ action: 'getMotivationalPhrases' });
port.onMessage.addListener((response) => {
    if (chrome.runtime.lastError) {
        console.error('Runtime error:', chrome.runtime.lastError);
    }
    else if (response && response.phrases) {
        console.log('Received motivational phrases:', response.phrases);
        displayPhrasesOnPlants(response.phrases);
    }
});
function displayPhrasesOnPlants(phrases) {
    console.log('Displaying phrases on plants:', phrases);
    const plants = document.querySelectorAll('.plant'); // Adjust this selector to your actual plant elements
    plants.forEach((plant, index) => {
        plant.setAttribute('title', phrases[index] || 'Grow strong!');
    });
}
