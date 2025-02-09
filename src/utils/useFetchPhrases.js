import { useState, useEffect } from 'react';
export const useFetchPhrases = () => {
    const [phrases, setPhrases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPhrasesFromBackground = async () => {
            try {
                const response = await new Promise((resolve, reject) => {
                    chrome.runtime.sendMessage({ action: "fetchPhrases" }, (response) => {
                        if (chrome.runtime.lastError) {
                            reject(new Error(chrome.runtime.lastError.message));
                            return;
                        }
                        resolve(response);
                    });
                });
                if (response) {
                    if (response.success) {
                        setPhrases(response.phrases || []);
                    }
                    else if (response.error) {
                        setError(response.error);
                    }
                    else {
                        setError("Unexpected response format from background script.");
                    }
                }
                else {
                    setError("No response received from background script.");
                }
            }
            catch (err) {
                console.error("Error fetching phrases:", err);
                if (err instanceof Error) {
                    setError(err.message);
                }
            }
            finally {
                setLoading(false);
            }
        };
        fetchPhrasesFromBackground();
    }, []);
    return { phrases, loading, error };
};
