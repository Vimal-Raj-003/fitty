import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-3-pro-preview';

/**
 * Sends a message to Gemini and returns the response.
 */
export const sendMessageToGemini = async (
    message: string,
    history: ChatMessage[]
): Promise<string> => {
    try {
        const historyForModel = history.map(msg => ({
            role: msg.role,
            parts: [{ text: msg.text }]
        }));

        const chat = ai.chats.create({
            model: MODEL_NAME,
            history: historyForModel,
            config: {
                systemInstruction: "You are 'Fitty Coach', an enthusiastic, knowledgeable, and behavioral-science focused fitness assistant. Keep answers concise, motivating, and related to fitness, nutrition, and habit formation. Use markdown for formatting.",
            }
        });

        const result = await chat.sendMessage({ message });
        return result.text || "I couldn't generate a response.";
    } catch (error) {
        console.error("Gemini Chat Error:", error);
        throw new Error("Failed to get response from AI coach.");
    }
};

/**
 * Analyzes an image using Gemini.
 */
export const analyzeImageWithGemini = async (
    base64Image: string,
    prompt: string
): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: MODEL_NAME,
            contents: {
                parts: [
                    {
                        inlineData: {
                            mimeType: 'image/jpeg',
                            data: base64Image
                        }
                    },
                    { text: prompt }
                ]
            }
        });
        return response.text || "No analysis could be generated.";
    } catch (error) {
        console.error("Gemini Image Analysis Error:", error);
        throw new Error("Failed to analyze image.");
    }
};

/**
 * Analyzes a video (passed as base64 inline data).
 * Note: Browser-side limit on size is significant.
 */
export const analyzeVideoWithGemini = async (
    base64Video: string,
    mimeType: string,
    prompt: string
): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: MODEL_NAME,
            contents: {
                parts: [
                    {
                        inlineData: {
                            mimeType: mimeType,
                            data: base64Video
                        }
                    },
                    { text: prompt }
                ]
            }
        });
        return response.text || "No video analysis available.";
    } catch (error) {
        console.error("Gemini Video Analysis Error:", error);
        throw new Error("Failed to analyze video. Ensure the file is not too large.");
    }
};
