export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
    id: string;
}

export interface AnalysisResult {
    text: string;
    loading: boolean;
    error: string | null;
}