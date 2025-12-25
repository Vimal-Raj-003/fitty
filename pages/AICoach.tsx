import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, AnalysisResult } from '../types';
import { sendMessageToGemini, analyzeImageWithGemini, analyzeVideoWithGemini } from '../services/geminiService';

enum Tab {
    CHAT = 'CHAT',
    VISION = 'VISION',
    VIDEO = 'VIDEO'
}

interface AICoachWidgetProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AICoachWidget = ({ isOpen, onClose }: AICoachWidgetProps) => {
    const [activeTab, setActiveTab] = useState<Tab>(Tab.CHAT);
    
    // Chat State
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'model', text: 'Hello! I am your Fitty AI Coach. How can I help you achieve your fitness goals today?', id: 'init' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Vision State
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [visionPrompt, setVisionPrompt] = useState('Analyze this gym equipment/exercise and give me safety tips.');
    const [visionResult, setVisionResult] = useState<AnalysisResult>({ text: '', loading: false, error: null });

    // Video State
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [videoMimeType, setVideoMimeType] = useState<string>('');
    const [videoPrompt, setVideoPrompt] = useState('Analyze my form in this video clip and suggest improvements.');
    const [videoResult, setVideoResult] = useState<AnalysisResult>({ text: '', loading: false, error: null });


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSendMessage = async () => {
        if (!input.trim()) return;
        const userMsg: ChatMessage = { role: 'user', text: input, id: Date.now().toString() };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            const responseText = await sendMessageToGemini(userMsg.text, messages);
            setMessages(prev => [...prev, { role: 'model', text: responseText, id: (Date.now() + 1).toString() }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now.", id: (Date.now() + 1).toString() }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                const base64Data = base64String.split(',')[1];
                setSelectedImage(base64Data);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 20 * 1024 * 1024) { 
                alert("Video file is too large for browser analysis. Please choose a clip under 20MB.");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                const base64Data = base64String.split(',')[1];
                setSelectedVideo(base64Data);
                setVideoMimeType(file.type);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAnalyzeImage = async () => {
        if (!selectedImage) return;
        setVisionResult({ text: '', loading: true, error: null });
        try {
            const text = await analyzeImageWithGemini(selectedImage, visionPrompt);
            setVisionResult({ text, loading: false, error: null });
        } catch (err) {
            setVisionResult({ text: '', loading: false, error: "Failed to analyze image." });
        }
    };

    const handleAnalyzeVideo = async () => {
        if (!selectedVideo) return;
        setVideoResult({ text: '', loading: true, error: null });
        try {
            const text = await analyzeVideoWithGemini(selectedVideo, videoMimeType, videoPrompt);
            setVideoResult({ text, loading: false, error: null });
        } catch (err) {
            setVideoResult({ text: '', loading: false, error: "Failed to analyze video." });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-6 right-6 w-[380px] h-[600px] max-h-[calc(100vh-2rem)] bg-surface-dark border border-surface-border rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 ring-1 ring-white/10 backdrop-blur-xl">
             {/* Header */}
             <div className="flex items-center justify-between px-4 py-3 bg-surface-darker/80 border-b border-surface-border shrink-0 backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                         <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                    </div>
                    <div>
                        <h2 className="text-white font-bold text-sm">Fitty Coach</h2>
                        <div className="flex items-center gap-1">
                             <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-[10px] text-text-secondary">Online</span>
                        </div>
                    </div>
                </div>
                <button onClick={onClose} className="size-8 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
            </div>

            {/* Tabs */}
             <div className="flex border-b border-surface-border shrink-0 bg-surface-darker/50">
                {[
                    { id: Tab.CHAT, label: 'Chat', icon: 'chat_bubble' },
                    { id: Tab.VISION, label: 'Vision', icon: 'image' },
                    { id: Tab.VIDEO, label: 'Video', icon: 'movie' },
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold transition-colors relative ${activeTab === tab.id ? 'text-primary' : 'text-slate-400 hover:text-white'}`}
                    >
                        <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                        {tab.label}
                        {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>}
                    </button>
                ))}
             </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden relative bg-surface-dark/95 flex flex-col">
                {/* CHAT TAB */}
                {activeTab === Tab.CHAT && (
                    <>
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${msg.role === 'user' ? 'bg-primary text-background-dark font-medium' : 'bg-surface-border text-gray-100'}`}>
                                        <p className="whitespace-pre-wrap">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-surface-border rounded-2xl px-3 py-2 flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce delay-75"></div>
                                        <div className="w-1.5 h-1.5 bg-text-secondary rounded-full animate-bounce delay-150"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        <div className="p-3 bg-surface-darker/50 border-t border-surface-border backdrop-blur-sm">
                            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex gap-2">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask anything..."
                                    className="flex-1 bg-surface-dark border border-surface-border rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                                />
                                <button type="submit" disabled={!input.trim() || isTyping} className="bg-primary disabled:opacity-50 text-background-dark rounded-full size-10 flex items-center justify-center font-bold hover:bg-primary-hover transition-colors shrink-0">
                                    <span className="material-symbols-outlined text-[20px]">send</span>
                                </button>
                            </form>
                        </div>
                    </>
                )}

                {/* VISION TAB */}
                {activeTab === Tab.VISION && (
                    <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                        <div className="flex flex-col gap-4">
                            <div className="border-2 border-dashed border-surface-border rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2 bg-background-dark/30 hover:bg-background-dark/50 transition-colors relative overflow-hidden group">
                                {selectedImage ? (
                                    <img src={`data:image/jpeg;base64,${selectedImage}`} alt="Upload preview" className="max-h-40 object-contain rounded shadow-lg z-10" />
                                ) : (
                                    <>
                                        <div className="size-10 rounded-full bg-surface-border flex items-center justify-center text-text-secondary">
                                            <span className="material-symbols-outlined text-2xl">add_photo_alternate</span>
                                        </div>
                                        <p className="text-gray-400 text-xs">Upload image</p>
                                    </>
                                )}
                                <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer z-20" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Prompt</label>
                                <textarea
                                    value={visionPrompt}
                                    onChange={(e) => setVisionPrompt(e.target.value)}
                                    className="w-full bg-surface-darker/50 border border-surface-border rounded-xl p-3 text-white text-sm focus:outline-none focus:border-primary min-h-[80px]"
                                />
                            </div>

                            <button 
                                onClick={handleAnalyzeImage} 
                                disabled={!selectedImage || visionResult.loading}
                                className="w-full py-3 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 text-sm"
                            >
                                {visionResult.loading ? <span className="material-symbols-outlined animate-spin text-[18px]">refresh</span> : <span className="material-symbols-outlined text-[18px]">auto_awesome</span>}
                                {visionResult.loading ? 'Analyzing...' : 'Analyze'}
                            </button>

                            {visionResult.text && (
                                <div className="bg-surface-border/50 rounded-xl p-4 animate-in fade-in">
                                    <div className="prose prose-invert prose-sm max-w-none text-gray-200 text-xs leading-relaxed">
                                        <p className="whitespace-pre-wrap">{visionResult.text}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* VIDEO TAB */}
                {activeTab === Tab.VIDEO && (
                    <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                         <div className="flex flex-col gap-4">
                            <div className="border-2 border-dashed border-surface-border rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2 bg-background-dark/30 hover:bg-background-dark/50 transition-colors relative overflow-hidden group">
                                {selectedVideo ? (
                                    <div className="flex flex-col items-center gap-1 z-10">
                                        <span className="material-symbols-outlined text-3xl text-primary">check_circle</span>
                                        <p className="text-white font-medium text-xs">Video selected</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="size-10 rounded-full bg-surface-border flex items-center justify-center text-text-secondary">
                                            <span className="material-symbols-outlined text-2xl">video_file</span>
                                        </div>
                                        <p className="text-gray-400 text-xs">Upload clip (Max 20MB)</p>
                                    </>
                                )}
                                <input type="file" accept="video/*" onChange={handleVideoUpload} className="absolute inset-0 opacity-0 cursor-pointer z-20" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Prompt</label>
                                <textarea
                                    value={videoPrompt}
                                    onChange={(e) => setVideoPrompt(e.target.value)}
                                    className="w-full bg-surface-darker/50 border border-surface-border rounded-xl p-3 text-white text-sm focus:outline-none focus:border-primary min-h-[80px]"
                                />
                            </div>

                            <button 
                                onClick={handleAnalyzeVideo} 
                                disabled={!selectedVideo || videoResult.loading}
                                className="w-full py-3 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 text-sm"
                            >
                                {videoResult.loading ? <span className="material-symbols-outlined animate-spin text-[18px]">refresh</span> : <span className="material-symbols-outlined text-[18px]">auto_awesome</span>}
                                {videoResult.loading ? 'Analyzing...' : 'Analyze'}
                            </button>

                            {videoResult.text && (
                                <div className="bg-surface-border/50 rounded-xl p-4 animate-in fade-in">
                                    <div className="prose prose-invert prose-sm max-w-none text-gray-200 text-xs leading-relaxed">
                                        <p className="whitespace-pre-wrap">{videoResult.text}</p>
                                    </div>
                                </div>
                            )}
                         </div>
                    </div>
                )}
            </div>
        </div>
    );
};