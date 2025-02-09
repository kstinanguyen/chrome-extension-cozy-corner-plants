"use strict";
// Listen for messages from the content script (or popup)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchPhrases") {
        // Fetch the motivational phrases from the backend
        fetchPhrases()
            .then((phrases) => {
            // Respond with the fetched phrases
            sendResponse({ success: true, phrases });
        })
            .catch((error) => {
            // If an error occurs, respond with the error message
            sendResponse({ success: false, error: error.message });
        });
        // This is necessary to indicate we want to send a response asynchronously
        return true; // Keeps the message channel open for sendResponse
    }
});
// Function to fetch phrases from the backend
async function fetchPhrases() {
    const DB_URL = 'https://cozy-corner-plants-backend.onrender.com/api/phrases'; // Replace with your actual URL
    try {
        const response = await fetch(DB_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // Map through the phrases and return the string values
        return data.phrases.map((phraseObj) => phraseObj.phrase);
    }
    catch (error) {
        console.error("Failed to fetch phrases:", error);
        throw error; // Rethrow to be caught by the listener
    }
}
