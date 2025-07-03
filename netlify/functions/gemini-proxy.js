exports.handler = async function(event, context) {
    const { pageIdentifier, prompt, expectJson, history } = JSON.parse(event.body);

    // A map to look up the correct API key based on the page identifier
    const apiKeys = {
        studyBuddy: process.env.GEMINI_API_KEY_STUDYBUDDY,
        presentation: process.env.GEMINI_API_KEY_PRESENTATION,
        debate: process.env.GEMINI_API_KEY_DEBATE,
        pathFinder: process.env.GEMINI_API_KEY_PATHFINDER,
        history: process.env.GEMINI_API_KEY_HISTORY,
        language: process.env.GEMINI_API_KEY_LANGUAGE
    };

    // Select the key, or return an error if the identifier is invalid
    const selectedApiKey = apiKeys[pageIdentifier];

    if (!selectedApiKey) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Invalid page identifier provided.' })
        };
    }

    const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${selectedApiKey}`;

    const payload = {
        contents: [...(history || []), { role: "user", parts: [{ text: prompt }] }]
    };

    if (expectJson) {
        payload.generationConfig = { responseMimeType: "application/json" };
    }

    try {
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorBody = await response.text();
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: 'Gemini API Error', details: errorBody })
            };
        }

        const data = await response.json();
        
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};