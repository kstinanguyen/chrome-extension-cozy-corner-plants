"use strict";
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchPhrases") {
        fetchPhrases()
            .then((phrases) => {
            sendResponse({ success: true, phrases });
        })
            .catch((error) => {
            sendResponse({ success: false, error: error.message });
        });
        return true;
    }
});
async function fetchPhrases() {
    const DB_URL = 'https://cozy-corner-plants-backend.onrender.com/api/phrases';
    try {
        const response = await fetch(DB_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.phrases.map((phraseObj) => phraseObj.phrase);
    }
    catch (error) {
        console.error("Failed to fetch phrases:", error);
        throw error;
    }
}
