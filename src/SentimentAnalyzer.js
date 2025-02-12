import axios from 'axios';
import React, { useState } from 'react';

function SentimentAnalyzer() {
    const [text, setText] = useState('');
    const [sentiment, setSentiment] = useState(null);
    const [confidence, setConfidence] = useState(null);
    const [model, setModel] = useState('custom'); // Default model

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                'place api endpoint here /analyze/', // Replace with your actual API endpoint
                { text, model }
            );

            if (model === 'custom') {
                setSentiment(response.data.sentiment);
                setConfidence(response.data.confidence);
            } else if (model === 'llama3') {
                // Handle Llama 3 response (adjust based on its structure)
                setSentiment(response.data.choices[0].message.content); 
                setConfidence(null); // Llama 3 might not provide a confidence score
            }
        } catch (error) {
            console.error('Error analyzing sentiment:', error);
            // Handle error, e.g., display an error message to the user
        }
    };

    return (
        <div>
            <h1>Sentiment Analyzer</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="text">Enter text:</label>
                    <textarea
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="model">Select Model:</label>
                    <select
                        id="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    >
                        <option value="custom">Custom (Hugging Face)</option>
                        <option value="llama3">Llama 3 (Groq)</option>
                    </select>
                </div>
                <button type="submit">Analyze</button>
            </form>
            {sentiment && (
                <div>
                    <h2>Sentiment: {sentiment}</h2>
                    {confidence && <p>Confidence: {confidence}</p>}
                </div>
            )}
        </div>
    );
}

export default SentimentAnalyzer;